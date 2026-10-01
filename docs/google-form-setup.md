# 無料診断フォーム → Googleスプレッドシート連携（セットアップ）

フォーム送信を **Google Apps Script（GAS）Web App** で受け取り、スプレッドシートに1行ずつ蓄積＋メール通知します。
設定後は `src/lib/site.js` の `FORM_ENDPOINT` にWeb AppのURLを貼るだけです。

> 現在の本番は連携済みです。コードを変更して **「新しいデプロイ」** を作るとURLが変わるため、その場合は
> `src/lib/site.js` の `FORM_ENDPOINT` を新URLに更新してください（URLを変えたくない場合は「デプロイを管理 → 編集 → 新バージョン」で更新）。

## 手順

### 1. スプレッドシートを作る
https://sheets.new で新規作成（名前例：`店舗集客LP_診断申込`）。

### 2. Apps Script を開く
メニュー **拡張機能 → Apps Script**。既定の `コード.gs` を全消しして下記を貼り付け、保存。

```javascript
function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('診断申込') || ss.insertSheet('診断申込');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['受信日時','お名前','店舗名','メール','業種','エリア','マップURL/住所','電話','お悩み','送信日時']);
  }
  var p = (e && e.parameter) || {};
  sheet.appendRow([new Date(), p.name||'', p.shop||'', p.email||'', p.industry||'', p.area||'', p.mapUrl||'', p.tel||'', p.message||'', p.submittedAt||'']);

  // メール通知（送信失敗してもスプレッドシート保存は継続）
  try {
    MailApp.sendEmail({
      to: 'hiruma20231111@gmail.com',
      subject: '【LP】無料診断の新規申込：' + (p.shop || '（店舗名なし）'),
      body:
        '新しい無料診断の申込が届きました。\n\n' +
        '■ お名前：' + (p.name || '') + '\n' +
        '■ 店舗名：' + (p.shop || '') + '\n' +
        '■ メール：' + (p.email || '') + '\n' +
        '■ 業種：' + (p.industry || '') + '\n' +
        '■ エリア：' + (p.area || '') + '\n' +
        '■ マップURL/住所：' + (p.mapUrl || '') + '\n' +
        '■ 電話：' + (p.tel || '') + '\n' +
        '■ お悩み：\n' + (p.message || '') + '\n\n' +
        '— 地域の集客相談室 LP'
    });
  } catch (err) { /* 通知失敗は無視 */ }

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
```

### 3. デプロイ
**デプロイ → 新しいデプロイ** →（⚙️）**ウェブアプリ** → 実行するユーザー：**自分** ／ アクセス：**全員** → **デプロイ**。
初回は権限を承認（メール送信の権限を含むため「許可」）。表示される `…/exec` URLをコピー。

### 4. LPに接続
`src/lib/site.js` の `FORM_ENDPOINT` にURLを貼り、`git push`（自動デプロイ）。

## 動作
- 送信 → シート「診断申込」に1行追加 ＋ `hiruma20231111@gmail.com` に通知メール。
- 通知先を変える場合は上記 `to:` を編集し、**デプロイを管理 → 編集 → 新バージョン**で更新（URL維持）。

## 注意
- `FORM_ENDPOINT` が空だと送信はスキップされ完了画面のみ（デモ動作）。
- 送信は `mode:'no-cors'` のため、ブラウザは成否を厳密判定しません（GAS側で確実に受信・保存）。

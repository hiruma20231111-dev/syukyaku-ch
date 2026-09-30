# 無料診断フォーム → Googleスプレッドシート連携（セットアップ）

フォーム送信を **Google Apps Script（GAS）Web App** で受け取り、スプレッドシートに1行ずつ蓄積します。
所要時間 約10分・無料。設定後は `src/lib/site.js` の `FORM_ENDPOINT` にURLを貼るだけです。

## 手順

### 1. スプレッドシートを作る
1. https://sheets.new で新規スプレッドシートを作成（名前例：`店舗集客LP_診断申込`）。

### 2. Apps Script を開く
1. メニュー **拡張機能 → Apps Script**。
2. 既定の `コード.gs` を全消しして、下のコードを貼り付け。

```javascript
function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('診断申込') || ss.insertSheet('診断申込');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      '受信日時', 'お名前', '店舗名', '業種', 'エリア',
      'GoogleマップURL/住所', 'メール', '電話', 'お悩み', '送信日時(ブラウザ)'
    ]);
  }
  var p = (e && e.parameter) || {};
  sheet.appendRow([
    new Date(), p.name || '', p.shop || '', p.industry || '', p.area || '',
    p.mapUrl || '', p.email || '', p.tel || '', p.message || '', p.submittedAt || ''
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 3. デプロイ
1. 右上 **デプロイ → 新しいデプロイ**。
2. 種類（歯車）→ **ウェブアプリ**。
3. 設定：
   - 実行するユーザー：**自分**
   - アクセスできるユーザー：**全員**
4. **デプロイ** → 権限を承認（自分のGoogleアカウントで許可）。
5. 表示される **ウェブアプリのURL**（`https://script.google.com/macros/s/.../exec`）をコピー。

### 4. LPに接続
`src/lib/site.js` を開き、コピーしたURLを貼る：

```js
export const FORM_ENDPOINT = "https://script.google.com/macros/s/XXXXXXXX/exec";
```

保存してデプロイ（`git push` で自動デプロイ）すれば、フォーム送信がスプレッドシートに届きます。

## メール通知も欲しい場合（任意）
上の `appendRow(...)` の直後に追記：

```javascript
  MailApp.sendEmail(
    'hiruma20231111@gmail.com',
    '【LP】無料診断の新規申込：' + (p.shop || ''),
    'お名前: ' + p.name + '\n店舗: ' + p.shop + '\n業種: ' + p.industry +
    '\nエリア: ' + p.area + '\nマップ/住所: ' + p.mapUrl +
    '\nメール: ' + p.email + '\n電話: ' + p.tel + '\nお悩み: ' + p.message
  );
```
※通知先メールは適宜変更。変更後は **新しいデプロイ**（または既存デプロイの管理→編集→バージョン更新）を忘れずに。

## 注意
- `FORM_ENDPOINT` が空のあいだは、送信ボタンは「完了画面」を出しますが**データは保存されません**（デモ動作）。本番前に必ずURLを設定してください。
- 送信は `mode: 'no-cors'` で行うため、ブラウザ側は成功/失敗を厳密に判定しません（GAS側で確実に受信・保存されます）。

# 店舗集客LP（相談獲得）

SNS集客チャンネル → LP流入 → 相談獲得（LINE ＋ 無料診断フォーム）のランディングページ。
テーマ「店舗の集客力を、本来あるべき姿へ」。ローカルSEO（Googleマップ/MEO）の個人アカウント向け。

- スタック: **Vite + React + TailwindCSS v4**
- デザイン基準: Figma `店舗集客LP_相談獲得` / ブランド：グリーン基調＋オレンジCTA＋自然写真

## 開発

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 本番ビルド (dist/)
npm run preview  # ビルド結果の確認
```

## 主要な設定（差し替えはここ）

`src/lib/site.js`

| 定数 | 内容 |
|------|------|
| `LINE_URL` | LINE公式の友だち追加URL |
| `FORM_ENDPOINT` | 無料診断フォームの送信先（GAS Web App URL）→ `docs/google-form-setup.md` |
| `BRAND_NAME` | 表示名（**現在は仮**。正式名称に差し替え） |
| `OPERATOR` | フッターの運営者表記 |

## 構成

```
src/
├── App.jsx                 # 10セクションの本体
├── index.css               # Tailwind + デザイントークン(@theme)
├── lib/site.js             # サイト定数（リンク・文言）
└── components/
    ├── primitives.jsx      # Chip / CTAButton / Section / PhotoSection
    └── DiagnosisForm.jsx   # 無料診断フォーム
public/assets/              # ロゴ・ヒーロー動画・自然写真
docs/google-form-setup.md   # フォーム送信先(GAS)のセットアップ
```

## セクション構成
Hero（動画）→ 問題提起 → 本質 → 権威 → 緊急性(Ask Maps) → 学べること(6カード) → 無料診断CTA → 実績 → 相談フロー → **無料診断フォーム** → 最終CTA/フッター

## デプロイ
GitHub `hiruma20231111-dev/syukyaku-ch` → Vercel。`main` への push で自動デプロイ。

## TODO
- [ ] `FORM_ENDPOINT` を設定（フォーム送信の有効化）
- [ ] `BRAND_NAME` を正式名称へ
- [ ] 必要に応じてヒーロー動画・自然写真を差し替え

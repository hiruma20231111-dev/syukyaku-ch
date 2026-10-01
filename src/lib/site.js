// サイト全体で使う定数（差し替えはここだけでOK）
export const LINE_URL = "https://line.me/ti/p/3vXUc-qdjs";

// 診断フォームの送信先（Google Apps Script Web App のURL）。
// 未設定（空）の場合は送信をスキップして完了画面のみ表示（デモ用）。
// ※ setup: docs/google-form-setup.md の手順で発行したURLを貼る
export const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxU68yp7LM2p-6hEAG65G3L61pPGIBs-xfyj4SVI-kqFkMNUD7QopEuY_Iohmb9vAiq/exec";

// 診断CTAはフォームへスクロール
export const FORM_ANCHOR = "#form";

export const BRAND_NAME = "地域の集客相談エージェント";
export const OPERATOR = "ローカルSEO最大手 現役社員";

export const CTA = {
  diagnosis: "無料でマップ集客診断",
  line: "LINEで相談・最新情報を受け取る",
};

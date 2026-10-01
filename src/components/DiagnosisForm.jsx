import { useState } from "react";
import { Link } from "react-router-dom";
import { Chip } from "./primitives";
import { FORM_ENDPOINT, LINE_URL } from "../lib/site";

const FIELDS = [
  { name: "name", label: "お名前（ご担当者）", type: "text", required: true, placeholder: "山田 太郎" },
  { name: "shop", label: "店舗名", type: "text", required: true, placeholder: "◯◯カフェ" },
  { name: "email", label: "メールアドレス", type: "email", required: true, placeholder: "you@example.com", hint: "診断結果のお届け先です。" },
  { name: "industry", label: "業種（任意）", type: "text", required: false, placeholder: "飲食／美容／クリニック など" },
  { name: "area", label: "エリア（任意）", type: "text", required: false, placeholder: "大阪市北区 など" },
  {
    name: "mapUrl",
    label: "GoogleマップのURL または 店舗の住所（任意）",
    type: "text",
    required: false,
    placeholder: "https://maps.app.goo.gl/... または 住所",
    hint: "分かる範囲でOK。なくても大丈夫です（あると診断がより正確になります）。",
    full: true,
  },
  { name: "tel", label: "電話番号（任意）", type: "tel", required: false, placeholder: "090-0000-0000" },
];

const EMPTY = FIELDS.reduce((a, f) => ({ ...a, [f.name]: "" }), { message: "", consent: false });

export default function DiagnosisForm() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const update = (k, v) => setValues((s) => ({ ...s, [k]: v }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (!values.consent) return;
    setStatus("sending");
    try {
      if (FORM_ENDPOINT) {
        const payload = { ...values, submittedAt: new Date().toISOString() };
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(payload).toString(),
        });
      } else {
        // 送信先未設定（デモ）。本番は src/lib/site.js の FORM_ENDPOINT を設定。
        // eslint-disable-next-line no-console
        console.warn("[診断フォーム] FORM_ENDPOINT が未設定のため送信をスキップしました。", values);
      }
      setStatus("done");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <section id="form" className="scroll-mt-6 bg-bg-soft px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center shadow-[0_10px_30px_rgba(7,88,78,0.12)]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-primary text-2xl text-white">
            ✓
          </div>
          <h2 className="mt-5 text-xl font-black text-green-deep sm:text-2xl">
            送信ありがとうございます！
          </h2>
          <p className="mt-4 text-sm leading-[1.9] text-ink/80">
            いただいた情報をもとに、あなたの店のGoogleマップ活用度を診断し、メールでお送りします。
            <br />
            お急ぎのご相談は、LINEからもどうぞ。
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-orange px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange/30 transition-transform hover:-translate-y-0.5 hover:bg-orange-soft"
          >
            LINEで相談・最新情報を受け取る
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="scroll-mt-6 bg-bg-soft px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <Chip tone="orange">無料診断フォーム</Chip>
        <h2 className="mt-6 text-2xl font-black leading-[1.45] text-green-deep sm:text-3xl md:text-4xl">
          無料で、マップ集客を診断します。
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-[1.9] text-ink/80 sm:text-base">
          下のフォームに店舗情報を入力するだけ。あなたの店の「今の活用度」と改善ポイントを、
          現場目線で診断してお返しします。
        </p>

        <form onSubmit={handleSubmit} className="mt-10 w-full text-left">
          <div className="grid gap-5 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <div key={f.name} className={f.full ? "sm:col-span-2" : ""}>
                <label htmlFor={f.name} className="block text-sm font-bold text-green-deep">
                  {f.label}
                  {f.required && <span className="ml-1 text-orange">*</span>}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  required={f.required}
                  placeholder={f.placeholder}
                  value={values[f.name]}
                  onChange={(e) => update(f.name, e.target.value)}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/25"
                />
                {f.hint && <p className="mt-1 text-xs text-ink/55">{f.hint}</p>}
              </div>
            ))}

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-bold text-green-deep">
                今のお悩み・聞きたいこと（任意）
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="例：口コミが増えない／写真をどう載せればいい？ など"
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/25"
              />
            </div>
          </div>

          <label className="mt-6 flex items-start gap-3 text-left text-xs leading-[1.7] text-ink/70">
            <input
              type="checkbox"
              checked={values.consent}
              onChange={(e) => update("consent", e.target.checked)}
              required
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#02b75a]"
            />
            <span>
              <Link
                to="/privacy"
                className="font-bold text-green-deep underline underline-offset-2"
              >
                プライバシーポリシー
              </Link>
              に同意のうえ、入力内容を診断結果のご連絡・ご相談対応の目的で利用することに同意します。
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-7 w-full rounded-full bg-orange px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange/30 transition-transform hover:-translate-y-0.5 hover:bg-orange-soft disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "送信中…" : "この内容で無料診断を申し込む"}
          </button>

          {status === "error" && (
            <p className="mt-4 text-center text-sm text-orange">
              送信に失敗しました。お手数ですがLINEからご連絡ください。
            </p>
          )}
          <p className="mt-4 text-center text-xs text-ink/55">
            登録・費用は一切かかりません。しつこい営業もしません。
          </p>
        </form>
      </div>
    </section>
  );
}

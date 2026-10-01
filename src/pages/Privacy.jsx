import { Link } from "react-router-dom";
import { LINE_URL, BRAND_NAME, OPERATOR } from "../lib/site";

function Item({ no, title, children }) {
  return (
    <section className="mt-9">
      <h2 className="flex items-baseline gap-2 text-lg font-bold text-green-deep">
        <span className="text-orange">{no}.</span>
        {title}
      </h2>
      <div className="mt-3 text-sm leading-[2] text-ink/85">{children}</div>
    </section>
  );
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-bg-soft">
      {/* ヘッダー */}
      <header className="bg-green-deep px-6 py-5 sm:px-8">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <img src="/assets/logo.png" alt={BRAND_NAME} className="h-9 w-9 rounded-full object-cover" />
          <Link to="/" className="text-sm font-bold text-white hover:underline">
            {BRAND_NAME}
          </Link>
        </div>
      </header>

      {/* 本文 */}
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
        <h1 className="text-2xl font-black text-ink sm:text-3xl">プライバシーポリシー</h1>
        <p className="mt-4 text-sm leading-[2] text-ink/80">
          「{BRAND_NAME}」（以下「当方」）は、無料診断およびご相談の対応にあたり、お預かりする情報を以下のとおり取り扱います。
        </p>

        <Item no="1" title="取得する情報">
          フォームまたはLINEを通じて、次の情報をお預かりする場合があります。
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>お名前（ご担当者名）</li>
            <li>店舗名</li>
            <li>メールアドレス</li>
            <li>電話番号</li>
            <li>GoogleマップのURL・店舗の住所</li>
            <li>ご相談内容</li>
          </ul>
          <p className="mt-2 text-ink/70">
            このうち、お名前・店舗名・メールアドレス以外は任意です。ご入力がなくても診断・ご相談は承ります。
          </p>
        </Item>

        <Item no="2" title="利用目的">
          お預かりした情報は、次の目的の範囲でのみ利用します。
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>無料診断の結果のご連絡</li>
            <li>いただいたご相談への対応・ご連絡</li>
          </ul>
          <p className="mt-2">上記以外の目的には利用しません。</p>
        </Item>

        <Item no="3" title="第三者への提供">
          ご本人の同意がある場合、または法令に基づき開示が求められる場合を除き、お預かりした情報を第三者へ提供・販売することはありません。
        </Item>

        <Item no="4" title="外部サービスの利用">
          フォームの送信内容は、Google のサービス（スプレッドシート等）に保存して管理する場合があります。また、ご相談は LINE を通じて行います。これらのサービス上での情報の取り扱いは、各提供事業者の定めに従います。
        </Item>

        <Item no="5" title="情報の管理・削除">
          お預かりした情報は、利用目的の達成に必要な範囲で適切に管理し、不要になった情報は速やかに削除します。ご自身の情報の確認・訂正・削除をご希望の場合は、下記の窓口までお申し付けください。
        </Item>

        <Item no="6" title="お問い合わせ窓口">
          本ポリシーに関するお問い合わせ・情報の削除のご依頼は、公式 LINE よりご連絡ください。
          <div className="mt-4">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-soft"
            >
              公式LINEで問い合わせる
            </a>
          </div>
        </Item>

        <p className="mt-12 text-xs text-ink/55">
          制定日：2026年10月1日　／　運営：{OPERATOR}
        </p>

        <div className="mt-8">
          <Link to="/" className="text-sm font-bold text-green-deep underline underline-offset-2 hover:text-green-primary">
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}

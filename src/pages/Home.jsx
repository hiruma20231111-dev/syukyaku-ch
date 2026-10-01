import { Link } from "react-router-dom";
import { Chip, CTAButton, Section, PhotoSection } from "../components/primitives";
import DiagnosisForm from "../components/DiagnosisForm";
import { LINE_URL, FORM_ANCHOR, BRAND_NAME, OPERATOR, CTA } from "../lib/site";

const LISKUL_URL = "https://liskul.com/googlemap-case-112210";
const ASKMAPS_URL = "https://9to5google.com/2026/08/06/google-ask-maps-global/";

const LEARN_CARDS = [
  ["1", "GBPが集客の入口", "GBP（Googleビジネスプロフィール＝マップ上の店舗情報）。まず整える3項目——基本情報・カテゴリ／写真／口コミ。"],
  ["2", "順位を決める3要素", "関連性・距離・知名度。自分で改善しやすいのは“関連性（情報の充実）”です。"],
  ["3", "AI検索時代の新ルール", "“順位”より“選ばれる根拠”。情報と口コミの具体性で選ばれます。"],
  ["4", "口コミは“件数”より“言葉”", "どんな言葉で書かれるかが大事。くわしくは下の例をどうぞ。"],
  ["5", "サイテーション", "他サイトでの店舗情報の掲載・言及（サイテーション）。NAP（店名・住所・電話番号の表記）の一貫性が信頼の土台。"],
  ["6", "迷ったらこの順番", "基本情報→口コミ→写真→表記の統一→月1で見直し。"],
];

const STATS = [
  ["155%", "検索数\n（飲食・約120店）"],
  ["345%", "検索数\n（買取・37店）"],
  ["179.9%", "検索数\n（飲食・23店）"],
  ["約4倍", "表示・反応\n（収納・約2,000店）"],
];

const STEPS = [
  ["1", "友だち追加", "まずは公式LINEを追加するだけ。数タップで完了します。"],
  ["2", "困りごとを送る", "店舗のURLや写真でもOK。今の状況を教えてください。"],
  ["3", "現場目線でお返事", "必要なら無料診断でさらに深掘り。一緒に次の一手を決めます。"],
];

const POSTS = [3, 4, 5, 6, 7, 8].map((n) => `/assets/posts/post-${n}.jpg`);

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col overflow-hidden md:min-h-[760px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/hero-poster.jpg"
      >
        <source src="/assets/hero-web.mp4" type="video/mp4" />
      </video>
      <div className="veil-deep absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center gap-3 px-6 pt-7 sm:px-8">
        <img src="/assets/logo.png" alt={BRAND_NAME} className="h-10 w-10 rounded-full object-cover" />
        <span className="text-base font-bold text-white">{BRAND_NAME}</span>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-12 text-center text-white sm:px-8">
        <h1 className="text-4xl font-black leading-[1.3] sm:text-5xl md:text-6xl">
          店舗の集客力を、
          <br />
          本来あるべき姿へ。
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-[1.9] text-white/90 sm:text-base md:text-lg">
          お客様は今日も「Googleマップ」で、あなたの店を探しています。
          <br className="hidden sm:block" />
          ローカルSEO最大手の“中の人”が、現場で効いている最新情報を個人でお届けします。
        </p>
        <p className="mt-5 inline-block rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold text-white sm:text-base">
          Googleマップ経由の来店を増やすための、“最低限のやること”が分かります。
        </p>
        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <CTAButton href={FORM_ANCHOR} variant="primary" external={false}>
            {CTA.diagnosis}
          </CTAButton>
          <CTAButton href={LINE_URL} variant="line">
            {CTA.line}
          </CTAButton>
        </div>
        <p className="mt-5 text-xs text-white/70">フォロー＋LINEで、集客のお困りごとを少しでも減らす。</p>
      </div>
    </section>
  );
}

function Heading({ children, tone = "ink", className = "" }) {
  const color = tone === "deep" ? "text-green-deep" : tone === "white" ? "text-white" : "text-ink";
  return (
    <h2
      className={`mt-6 text-2xl font-black leading-[1.45] sm:text-3xl md:text-4xl ${color} ${className}`}
    >
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />

      {/* 2. 問題提起 */}
      <Section bg="soft">
        <Chip tone="primary">よくある悩み</Chip>
        <Heading>
          集客、“何が正解か分からないまま”
          <br className="hidden md:block" />
          頑張っていませんか？
        </Heading>
        <p className="mt-6 max-w-2xl text-sm leading-[2] text-ink/80 sm:text-base">
          MEO（マップでの上位表示対策）、口コミ、写真、SNS…情報は溢れているのに、まとまった「正解」がない。業者によって言うことも違う。片手間で調べても、これで合っているのか確信が持てない——それが今のGoogleマップ／マーケ業界のリアルです。
        </p>
      </Section>

      {/* 3. 本質の再定義 */}
      <Section bg="white">
        <Chip tone="mint">本質</Chip>
        <Heading tone="deep">
          集客で一番大事なのは、
          <br className="hidden md:block" />
          “今いるお客様の満足”。
        </Heading>
        <p className="mt-6 max-w-2xl text-sm leading-[2] text-ink/85 sm:text-base">
          新しいテクニックを追いかける前に。目の前のお客様に満足してもらうこと——それが口コミになり、写真になり、Googleにもお客様にも“選ばれる店”の土台になります。マーケの知識は、信頼できる相手に相談しながら“最低限”できればいい。全部を自分で完璧にやる必要はありません。
        </p>
        <p className="mt-6 max-w-xl text-base font-bold leading-[1.7] text-orange sm:text-lg">
          だから私は、あなたの“最低限”を最短で整える相談相手でありたい。
        </p>
      </Section>

      {/* 4. 権威・信頼 */}
      <PhotoSection image="/assets/nature-authority.jpg">
        <Chip tone="mint">運営者について</Chip>
        <Heading tone="white">
          なぜ、“最大手の中の人”が
          <br className="hidden md:block" />
          個人で発信するのか。
        </Heading>
        <p className="mt-6 max-w-2xl text-sm leading-[2] text-white/90 sm:text-base">
          ローカルSEO（MEO）支援の最大手で、日々店舗の集客に向き合っています。だからこそ届けられるのは、机上の一般論ではなく“現場で今効いている”情報です。会社の看板ではなく、一人の担当者として、あなたの店の景色を良くしたい——そう思って発信しています。
        </p>
        <p className="mt-5 text-sm font-bold text-mint-light">
          ローカルSEO最大手・現役担当／個人アカウント
        </p>
      </PhotoSection>

      {/* 5. 緊急性 */}
      <Section bg="white">
        <Chip tone="orange">なぜ今か</Chip>
        <Heading tone="deep">
          Googleマップは、
          <br className="hidden md:block" />
          “AIに選ばれる”時代へ。
        </Heading>
        <p className="mt-6 max-w-2xl text-sm leading-[2] text-ink/85 sm:text-base">
          2026年、GoogleマップにAI検索「Ask Maps」（GoogleマップのAI検索）が日本でも使えるようになりました。情報が古い・薄い・バラバラな店は、AIに見つけてもらいにくくなります。「来る前に準備」ではなく「もう始まっている」——今から少しずつ整えるかどうかで、これから差がつきます。
        </p>
        <div className="mt-9 w-full max-w-2xl rounded-3xl bg-green-deep px-7 py-10 sm:px-10">
          <p className="text-xs font-bold tracking-[0.3em] text-mint-light">これからの検索</p>
          <p className="mt-3 text-2xl font-black leading-[1.4] text-white sm:text-3xl">
            AIが「薦める数店」に、入れるか。
          </p>
          <p className="mt-3 text-sm leading-[1.8] text-white/90">
            AIが理由つきで薦める“根拠”を整えられるかで、見つけてもらえるかが変わってきます。
          </p>
        </div>
        <p className="mt-5 text-xs text-ink/60">
          ※Ask Mapsは2026年3月に提供開始、8月に日本を含む150カ国以上へ拡大。
          <a href={ASKMAPS_URL} target="_blank" rel="noopener noreferrer" className="ml-1 underline hover:text-ink">
            出典
          </a>
        </p>
      </Section>

      {/* 6. 学べること */}
      <Section bg="soft">
        <Chip tone="primary">学べること</Chip>
        <Heading tone="deep">
          このアカウントで、
          <br className="hidden md:block" />
          “選ばれる店”の作り方が分かる。
        </Heading>
        <div className="mt-10 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEARN_CARDS.map(([n, title, desc]) => (
            <div
              key={n}
              className="flex flex-col rounded-2xl bg-white p-7 text-left shadow-[0_8px_24px_rgba(7,88,78,0.10)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-primary text-base font-bold text-white">
                {n}
              </span>
              <h3 className="mt-4 text-lg font-bold leading-[1.5] text-green-deep">{title}</h3>
              <p className="mt-2 text-sm leading-[1.85] text-ink/80">{desc}</p>
            </div>
          ))}
        </div>

        {/* 口コミ Before/After */}
        <div className="mt-8 w-full max-w-3xl rounded-2xl bg-white p-7 text-left shadow-[0_8px_24px_rgba(7,88,78,0.10)]">
          <p className="text-sm font-bold text-green-deep">口コミは、“言葉”でこんなに変わります</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-bg-soft p-5">
              <span className="text-xs font-bold tracking-wider text-ink/45">BEFORE</span>
              <p className="mt-1.5 text-sm leading-[1.8] text-ink/75">「美味しかったです。」</p>
            </div>
            <div className="rounded-xl bg-green-primary/10 p-5">
              <span className="text-xs font-bold tracking-wider text-green-primary">AFTER</span>
              <p className="mt-1.5 text-sm leading-[1.8] text-ink">
                「ランチの唐揚げ定食がボリューム満点で、子連れでも入りやすかったです。」
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-[1.9] text-ink/70">
            料理名や利用シーンが入った口コミは、GoogleのAIが「何が評判の店か」を理解する手がかりになります。同じような言葉で探しているお客様に、見つけてもらいやすくなります。
          </p>
        </div>

        <p className="mt-8 text-sm text-ink/70">
          難しい理論は抜き。今日から動かせる形でお届けします。
        </p>
      </Section>

      {/* 発信サンプル（素材スライド） */}
      <Section bg="white">
        <Chip tone="mint">発信サンプル</Chip>
        <Heading tone="deep">こんな情報を発信しています。</Heading>
        <p className="mt-5 max-w-xl text-sm leading-[1.9] text-ink/75 sm:text-base">
          専門用語はかみ砕いて、今日から使える形で。実際にSNSで発信している内容の一部です。
        </p>
        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {POSTS.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`発信コンテンツの例 ${i + 1}`}
              loading="lazy"
              className="w-full rounded-2xl shadow-[0_8px_24px_rgba(7,88,78,0.12)]"
            />
          ))}
        </div>
      </Section>

      {/* 7. 無料診断（まずは現在地） */}
      <PhotoSection image="/assets/nature-diagnosis.jpg">
        <Chip tone="orange">まずは現在地</Chip>
        <Heading tone="white">
          まずは、自分の店が
          <br className="hidden md:block" />
          “今何点”か知ることから。
        </Heading>
        <p className="mt-6 max-w-2xl text-sm leading-[2] text-white/90 sm:text-base">
          無料診断で、あなたの店のGoogleマップ活用度を見える化。どこから直せばいいかが一目で分かります。全部できていなくて大丈夫。まず1項目から。
        </p>

        {/* 診断結果サンプルカード */}
        <div className="mt-9 w-full max-w-md rounded-3xl bg-white p-8 text-left text-ink shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-orange/15 px-3 py-1 text-xs font-bold text-orange">
              診断結果サンプル
            </span>
            <span className="text-xs text-ink/45">※サンプルです</span>
          </div>
          <div className="mt-5 flex items-end gap-2">
            <span className="text-5xl font-black leading-none text-green-deep">62</span>
            <span className="mb-1 text-lg font-bold text-ink/55">点 / 100</span>
          </div>
          <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-ink/10">
            <div className="h-full rounded-full bg-green-primary" style={{ width: "62%" }} />
          </div>
          <p className="mt-6 text-sm font-bold text-green-deep">まず直す3項目</p>
          <ul className="mt-3 space-y-2.5 text-sm leading-[1.6] text-ink/80">
            <li>① 基本情報・営業時間を最新にする</li>
            <li>② 写真を3枚以上（料理・店内・外観）追加する</li>
            <li>③ 口コミに返信する（まず直近5件から）</li>
          </ul>
          <p className="mt-5 text-xs leading-[1.7] text-ink/55">
            ※これはサンプルです。実際はあなたの店に合わせて診断します。
          </p>
        </div>

        <CTAButton href={FORM_ANCHOR} variant="primary" className="mt-8" external={false}>
          無料でマップ集客診断を受ける
        </CTAButton>
        <p className="mt-4 text-xs text-white/70">入力は1分ほど・費用はかかりません。</p>
      </PhotoSection>

      {/* 8. 実績 */}
      <Section bg="white">
        <Chip tone="primary">事例</Chip>
        <Heading tone="deep">
          情報を整えるだけで、
          <br className="hidden md:block" />
          “見え方”は変わる。
        </Heading>
        <div className="mt-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map(([num, label]) => (
            <div
              key={num + label}
              className="flex flex-col items-center rounded-2xl bg-bg-soft px-4 py-8 text-center"
            >
              <span className="text-3xl font-black text-orange sm:text-4xl">{num}</span>
              <span className="mt-2 whitespace-pre-line text-xs leading-[1.6] text-ink/80">
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-xs leading-[1.8] text-ink/60">
          ※いずれも各社が公開しているGoogleマップ活用事例です（一般的傾向）。業種・規模により成果は異なり、同じ結果を保証するものではありません。
          <a href={LISKUL_URL} target="_blank" rel="noopener noreferrer" className="ml-1 underline hover:text-ink">
            出典：LISKUL
          </a>
        </p>
      </Section>

      {/* 9. 相談の流れ */}
      <Section bg="soft">
        <Chip tone="mint">相談の流れ</Chip>
        <Heading tone="deep">相談は、LINEで気軽に。3ステップ。</Heading>
        <div className="mt-10 grid w-full gap-5 md:grid-cols-3">
          {STEPS.map(([n, title, desc]) => (
            <div
              key={n}
              className="flex flex-col rounded-2xl bg-white p-7 text-left shadow-[0_8px_24px_rgba(7,88,78,0.10)]"
            >
              <span className="text-sm font-bold tracking-[0.2em] text-green-primary">STEP {n}</span>
              <h3 className="mt-2 text-lg font-bold leading-[1.5] text-green-deep">{title}</h3>
              <p className="mt-2 text-sm leading-[1.85] text-ink/80">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/70">
          売り込みはしません。まずは“最新情報を受け取る”だけでもOKです。
        </p>
        <CTAButton href={LINE_URL} variant="primary" className="mt-8">
          {CTA.line}
        </CTAButton>
      </Section>

      {/* 無料診断フォーム */}
      <DiagnosisForm />

      {/* 10. 最終CTA + フッター */}
      <PhotoSection image="/assets/nature-final.jpg">
        <Heading tone="white">
          あなたの店の集客を、
          <br className="hidden md:block" />
          本来あるべき姿へ。
        </Heading>
        <p className="mt-4 text-sm text-white/85 sm:text-base">
          気になることがあれば、ひとことからどうぞ。
        </p>
        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <CTAButton href={LINE_URL} variant="primary">
            {CTA.line}
          </CTAButton>
          <CTAButton href={FORM_ANCHOR} variant="outlineWhite" external={false}>
            {CTA.diagnosis}
          </CTAButton>
        </div>

        <footer className="mt-14 w-full border-t border-white/20 pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="" className="h-8 w-8 rounded-full object-cover" />
              <span className="text-sm font-bold text-white">{BRAND_NAME}</span>
            </div>
            <div className="flex items-center gap-5">
              <Link to="/privacy" className="text-xs text-white/80 underline underline-offset-2 hover:text-white">
                プライバシーポリシー
              </Link>
              <span className="text-xs text-white/75">運営：{OPERATOR}</span>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-white/50">
            ※本情報は一般的傾向であり、成果を保証するものではありません。
          </p>
        </footer>
      </PhotoSection>
    </main>
  );
}

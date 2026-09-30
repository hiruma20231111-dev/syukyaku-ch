import { Chip, CTAButton, Section, PhotoSection } from "./components/primitives";
import DiagnosisForm from "./components/DiagnosisForm";
import { LINE_URL, FORM_ANCHOR, BRAND_NAME, OPERATOR, CTA } from "./lib/site";

const LEARN_CARDS = [
  ["1", "GBPが集客の入口", "まず整える3項目——基本情報・カテゴリ／属性・写真／口コミ／投稿。"],
  ["2", "順位を決める3要素", "関連性・距離・知名度。改善余地が大きいのは“関連性”です。"],
  ["3", "AI検索時代の新ルール", "“順位”より“選ばれる根拠”。属性×口コミの言葉で選抜される。"],
  ["4", "口コミは“件数”より“言葉”", "料理名・利用シーン・特徴が入る口コミが、資産になります。"],
  ["5", "サイテーション", "NAP（店名・住所・電話）の一貫性＝ネット上の存在証明。"],
  ["6", "迷ったらこの順番", "基本情報→口コミ→写真→NAP一貫→月1で効果確認。"],
];

const STATS = [
  ["153%", "検索表示アップ\n（飲食・約120店）"],
  ["345%", "検索表示アップ\n（買取・37店）"],
  ["2倍", "アクセス増\n（美容）"],
  ["4倍", "マップ表示\n（収納・約2,000店）"],
];

const STEPS = [
  ["1", "友だち追加", "まずは公式LINEを追加するだけ。数タップで完了します。"],
  ["2", "困りごとを送る", "店舗のURLや写真でもOK。今の状況を教えてください。"],
  ["3", "現場目線でお返事", "必要なら無料診断でさらに深掘り。一緒に次の一手を決めます。"],
];

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
        <img
          src="/assets/logo.png"
          alt={BRAND_NAME}
          className="h-10 w-10 rounded-full object-cover"
        />
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
        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <CTAButton href={FORM_ANCHOR} variant="primary" external={false}>
            {CTA.diagnosis}
          </CTAButton>
          <CTAButton href={LINE_URL} variant="line">
            {CTA.line}
          </CTAButton>
        </div>
        <p className="mt-5 text-xs text-white/70">
          フォロー＋LINEで、集客のお困りごとを少しでも減らす。
        </p>
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

export default function App() {
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
          MEO、口コミ、写真、SNS…情報は溢れているのに、まとまった「正解」がない。業者によって言うことも違う。片手間で調べても、これで合っているのか確信が持てない——それが今のGoogleマップ／マーケ業界のリアルです。
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
          2026年、GoogleマップにAI検索「Ask Maps」が日本でも稼働を開始しました。情報が古い・薄い・バラバラな店は、AIに“存在しない”のと同じ扱いに。「来る前に準備」ではなく「もう始まっている」——今動くかどうかで、これから差がつきます。
        </p>
        <div className="mt-9 w-full max-w-2xl rounded-3xl bg-green-deep px-7 py-10 sm:px-10">
          <p className="text-xs font-bold tracking-[0.3em] text-mint-light">これからの検索</p>
          <p className="mt-3 text-2xl font-black leading-[1.4] text-white sm:text-3xl">
            3〜5店に選ばれるか、除外か。
          </p>
          <p className="mt-3 text-sm leading-[1.8] text-white/90">
            AIが理由つきで薦める“根拠”を整えられるかで、集客が決まる時代です。
          </p>
        </div>
        <p className="mt-5 text-xs text-ink/60">
          ※Ask Maps（会話型AI検索）は2026年、日本を含む150カ国以上で稼働開始。
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
        <p className="mt-8 text-sm text-ink/70">
          難しい理論は抜き。今日から動かせる形でお届けします。
        </p>
      </Section>

      {/* 7. 無料診断CTA */}
      <PhotoSection image="/assets/nature-diagnosis.jpg">
        <Chip tone="orange">まずは現在地</Chip>
        <Heading tone="white">
          まずは、自分の店が
          <br className="hidden md:block" />
          “今何点”か知ることから。
        </Heading>
        <p className="mt-6 max-w-2xl text-sm leading-[2] text-white/90 sm:text-base">
          無料診断で、あなたの店のGoogleマップ活用度を可視化。どこから直せばいいかが一目で分かります。全部できていなくて大丈夫。まず1項目から。
        </p>
        <CTAButton href={FORM_ANCHOR} variant="primary" className="mt-8" external={false}>
          無料でマップ集客診断を受ける
        </CTAButton>
        <p className="mt-4 text-xs text-white/70">登録30秒・その場でチェックできます。</p>
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
        <p className="mt-6 text-xs text-ink/60">
          ※各社の公開事例（一般的傾向）。成果を保証するものではありません。
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
              <span className="text-sm font-bold tracking-[0.2em] text-green-primary">
                STEP {n}
              </span>
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
            <span className="text-xs text-white/75">運営：{OPERATOR}</span>
          </div>
          <p className="mt-6 text-center text-xs text-white/50">
            ※本情報は一般的傾向であり、成果を保証するものではありません。
          </p>
        </footer>
      </PhotoSection>
    </main>
  );
}

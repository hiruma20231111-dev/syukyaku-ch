// 共通の小さなUI部品（Figmaのチップ/ボタン/セクションに対応）

export function Chip({ children, tone = "primary" }) {
  const tones = {
    primary: "bg-green-primary text-white",
    mint: "bg-mint text-white",
    orange: "bg-orange text-white",
  };
  return (
    <span
      className={`inline-block rounded-full px-4 py-2 text-xs font-bold tracking-[0.2em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = true,
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-4 text-[15px] sm:text-base font-bold transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange";
  const variants = {
    primary: "bg-orange text-white shadow-lg shadow-orange/30 hover:bg-orange-soft",
    line: "border-2 border-green-primary text-white hover:bg-green-primary/15",
    lineDark: "border-2 border-green-deep text-green-deep hover:bg-green-deep/5",
    outlineWhite: "border-2 border-white text-white hover:bg-white/10",
  };
  // 外部リンク（LINE等）は新規タブ。内部アンカー（#form）は同一タブでスクロール。
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a href={href} {...linkProps} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

// 白 / 淡グリーン / 深緑（無地）セクション
export function Section({ bg = "white", className = "", children }) {
  const bgs = {
    white: "bg-white text-ink",
    soft: "bg-bg-soft text-ink",
    deep: "bg-green-deep text-white",
  };
  return (
    <section className={`px-6 py-16 sm:px-8 md:py-24 ${bgs[bg]} ${className}`}>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {children}
      </div>
    </section>
  );
}

// 自然写真＋深緑ベールのセクション
export function PhotoSection({ image, className = "", children }) {
  return (
    <section className={`relative overflow-hidden px-6 py-20 sm:px-8 md:py-28 ${className}`}>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="veil-deep absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center text-white">
        {children}
      </div>
    </section>
  );
}

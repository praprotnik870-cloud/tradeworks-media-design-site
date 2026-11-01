// TW monogram + live-text wordmark, used in the header and footer.
export default function BrandMark() {
  return (
    <span className="flex items-center gap-3">
      <img
        src="/logo-mark.webp"
        alt=""
        className="h-10 w-auto sm:h-11"
        width={369}
        height={248}
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight sm:text-xl">
          <span className="text-[#E4E8EB]">Trade</span>
          <span className="text-brand-cyan">Works</span>
        </span>
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-brand-silver/80 sm:text-[10px]">
          Media &amp; Design
        </span>
      </span>
    </span>
  );
}

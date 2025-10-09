interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  alignment = "center",
}: SectionHeaderProps) => {
  const alignClass =
    alignment === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-8 md:mb-10 lg:mb-12 ${alignClass} max-w-3xl`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-slate-teal/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-accent/20 mb-3 md:mb-4">
          <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-accent to-slate-teal bg-clip-text text-transparent">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-base mb-3 md:mb-4"
        style={{ fontFamily: "Stretch Pro, sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-grey leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

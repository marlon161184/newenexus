interface NewLoverCardProps {
  name: string;
  role: string;
  area: string;
  teamTag: string;
  bio: string[];
  delayMs?: number;
}

export function NewLoverCard({ name, role, area, teamTag, bio, delayMs = 0 }: NewLoverCardProps) {
  return (
    <article
      className="newe-fade-up bg-[#FAFAFA] border border-[#D8D8D8] p-8 md:p-10"
      style={{
        borderTop: "2px solid #0A0A0A",
        animationDelay: `${delayMs}ms`,
        opacity: 0,
      }}
    >
      <header className="flex items-start gap-5 mb-8">
        <div
          className="w-14 h-14 rounded-full bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-center font-display font-light text-xl shrink-0"
          aria-hidden
        >
          {name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-light text-[20px] text-[#0A0A0A] leading-tight">
            {name}
          </h3>
          <p className="font-mono-newe text-[8px] tracking-[0.4em] uppercase text-[#6B6B6B] mt-2">
            {role}
          </p>
          <p className="font-mono-newe text-[8px] tracking-[0.3em] uppercase text-[#9A9A9A] mt-1">
            {area}
          </p>
        </div>
      </header>

      <div className="mb-6">
        <span className="inline-block font-mono-newe text-[7px] tracking-[0.3em] uppercase text-[#6B6B6B] border border-[#D8D8D8] bg-[#EBEBEB] px-2.5 py-1">
          {teamTag}
        </span>
      </div>

      <ul className="space-y-3">
        {bio.map((line, i) => (
          <li
            key={i}
            className="font-body font-light text-[11px] text-[#6B6B6B]"
            style={{ lineHeight: 1.8 }}
          >
            <span className="text-[#C0C0C0] mr-1">{line.startsWith("—") ? "" : "—"}</span>
            {line.replace(/^—\s?/, "")}
          </li>
        ))}
      </ul>
    </article>
  );
}
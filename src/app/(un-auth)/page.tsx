import Link from "next/link";

const CITIES = ["MANHATTAN", "BROOKLYN", "QUEENS", "CHELSEA", "MANHATTAN"];

const NAV_LINKS = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

const CONTACT_TILES = [
  { label: "Phone", value: "(212) 555-0198", icon: PhoneIcon },
  { label: "Text", value: "(212) 555-0198", icon: TextIcon },
  { label: "iMessage", value: "(212) 555-0198", icon: ChatIcon },
  { label: "Email", value: "hi@sparkles.byq", icon: MailIcon },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf8f1] text-[#0d1526]">
      <TextSwapStyles />

      {/* <TopBanner /> */}
      <Navbar />

      <main className="px-4 pb-8 lg:px-6">
        <Hero />
      </main>

    </div>
  );
}

// function TopBanner() {
//   return (
//     <div className="flex items-center justify-center gap-2 bg-[#dcc9f9] px-4 py-1.5 text-center text-xs text-[#0d1526]">
//       <span>4 available slots this week</span>
//       <Link
//         href="/book-cleaning"
//         className="font-bold underline underline-offset-2"
//       >
//         Book before they&rsquo;re gone
//       </Link>
//     </div>
//   );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#fdf8f1]">
      <nav className="flex items-center justify-between px-4 py-3.5 lg:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-1.5">
            <Sparkle className="h-5 w-5 text-[#ffc216]" />
            <span className="font-display text-lg font-bold tracking-tight text-[#0d1526]">
              Noble
            </span>
          </Link>

          <ul className="hidden items-center gap-1 text-sm font-semibold md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-full px-3 py-2 text-[#0d1526] transition-colors hover:bg-[#0d152608]"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <PillButton href="/book-cleaning" variant="primary" size="sm">
          Book cleaning
        </PillButton>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[1800px]">
      <div className="grid gap-3 lg:grid-cols-2 lg:gap-3">
        <div className="flex flex-col justify-between gap-12 rounded-3xl bg-[#0d1526] p-8 text-[#fdf8f1] sm:p-10 lg:min-h-[640px] lg:p-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <RatingChip
                label="4.9 on Google"
                icon={<GoogleG className="h-4 w-4" />}
              />
              <RatingChip
                label="4.8 on Yelp"
                icon={<YelpDot className="h-4 w-4" />}
                bold
              />
            </div>

            <h1
              className="font-display font-bold uppercase text-[#fdf8f1]"
              style={{
                fontSize: "clamp(3.25rem, 7.5vw, 6.5rem)",
                lineHeight: "0.85",
                letterSpacing: "-0.02em",
              }}
            >
              <div>Cleaning</div>
              <div>for busy</div>
              <div>people in</div>
              <div className="relative overflow-hidden" style={{ height: "1em" }}>
                <div className="sparkles-text-swap flex flex-col">
                  {CITIES.map((city, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: static list
                    <span key={`${city}-${i}`} className="block">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <PillButton href="/book-cleaning" variant="primary">
              Book your cleaning
            </PillButton>
            <PillButton href="/pricing" variant="secondary-dark">
              See pricing
            </PillButton>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[#0d152614] lg:min-h-[640px]">
          {/* biome-ignore lint/performance/noImgElement: external CDN image, remotePatterns not configured */}
          <img
            src="https://cdn.prod.website-files.com/692f17afc3743c9cd4b7cac6/693817393d800624450974eb_hero%20%281%29_poster.0000000.jpg"
            alt="Person vacuuming a patterned rug in a clean apartment."
            className="h-full min-h-[420px] w-full object-cover lg:min-h-[640px]"
          />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {CONTACT_TILES.map((tile) => {
          const Icon = tile.icon;
          return (
            <Link
              key={tile.label}
              href={`tel:${tile.value.replace(/\D/g, "")}`}
              className="group flex items-center gap-4 rounded-3xl bg-[#0d152608] p-5 transition-colors hover:bg-[#0d152614] sm:p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0d1526]">
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-[#0d1526]">
                  {tile.label}
                </span>
                <span className="text-sm text-[#0d1526a3]">{tile.value}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function RatingChip({
  label,
  icon,
  bold = false,
}: {
  label: string;
  icon: React.ReactNode;
  bold?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-[11px] uppercase tracking-wider text-[#fdf8f1]">
      <span className="flex h-4 w-4 items-center justify-center">{icon}</span>
      <span className={bold ? "font-bold" : "font-semibold"}>{label}</span>
    </span>
  );
}

function PillButton({
  href,
  children,
  variant = "primary",
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary-dark"
    | "secondary-light";
  size?: "sm" | "md";
}) {
  const padding =
    size === "sm" ? "px-4 py-2 text-[11px]" : "px-5 py-3.5 text-xs";

  const variantClasses: Record<NonNullable<typeof variant>, string> = {
    primary:
      "bg-[#b6cbf9] text-[#0d1526] hover:bg-[#0d1526] hover:text-[#fdf8f1]",
    "secondary-dark":
      "bg-white/8 text-[#fdf8f1] hover:bg-[#fdf8f1] hover:text-[#0d1526]",
    "secondary-light":
      "bg-[#0d152614] text-[#0d1526] hover:bg-[#0d1526] hover:text-[#fdf8f1]",
  };

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full font-display font-bold uppercase tracking-wider transition-all duration-300 hover:pr-9 ${padding} ${variantClasses[variant]}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute right-3 z-10 flex translate-x-3 items-center opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

function TextSwapStyles() {
  const css = `
    @keyframes sparkles-text-swap {
      0%, 16%   { transform: translateY(0%); }
      20%, 36%  { transform: translateY(-100%); }
      40%, 56%  { transform: translateY(-200%); }
      60%, 76%  { transform: translateY(-300%); }
      80%, 100% { transform: translateY(-400%); }
    }
    .sparkles-text-swap {
      animation: sparkles-text-swap 9s cubic-bezier(0.83, 0, 0.17, 1) infinite;
      will-change: transform;
    }
  `;
  return <style>{css}</style>;
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2 L13.6 9.4 L21 11 L13.6 12.6 L12 20 L10.4 12.6 L3 11 L10.4 9.4 Z" />
      <circle cx="19" cy="5" r="1.4" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.333 8h9.334m0 0L8 3.333M12.667 8 8 12.667"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M13.8 16.6c.2.1.4.1.6.1.2 0 .4-.1.5-.3l.4-.5c.2-.2.4-.4.7-.5.3-.1.6-.2.9-.2h3c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v3c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6-4.8 0-9.4-1.9-12.7-5.3C3 13.7 1.1 9.1 1.1 4.3c0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6h3c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v3c0 .3-.1.6-.2.9-.1.3-.3.5-.5.7l-.5.4c-.2.1-.3.3-.4.6-.1.2 0 .5.1.7 1.4 2.8 3.6 5 6.4 6.4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TextIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 16.3c.1.4.2.8.1 1.2l-1.1 3.3c0 .2 0 .3.1.5s.2.3.3.4c.1.1.3.2.5.2s.3 0 .5 0L6.7 21c.4-.1.7 0 1.1.1 2.1 1 4.6 1.2 6.8.6 2.3-.6 4.3-2 5.6-3.9 1.3-1.9 1.9-4.3 1.7-6.6-.2-2.3-1.2-4.5-2.9-6.2-1.7-1.7-3.9-2.7-6.2-2.9-2.3-.2-4.7.4-6.6 1.8C4.3 5.1 2.9 7.1 2.3 9.4c-.6 2.3-.3 4.7.7 6.8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 7c1-.6 2.8-2 5-2 1.3 0 2.5.5 3.4 1.4.9.9 1.5 2.1 1.5 3.4 0 4.2-3 12.2-6 12.2-1.3 0-2.5-1-3.9-1-1.5 0-2.7 1-4 1-3 0-6-8-6-12.2 0-1.3.5-2.5 1.4-3.4C4.4 5.5 5.7 5 7 5c2.2 0 4 1.4 5 2zm0 0c0-3-1-4.5-2-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M22 5 12.9 11c-.3.2-.6.3-.9.3s-.6-.1-.9-.3L2 5m1-2h18c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14.07 9.19v2.96c0 1.25-.98 2.52-2.87 2.52H8.77c-3.6 0-6.61-2.73-6.83-6.23-.13-1.94.56-3.78 1.94-5.16 1.29-1.3 3.1-1.95 4.93-1.95h3.86c.37 0 .67.3.67.67v1.33c0 .37-.3.67-.67.67H8.74c-1.03 0-2.06.33-2.82 1.03-.93.84-1.4 2-1.32 3.24.14 2.09 1.97 3.73 4.18 3.73 0 0 1.19 0 1.97-.01.37 0 .66-.3.66-.67V10c0-.37-.3-.67-.67-.67H8.67c-.37 0-.67-.3-.67-.67V7.33c0-.37.3-.67.67-.67h2.89c1.39 0 2.51 1.13 2.51 2.52z"
        fill="#537FDD"
      />
    </svg>
  );
}

function YelpDot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8.09 5.78c.58 0 1.1.17 1.54.48.51-.44 1.44-.58 2.24-1.17 2.06-1.52-.02-5.06-5.25-4.15-3.86.67-2.18 4.1-.84 6.08.48-.75 1.35-1.24 2.31-1.24zM5.33 8.51c0-.06 0-.14.02-.21-.66-.21-1.25-.97-2.18-1.37-2.35-1.04-4.37 2.55-.96 6.61 2.51 2.99 4.62-.14 5.66-2.29-1.42-.11-2.54-1.3-2.54-2.74zM10.54 7.3c.19.37.29.79.29 1.22 0 1.1-.66 2.06-1.6 2.49.13.67-.22 1.54-.11 2.53.27 2.55 4.38 2.51 6.21-2.46 1.33-3.65-2.4-3.94-4.79-3.78zM9.93 8.51c0-1.02-.83-1.86-1.86-1.86-1.02 0-1.86.83-1.86 1.86 0 1.02.83 1.86 1.86 1.86 1.02 0 1.86-.83 1.86-1.86z"
        fill="#DC0000"
      />
    </svg>
  );
}

import type { CTAButton, HeroContent } from '../types';

interface HeroSectionProps {
  content: HeroContent;
}

interface ArrowIconProps {
  className?: string;
}

function ArrowIcon({ className = '' }: ArrowIconProps): JSX.Element {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

interface CTAButtonLinkProps {
  action: CTAButton;
}

function CTAButtonLink({ action }: CTAButtonLinkProps): JSX.Element {
  if (action.variant === 'primary') {
    return (
      <a
        href={action.href}
        className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-[0_10px_30px_-10px_rgba(194,94,62,0.5)]"
      >
        {action.label}
        <ArrowIcon className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <a
      href={action.href}
      className="group inline-flex items-center gap-2.5 rounded-full border border-ink/25 px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-ivory"
    >
      {action.label}
      <ArrowIcon className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
    </a>
  );
}

function HeroSection({ content }: HeroSectionProps): JSX.Element {
  const { headlineSegments, subheadline, actions } = content;

  return (
    <section id="top" className="mx-auto max-w-site px-6 md:px-10">
      <div className="pb-28 pt-24 md:pb-40 md:pt-36">
        <h1 className="max-w-4xl font-serif text-[2.85rem] font-medium leading-[1.04] tracking-tightest text-ink sm:text-6xl md:text-7xl lg:text-[5.4rem]">
          {headlineSegments.map((segment, index) =>
            segment.emphasized ? (
              <em key={index} className="italic text-clay-dark">
                {segment.text}
              </em>
            ) : (
              <span key={index}>{segment.text}</span>
            ),
          )}
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-mute md:text-lg">
          {subheadline}
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          {actions.map((action) => (
            <CTAButtonLink key={action.label} action={action} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

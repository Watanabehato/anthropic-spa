import type { ModelCardData } from '../types';

interface FeatureGridProps {
  eyebrow: string;
  title: string;
  models: ReadonlyArray<ModelCardData>;
}

interface ModelCardProps {
  model: ModelCardData;
}

function ModelCard({ model }: ModelCardProps): JSX.Element {
  return (
    <a
      href={model.href}
      className="group flex flex-col rounded-2xl border border-ink/10 bg-transparent p-8 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-ink/25 hover:bg-ivory-light md:p-10"
    >
      <span className="text-[11px] font-semibold tracking-[0.18em] text-clay-dark">
        {model.tier}
      </span>

      <h3 className="mt-5 font-serif text-3xl font-medium tracking-tightest text-ink md:text-4xl">
        Claude&nbsp;{model.name}
      </h3>

      <p className="mt-2 font-serif text-lg italic text-ink-soft">{model.tagline}</p>

      <p className="mt-6 flex-1 text-sm leading-relaxed text-ink-mute">
        {model.description}
      </p>

      <span className="mt-10 inline-flex items-center gap-2 text-[13px] font-medium text-ink">
        <span className="link-underline">Learn more</span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}

function FeatureGrid({ eyebrow, title, models }: FeatureGridProps): JSX.Element {
  return (
    <section id="product" className="border-t border-ink/10">
      <div className="mx-auto max-w-site px-6 py-24 md:px-10 md:py-32">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-ink-mute">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium tracking-tightest text-ink md:text-5xl">
          {title}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {models.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;

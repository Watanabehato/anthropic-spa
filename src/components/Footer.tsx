import type { FooterColumnData } from '../types';

interface FooterProps {
  columns: ReadonlyArray<FooterColumnData>;
  copyright: string;
}

function Footer({ columns, copyright }: FooterProps): JSX.Element {
  return (
    <footer id="company" className="border-t border-ink/10 bg-ivory-light">
      <div className="mx-auto max-w-site px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 md:col-span-2">
            <p className="text-sm font-bold tracking-[0.22em] text-ink">ANTHROPIC</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-mute">
              Reliable, interpretable, and steerable AI systems — built with
              safety at the frontier.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h4 className="text-[11px] font-semibold tracking-[0.18em] text-ink-mute">
                {column.title.toUpperCase()}
              </h4>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="link-underline text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink/10 pt-8 text-xs text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright}</p>
          <p>Research · Product · Company · Careers</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

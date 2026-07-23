import { useState } from 'react';
import type { NavLink } from '../types';

interface NavbarProps {
  links: ReadonlyArray<NavLink>;
}

function Navbar({ links }: NavbarProps): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = (): void => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-site items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <a
          href="#top"
          className="text-sm font-bold tracking-[0.22em] text-ink transition-opacity duration-300 hover:opacity-60"
          onClick={closeMenu}
        >
          ANTHROPIC
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="link-underline text-[13px] font-medium tracking-wide text-ink-soft transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="group flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ease-out-expo ${
              menuOpen ? 'translate-y-[3px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ease-out-expo ${
              menuOpen ? '-translate-y-[3px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile collapsed panel */}
      <div
        className={`overflow-hidden border-ink/10 transition-[max-height,opacity] duration-500 ease-out-expo md:hidden ${
          menuOpen ? 'max-h-72 border-t opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-1 px-6 py-5">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block py-2 font-serif text-2xl text-ink transition-colors duration-300 hover:text-clay"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

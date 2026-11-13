import { useState } from 'react';
import { navLinks } from '../data/site';

export function Logo() {
  return (
    <a href="/" className="flex flex-col leading-none" aria-label="OCA Medical Group home">
      <span className="text-3xl font-extrabold tracking-tight">
        <span className="text-sky">O</span>
        <span className="text-navy">C</span>
        <span className="text-sky">A</span>
      </span>
      <span className="text-[0.7rem] font-medium text-sky">Medical Group</span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wide text-ink hover:text-sky"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#book" className="btn-navy hidden px-3 py-1.5 sm:inline-flex">
            Contact
          </a>
          <a href="#verify" className="btn-navy hidden px-3 py-1.5 sm:inline-flex">
            Verify
          </a>
          <a href="#book" className="btn-cyan px-4 py-1.5">
            Book
          </a>
          <button
            type="button"
            className="ml-1 grid h-9 w-9 place-items-center rounded-md text-navy md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-black/10 bg-white md:hidden">
          <ul className="container-page flex flex-col py-2">
            {[...navLinks, { label: 'Contact', href: '#book' }, { label: 'Verify insurance', href: '#verify' }].map(
              (link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-bold uppercase tracking-wide text-ink hover:text-sky"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

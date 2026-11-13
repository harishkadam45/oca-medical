import { useRef } from 'react';
import { testimonials } from '../data/site';

function Arrow({ dir, onClick }: { dir: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Previous testimonials' : 'Next testimonials'}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-ink shadow-md transition hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={dir === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
      </svg>
    </button>
  );
}

export default function TestimonialCarousel() {
  const track = useRef<HTMLUListElement>(null);

  function scroll(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;
    if (direction === 1 && atEnd) el.scrollTo({ left: 0, behavior: 'smooth' });
    else if (direction === -1 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    else el.scrollBy({ left: step * direction, behavior: 'smooth' });
  }

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <Arrow dir="prev" onClick={() => scroll(-1)} />
      <ul
        ref={track}
        tabIndex={0}
        aria-label="Patient testimonials"
        className="no-scrollbar flex flex-1 snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-2"
      >
        {testimonials.map((t, i) => (
          <li
            key={i}
            className="flex shrink-0 basis-full snap-start flex-col items-center rounded-2xl bg-sky px-6 py-6 text-center sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
          >
            <span aria-hidden="true" className="h-12 w-12 rounded-full bg-neutral-400" />
            <blockquote className="mt-4 text-base font-medium leading-snug text-ink">“{t.quote}”</blockquote>
          </li>
        ))}
      </ul>
      <Arrow dir="next" onClick={() => scroll(1)} />
    </div>
  );
}

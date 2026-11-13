import { useState, type SubmitEvent } from 'react';
import { locations } from '../data/site';

const fieldClass =
  'w-full rounded-full border border-navy/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink placeholder:text-ink/60 focus:outline-2 focus:outline-offset-1 focus:outline-navy';

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: wire this up to a real endpoint (CRM, form service, or API route).
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl bg-sky p-6 text-center shadow-lg sm:p-7">
      <h2 className="text-xl font-extrabold uppercase text-ink sm:text-2xl">Book an Appointment</h2>
      <p className="mt-0.5 text-base text-ink">FREE Consultations</p>

      {submitted ? (
        <div role="status" className="mt-6 rounded-2xl bg-white p-6 text-sm text-ink">
          <p className="text-base font-bold">Thank you!</p>
          <p className="mt-1">We received your request and will contact you to schedule your free consultation.</p>
          <button type="button" className="mt-4 text-xs font-bold uppercase text-navy underline" onClick={() => setSubmitted(false)}>
            Send another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2.5">
          <label className="sr-only" htmlFor="location">Location</label>
          <select id="location" name="location" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Location
            </option>
            {locations.map((l) => (
              <option key={l.name} value={l.name}>
                {l.name}
              </option>
            ))}
          </select>

          <label className="sr-only" htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" required autoComplete="given-name" placeholder="First name" className={fieldClass} />

          <label className="sr-only" htmlFor="lastName">Last name</label>
          <input id="lastName" name="lastName" required autoComplete="family-name" placeholder="Last name" className={fieldClass} />

          <label className="sr-only" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="Phone" className={fieldClass} />

          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="Email" className={fieldClass} />

          <p className="text-[0.65rem] leading-snug text-ink/80">
            Your information is kept strictly confidential and used only to coordinate your care—we never share or sell
            your personal or medical details.
          </p>

          <button
            type="submit"
            className="mx-auto mt-1 rounded-full bg-pin px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Schedule Appointment
          </button>
        </form>
      )}
    </div>
  );
}

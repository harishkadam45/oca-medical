export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Conditions', href: '#care' },
  { label: 'Services', href: '#care' },
  { label: 'Partners', href: '#coverage' },
  { label: 'Blog', href: '#testimonials' },
] as const;

export const stats = [
  { value: '50,000+', label: 'Happy Patients' },
  { value: '10', label: 'Referring Affiliates' },
  { value: '80+ Years', label: 'Experience' },
] as const;

export const insurers = [
  'United Healthcare',
  'Anthem',
  'Aetna',
  'Kaiser',
  'Blue California',
  'Blue Cross Blue Shield',
  'Coastwise',
] as const;

export const locations = [
  { name: 'El Segundo', x: 20, y: 30 },
  { name: 'Torrance', x: 45, y: 34 },
  { name: 'Redondo Beach', x: 30, y: 62 },
  { name: 'Seal Beach', x: 76, y: 58 },
] as const;

export const testimonials = [
  {
    quote: 'We’ll run a full diagnostic test to see what’s the problem and what’s the best solution.',
    name: 'Patient name',
  },
  {
    quote: 'We’ll run a full diagnostic test to see what’s the problem and what’s the best solution.',
    name: 'Patient name',
  },
  { quote: 'All Things Physical Medicine All Under One Roof!', name: 'Patient name' },
  {
    quote: 'We’ll run a full diagnostic test to see what’s the problem and what’s the best solution.',
    name: 'Patient name',
  },
] as const;

/**
 * Drop real photos into /public/images and set the paths here,
 * e.g. hero: '/images/hero.jpg'. While a value is null the section
 * renders a styled placeholder instead.
 */
export const images: Record<'hero' | 'newPatient' | 'verify' | 'building', string | null> = {
  hero: null,
  newPatient: null,
  verify: null,
  building: null,
};

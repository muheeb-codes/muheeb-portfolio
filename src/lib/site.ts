// Portfolio content for Muheeb Ahmed

export const site = {
  name: 'Muheeb Ahmed',
  firstName: 'Muheeb',
  lastName: 'Ahmed',
  handle: 'muheeb-codes',
  brand: 'muheeb.is-a.dev',
  email: 'muheebtechsec@gmail.com',
  location: 'Karachi, Pakistan',
  timeZone: 'Asia/Karachi',
  timeZoneLabel: 'PKT',
  url: 'https://muheeb.is-a.dev',
  tagline: 'Full-stack web developer building modern web experiences with React, TypeScript and Node.js.',
  roles: [
    'Full-Stack Web Developer',
    'React & TypeScript Developer',
    'Node.js & Express Developer',
    'Open to Work · Karachi & Remote',
  ],
} as const;

export type SocialKey = 'github' | 'linkedin' | 'x';

export const socials: Record<SocialKey, { label: string; href: string }> = {
  github: { label: 'GitHub', href: 'https://github.com/muheeb-codes' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muheeb-ahmed/' },
  x: { label: 'X', href: 'https://x.com/MuheebAhme2025' },
};

export const socialList: Array<{ label: string; href: string }> = [
  socials.linkedin,
  socials.github,
  socials.x,
];

export const navLinks = [
  { name: 'Home', href: '/#top', menuOnly: true },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
] as const;

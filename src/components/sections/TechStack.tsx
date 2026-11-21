'use client';

import { useEffect, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbSql } from 'react-icons/tb';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  Icon: IconType;
  level?: string;
  description?: string;
}

export interface StackCategory {
  id: string;
  title: string;
  label?: string;
  description?: string;
  technologies: TechItem[];
}

export const STACK_SECTIONS: StackCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    technologies: [
      { name: 'HTML5', category: 'frontend', Icon: SiHtml5 },
      { name: 'CSS3', category: 'frontend', Icon: SiCss3 },
      { name: 'JavaScript', category: 'frontend', Icon: SiJavascript },
      { name: 'TypeScript', category: 'frontend', Icon: SiTypescript },
      { name: 'React', category: 'frontend', Icon: SiReact },
      { name: 'Next.js', category: 'frontend', Icon: SiNextdotjs },
      { name: 'Tailwind CSS', category: 'frontend', Icon: SiTailwindcss },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    technologies: [
      { name: 'Node.js', category: 'backend', Icon: SiNodedotjs },
      { name: 'Express.js', category: 'backend', Icon: SiExpress },
      { name: 'PHP', category: 'backend', Icon: SiPhp },
      { name: 'Laravel', category: 'backend', Icon: SiLaravel },
      { name: 'Python', category: 'backend', Icon: SiPython },
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    technologies: [
      { name: 'SQL', category: 'database', Icon: TbSql },
      { name: 'MongoDB', category: 'database', Icon: SiMongodb },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & workflow',
    technologies: [
      { name: 'Git', category: 'tools', Icon: SiGit },
      { name: 'GitHub', category: 'tools', Icon: SiGithub },
      { name: 'VS Code', category: 'tools', Icon: VscVscode },
    ],
  },
];

const BENTO_SPAN: Record<string, string> = {
  frontend: 'md:col-span-12 lg:col-span-7',
  backend: 'md:col-span-6 lg:col-span-5',
  database: 'md:col-span-6 lg:col-span-5',
  tools: 'md:col-span-12 lg:col-span-7',
};

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const reduced = useReducedMotion();

  const headingWords = [
    { t: 'What' },
    { t: 'I' },
    { t: 'reach', serif: true },
    { t: 'for' },
  ];
  const descriptionText =
    "The tools I use to build and ship full-stack web applications.";

  const filterOptions = [
    { id: 'all', label: 'All Categories' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Tools & Workflow' },
  ];

  const visibleSections =
    activeFilter === 'all'
      ? STACK_SECTIONS
      : STACK_SECTIONS.filter((sec) => sec.id === activeFilter);

  useGSAP(
    () => {
      if (reduced) return;
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const items = section.querySelectorAll('.tech-item');
        const title = titleRefs.current[index];

        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 90%',
                end: 'top 70%',
                scrub: 0.5,
              },
            },
          );
        }

        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.05,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 90%',
                end: 'top 70%',
                scrub: 0.5,
              },
            },
          );
        }
      });
    },
    { scope: containerRef, dependencies: [activeFilter, reduced] },
  );

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [activeFilter]);

  return (
    <section
      ref={containerRef}
      id="tech-stack"
      className="bg-ink text-light pt-12 pb-16 md:pt-32 md:pb-20 rounded-b-4xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 md:mb-14">
          <AnimatedHeading
            words={headingWords}
            className="text-[clamp(2.5rem,7vw,6.5rem)] mb-4"
          />
          <ScrollWordReveal
            text={descriptionText}
            offset={['start 0.95', 'end 0.7']}
            className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed"
          />
        </div>

        <div role="group" aria-label="Filter technologies by category" className="mb-12 flex flex-wrap gap-2 sm:gap-3 items-center">
          {filterOptions.map((option) => {
            const isActive = activeFilter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(option.id)}
                className={`text-xs sm:text-sm font-mono tracking-wider px-3.5 py-2.5 sm:py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-cream text-ink border-cream font-semibold shadow-md'
                    : 'bg-elevated-dark/60 text-gray-soft border-white/10 hover:border-accent/40 hover:text-cream'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {visibleSections.map((stack, index) => (
            <div
              key={stack.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className={`relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem] border border-surface-border bg-surface-card p-4 min-[400px]:p-5 sm:p-7 md:p-8 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] ${
                activeFilter === 'all' ? BENTO_SPAN[stack.id] ?? 'md:col-span-6' : 'md:col-span-12'
              }`}
            >
              <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative mb-6 flex items-end justify-between gap-4">
                <h3
                  ref={(el) => {
                    titleRefs.current[index] = el;
                  }}
                  className="text-2xl sm:text-3xl font-semibold text-cream tracking-[-0.035em] font-display leading-none"
                >
                  {stack.title}
                </h3>
                <span className="font-mono text-[11px] text-warm-light tracking-widest whitespace-nowrap">
                  {String(stack.technologies.length).padStart(2, '0')} tools
                </span>
              </div>

              <div className={`relative grid grid-cols-2 gap-2.5 ${activeFilter === 'all' && stack.id !== 'frontend' && stack.id !== 'tools' ? 'min-[540px]:grid-cols-3 md:grid-cols-2' : 'min-[540px]:grid-cols-3 xl:grid-cols-4'}`}>
                {stack.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="tech-item group flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl transition-all duration-300 hover:bg-surface-float border border-white/[0.05] hover:border-accent/40 bg-surface/60"
                  >
                    <div className="w-9 h-9 flex items-center justify-center relative flex-shrink-0">
                      <tech.Icon
                        aria-hidden="true"
                        className="w-7 h-7 text-cream/75 grayscale-[0.4] group-hover:text-accent group-hover:grayscale-0 transition duration-300"
                      />
                    </div>
                    <p className="text-[13px] font-medium text-cream break-words leading-tight">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

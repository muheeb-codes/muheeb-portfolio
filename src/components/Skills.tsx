import React, { useEffect, useRef, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
// SkillsRadar is a relatively heavy chart bundle (Chart.js). We'll dynamically import it
// when the user scrolls the Skills section into view so the initial JS payload is smaller.

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95, color: 'bg-orange-500' },
        { name: 'CSS3', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'React.js', level: 80, color: 'bg-cyan-500' },
        { name: 'Next.js', level: 75, color: 'bg-gray-700' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'PHP', level: 85, color: 'bg-purple-600' },
        { name: 'Laravel', level: 80, color: 'bg-red-500' },
        { name: 'SQL', level: 85, color: 'bg-blue-600' },
        { name: 'Python', level: 70, color: 'bg-green-500' },
      ],
    },
    {
      category: 'Other',
      skills: [
        { name: 'Responsive Design', level: 90, color: 'bg-pink-500' },
        { name: 'Cross-Browser Compatibility', level: 85, color: 'bg-indigo-500' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through formal education and self-directed learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                        className={`h-2 rounded-full ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'PHP', 
              'Laravel', 'SQL', 'Python', 'Tailwind CSS', 'Git', 'VS Code'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skills Radar Chart (loads on intersection to defer Chart.js bundle) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <SkillsRadarLoader />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

// --- Dynamic loader component placed after export to keep the top of the file readable ---
const SkillsRadarLoader: React.FC = () => {
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const [RadarComp, setRadarComp] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (!placeholderRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Dynamically import the SkillsRadar component (and its Chart.js deps)
          import('./SkillsRadar').then((mod) => {
            setRadarComp(() => mod.default);
          }).catch(() => {
            // ignore errors — fallback UI will remain
          });
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' });

    observer.observe(placeholderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={placeholderRef} style={{ width: '100%' }}>
      {RadarComp ? (
        <Suspense fallback={<div className="text-center text-sm text-gray-500">Loading chart...</div>}>
          <RadarComp />
        </Suspense>
      ) : (
        <div className="text-center text-sm text-gray-500">Chart will load when visible</div>
      )}
    </div>
  );
};
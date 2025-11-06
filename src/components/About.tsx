import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Muheeb Ahmed — Web Developer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I build fast, accessible, and maintainable web applications using modern tools like
            React, TypeScript and Node.js. This page explains my background, working style,
            notable skills and how to reach me — all focused to make it clear that this is the
            official site for "Muheeb Ahmed — Web Developer." 
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-8xl md:text-9xl font-bold text-gray-600 dark:text-gray-300">
                  MA
                </div>
              </div>
            </div>
            {/* Floating Icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <Code className="text-white" size={24} />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Background</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I began learning web development through formal coursework at Aptech where I
                covered the fundamentals: HTML, CSS, JavaScript, SQL, PHP and Laravel. After
                that foundation, I focused on modern JavaScript tooling — primarily React and
                TypeScript — building small production-style projects to practice component
                architecture, state management, and performance optimization. I take a
                project-first approach: learn by building, measure results, then iterate.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education & Training</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    My formal training provided a structured foundation; most of my day-to-day
                    skills come from hands-on work and focused study. I’ve completed certifications
                    and practical projects that demonstrate a real ability to deliver working
                    software.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Skills & Tools</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I work primarily with React, TypeScript, Vite, and Node.js. I also use
                    Tailwind CSS for utility-first styling and Framer Motion for smooth
                    interactions. On the backend I’m comfortable with REST APIs and SQL-based
                    data models. I prioritize accessibility, semantic HTML and predictable
                    performance.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Approach & Process</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                My projects follow a simple, measurable process: discovery, prototype,
                implementation, and iteration. In discovery we define goals and success
                metrics. Prototypes confirm direction with minimal investment. Implementation
                focuses on testable, documented code. Iteration uses real metrics and user
                feedback to improve the product. This process helps reduce risk and delivers
                predictable outcomes for clients.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-4">
                For examples and case studies, visit the Projects section. For quick access to
                my code, check my
                <a href="https://github.com/muheeb-codes" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline mx-1">GitHub</a>.
                To connect professionally, use
                <a href="https://www.linkedin.com/in/muheeb-ahmed-4a7b83367/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline mx-1">LinkedIn</a>,
                and for short updates or availability follow me on
                <a href="https://x.com/MuheebAhme2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline mx-1">X</a>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Contact & Availability</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I’m open to freelance and full-time opportunities. Typical engagements include
                building frontend applications, improving performance, or collaborating on
                full-stack features. If you’d like to discuss a project, use the Contact
                section or send a message via LinkedIn. I respond promptly and provide clear
                next steps and timelines.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-6">
                Thank you for visiting — this site represents my best work and my ongoing
                commitment to craftsmanship and learning. I’m Muheeb Ahmed, and I build web
                experiences that are fast, accessible, and maintainable.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate young developer on a journey to create impactful digital experiences
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
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Hello! I'm Muheeb Ahmed
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm an 18-year-old web developer and college student with an insatiable curiosity for technology. 
                My journey began with formal education at Aptech, where I mastered the fundamentals, but my real 
                growth came from self-directed learning through YouTube and online resources.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Formal Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Currently pursuing college education with completed certifications from Aptech in 
                    HTML, CSS, JavaScript, SQL, PHP, and Laravel
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Self-Taught Skills</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Expanded my expertise through YouTube and online resources, mastering React.js, 
                    Next.js, and Python to stay current with industry trends
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I believe in the power of continuous learning and am always excited to tackle new challenges. 
                Whether it's building responsive websites, creating dynamic applications, or exploring the latest 
                web technologies, I bring passion and dedication to every project.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
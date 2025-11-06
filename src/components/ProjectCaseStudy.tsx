import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Clock, Target, Lightbulb, CheckCircle } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ProjectCaseStudyProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const caseStudyData = {
    problem: "Traditional e-commerce platforms often lack personalized user experiences and efficient inventory management. Small businesses struggle with complex, expensive solutions that don't meet their specific needs.",
    
    designProcess: [
      "User Research & Persona Development",
      "Competitive Analysis & Market Research",
      "Information Architecture & User Flow Design",
      "Wireframing & Prototyping",
      "Visual Design & Brand Integration",
      "Usability Testing & Iteration"
    ],
    
    challenges: [
      {
        challenge: "Real-time Inventory Management",
        solution: "Implemented WebSocket connections for live inventory updates across all user sessions, preventing overselling and improving user experience."
      },
      {
        challenge: "Payment Gateway Integration",
        solution: "Integrated multiple payment providers with fallback mechanisms and comprehensive error handling for seamless transactions."
      },
      {
        challenge: "Performance Optimization",
        solution: "Implemented lazy loading, image optimization, and database query optimization to achieve 95+ Lighthouse scores."
      }
    ],
    
    results: [
      { metric: "Page Load Time", value: "1.2s", improvement: "60% faster" },
      { metric: "Conversion Rate", value: "4.8%", improvement: "35% increase" },
      { metric: "User Engagement", value: "3.2 min", improvement: "45% longer" },
      { metric: "Mobile Performance", value: "98/100", improvement: "Lighthouse score" }
    ],
    
    codeExample: `// Real-time inventory management with WebSocket
const InventoryManager = {
  socket: null,
  
  init() {
    this.socket = new WebSocket('ws://localhost:8080/inventory');
    this.socket.onmessage = this.handleInventoryUpdate;
  },
  
  handleInventoryUpdate(event) {
    const { productId, quantity } = JSON.parse(event.data);
    this.updateProductQuantity(productId, quantity);
  },
  
  updateProductQuantity(productId, quantity) {
    const productElement = document.querySelector(\`[data-product-id="\${productId}"]\`);
    if (productElement) {
      productElement.querySelector('.quantity').textContent = quantity;
      if (quantity === 0) {
        productElement.classList.add('out-of-stock');
      }
    }
  }
};`
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title} - Case Study
                  </h2>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Clock size={16} />
                      <span className="text-sm">6 weeks development</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label="Close case study"
                >
                  <X size={24} className="text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Project Overview */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.fullDescription}
                  </p>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.demoUrl}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Problem Statement */}
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="text-red-600 dark:text-red-400" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Problem Statement
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudyData.problem}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Design Process */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Lightbulb className="text-yellow-600 dark:text-yellow-400" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Design Process
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudyData.designProcess.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  {caseStudyData.challenges.map((item, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Challenge: {item.challenge}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        <strong>Solution:</strong> {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Example */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Code Implementation
                </h3>
                <div className="rounded-xl overflow-hidden">
                  <SyntaxHighlighter
                    language="javascript"
                    style={oneDark}
                    customStyle={{
                      margin: 0,
                      borderRadius: '0.75rem',
                    }}
                  >
                    {caseStudyData.codeExample}
                  </SyntaxHighlighter>
                </div>
              </div>

              {/* Results & Metrics */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Results & Impact
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {caseStudyData.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                        {result.metric}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400">
                        {result.improvement}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectCaseStudy;
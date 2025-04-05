"use client";

import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CBL2Project() {
  // Project data
  const projectData = {
    id: "cbl2",
    title: "CBL - Project 2",
    subtitle: "Designing a companion with clever human interaction.",
    duration: "4 months (Fall 2023)",
    role: "Interaction Designer, UX Researcher",
    technologies: "Arduino, Processing, Machine Learning",
    overview: "This project explored the design of an interactive companion that can engage with humans in clever and meaningful ways. The goal was to create a system that feels responsive, intuitive, and emotionally intelligent.",
    additionalDescription: "By combining physical computing, machine learning, and thoughtful interaction design, we developed a companion that adapts to user behavior and creates delightful moments of connection.",
    outcomes: "The companion design demonstrated successful engagement with users, creating moments of delight and meaningful interaction. User testing showed that participants formed emotional connections with the companion, validating our design approach.",
    keyLearnings: "This project provided valuable insights into human-computer interaction, particularly regarding how subtle design choices can significantly impact the perceived intelligence and emotional connection with technology.",
  };

  return (
    <Layout>
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Back button with hover animation */}
        <motion.div 
          className="mb-8"
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/projects" className="flex items-center text-blue-600 hover:text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <div className="mb-10">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {projectData.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {projectData.subtitle}
          </motion.p>
        </div>

        {/* Project Hero Image */}
        <motion.div 
          className="relative w-full h-96 mb-10 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
            <p className="text-gray-500">Project Hero Image</p>
          </div>
        </motion.div>

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { title: "Duration", content: projectData.duration },
            { title: "My Role", content: projectData.role },
            { title: "Technologies", content: projectData.technologies }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Project Overview */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-4">{projectData.overview}</p>
          <p className="text-gray-700">{projectData.additionalDescription}</p>
        </motion.div>

        {/* Media Gallery - Main focus as requested */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
          
          {/* Large featured media */}
          <motion.div 
            className="mb-6 relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Featured Video/Demo</p>
            </div>
          </motion.div>
          
          {/* Media grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gallery items with hover effect */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow"
                whileHover={{ scale: 1.05, rotateZ: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Image {item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Prototype Section */}
        <motion.div 
          className="mb-12 bg-gray-50 p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Prototype</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="relative h-80 bg-gray-200 rounded-lg overflow-hidden shadow"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Prototype Display</p>
              </div>
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h3>
              <p className="text-gray-700 mb-4">
                The interactive companion uses a combination of sensors to detect human presence and behavior. 
                It then responds with appropriate visual and audio feedback to create a sense of intelligent interaction.
              </p>
              <p className="text-gray-700 mb-4">
                Key features include:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Motion detection using PIR sensors</li>
                <li>Voice recognition for basic commands</li>
                <li>Emotional response system based on interaction patterns</li>
                <li>Adaptive learning to better respond to recurring users</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Design Process */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Process</h2>
          
          {/* Process Highlights - More visual approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Process steps with progressive animations */}
            {[
              { title: "1. User Research", description: "Conducted interviews and observations to understand how people interact with smart devices." },
              { title: "2. Concept Development", description: "Created multiple design concepts and interaction models through sketching and storyboarding." },
              { title: "3. Prototyping & Testing", description: "Built functional prototypes using Arduino and conducted user testing to refine the interaction design." }
            ].map((step, index) => (
              <motion.div 
                key={step.title}
                className="bg-white p-6 rounded-lg shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="relative h-40 bg-gray-200 rounded mb-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">{step.title.split(".")[1].trim()} Image</p>
                  </div>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Outcomes & Reflection */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcomes & Reflection</h2>
          <p className="text-gray-700 mb-4">{projectData.outcomes}</p>
          <p className="text-gray-700">{projectData.keyLearnings}</p>
        </motion.div>
        
        {/* Previous Project Link */}
        <motion.div 
          className="border-t border-gray-200 pt-8"
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/projects/cbl1" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Previous: CBL - Project 1
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
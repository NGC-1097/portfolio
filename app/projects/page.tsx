"use client";

import Layout from "../components/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <Layout>
      {/* Projects section with direct animation */}
      <motion.section 
        id="projects" 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My Projects
          </motion.h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {/* Project Card 1 */}
              <motion.div 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 relative">
                  <Image 
                    src="/project/cbl1/cbl1-thumbnail.jpeg" 
                    alt="CBL Project 1" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">CBL - Project 1</h3>
                  <p className="mt-2 text-gray-600">Create a game that blends in-person and co-locate playthrough.</p>
                  <div className="mt-4">
                    <Link 
                      href="/projects/cbl1" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 2 */}
              {/*
              <motion.div 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 relative">
                  <Image 
                    src="/project/cbl2/cbl2-thumbnail.jpg" 
                    alt="CBL Project 2" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">CBL - Project 2</h3>
                  <p className="mt-2 text-gray-600">Designing a companion with clever human interaction.</p>
                  <div className="mt-4">
                    <Link 
                      href="/projects/cbl2" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </motion.div>
             */}
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
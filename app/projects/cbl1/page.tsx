"use client";

import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CBL1Project() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  interface LightboxProps {
    src: string;
    alt: string;
    onClose: () => void;
  }

  const ImageLightbox = ({ src, alt, onClose }: LightboxProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(() => {
      const index = galleryImages.findIndex(img => img.src === src);
      return index >= 0 ? index : 0;
    });

    const handlePrevImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentImageIndex(prev => 
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    };

    const handleNextImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentImageIndex(prev => 
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    };

    const currentImage = galleryImages[currentImageIndex];

    return (
      <motion.div 
        className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="text-white text-sm">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center relative" onClick={onClose}>
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[80vh] max-w-[80vw] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              style={{ objectFit: "contain" }}
              className="w-auto h-auto max-h-[80vh] max-w-[80vw]"
            />
          </motion.div>
          
          {/* Navigation arrows */}
          <button 
            className="absolute left-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 focus:outline-none transition"
            onClick={handlePrevImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 focus:outline-none transition"
            onClick={handleNextImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Footer/caption if needed */}
        <div className="p-2 border-t border-gray-800 text-center">
          <p className="text-gray-300 text-sm">{currentImage.alt}</p>
        </div>
      </motion.div>
    );
  };
  
  const projectData = {
    id: "cbl1",
    title: "CBL - Project 1: Melodoodle",
    subtitle: "Creating an interactive musical game that blends physical movement with digital learning",
    duration: "2 quartiles (September 2024 - February 2025)",
    role: "Electronics designer and firmware developer",
    technologies: "C/C++, PlatformIO, ESP32, KiCad, 3D printing, Bluetooth connectivity",
    overview: "Melodoodle is an innovative game that transforms how children learn music by combining physical movement with digital feedback. Players wear a custom-built foot device with color sensors that detect chalk-drawn patterns on the ground, playing corresponding musical notes as they hop on different colors. This creates an intuitive, embodied learning experience that makes music education engaging and fun.",
    additionalDescription: "Working in a team of five, I focused on developing the firmware for the ESP32 microcontroller and designing the electronic components that power the wearable device. The game promotes musical education, physical activity, and social interaction through multiple play modes including single-player, co-op, and remote challenges.",
    outcomes: "The project was successfully demonstrated at Demo Day and received positive feedback for its innovative approach to blending physical and digital gameplay. Educators and peers particularly appreciated the functional wearable device, which was praised for bridging abstract musical concepts with tangible physical experiences.",
    keyLearnings: "This project taught me the importance of iterative prototyping and user testing. I gained valuable experience in designing firmware for embedded systems, implementing sensors for real-world interaction, and creating stable electronic circuits for wearable devices. Working through multiple design cycles helped me understand how to balance technical constraints with user experience goals."
  };

  const galleryImages = [
    { id: 1, src: "/project/cbl1/gallery-1.jpeg", alt: "Electronics design sketch" },
    { id: 2, src: "/project/cbl1/gallery-2.jpeg", alt: "User testing session" },
    { id: 3, src: "/project/cbl1/gallery-3.jpeg", alt: "Early prototype development" },
    { id: 4, src: "/project/cbl1/gallery-4.jpeg", alt: "Circuit board assembly" },
    { id: 5, src: "/project/cbl1/gallery-5.jpeg", alt: "Team collaboration session" },
    { id: 6, src: "/project/cbl1/gallery-6.jpeg", alt: "Final presentation at Demo Day" }
  ];

  return (
    <Layout>
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Back button */}
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

        {/* Project image */}
        <motion.div 
          className="relative w-full h-96 mb-10 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image 
            src="/project/cbl1/1.jpeg" 
            alt="CBL Project 1" 
            fill
            className="object-cover"
          />
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

        {/* Media Gallery */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image) => (
              <motion.div 
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden shadow cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image.src)}
              >
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <ImageLightbox 
              src={selectedImage} 
              alt="Project gallery image" 
              onClose={() => setSelectedImage(null)} 
            />
          )}
        </AnimatePresence>

        {/* Project Process */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Process</h2>
          
          {/* Process Step 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Research and Ideation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <p className="text-gray-700">
                The project began with an extensive brainstorming phase where our team generated over 50 different concepts. Through structured evaluation and team discussions, we narrowed these down to 20 promising ideas. After further development and a team vote, we selected "Melodoodle". That is, an interactive musical game that combines physical movement with digital feedback to teach music concepts in an engaging way targeted towars young teens or kids.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <motion.div 
                  className="relative h-48 bg-gray-200 rounded-lg overflow-hidden shadow w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src="/project/cbl1/ideation.jpeg" 
                    alt="Ideation Process" 
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="text-gray-600 text-xs mt-2">
                  (Robert B.)
                </div>
              </div>
            </div>
          </div>
          
          {/* Process Step 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Prototyping</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <motion.div 
                className="relative h-48 bg-gray-200 rounded-lg overflow-hidden shadow md:order-first"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/project/cbl1/gallery-3.jpeg" 
                  alt="Prototyping Phase" 
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="md:col-span-2 md:order-last">
                <p className="text-gray-700">
                  I developed early prototypes of the electronics system using an ESP32 microcontroller and color sensors to test the core concept. These initial prototypes helped identify key technical challenges in color detection accuracy which was a bit of a challenge scenario with all the background light. While these early versions had limitations in both physical construction and functionality, for the final device they provided with a very clear insight on what had to be corrected or tweaked.
                </p>
              </div>
            </div>
          </div>
          
          {/* Process Step 3 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Final Implementation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <p className="text-gray-700">
                  The final implementation represents the culmination of our team's collaborative effort. I focused on creating the firmware for the ESP32 that processes color sensor data and generates corresponding musical outputs. Despite time constraints limiting some of our original ambitious features, we successfully created a functional device that effectively demonstrates the core concept of transforming physical movement into musical expression, creating a unique educational gaming experience.
                </p>
              </div>
              <motion.div 
                className="relative h-48 bg-gray-200 rounded-lg overflow-hidden shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/project/cbl1/final.jpg" 
                  alt="Final Implementation" 
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
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
        
        {/* Next Project Link */}
        <motion.div 
          className="border-t border-gray-200 pt-8"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/projects/cbl2" className="inline-flex items-center text-blue-600 hover:text-blue-800 ml-auto">
            Next: CBL - Project 2
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
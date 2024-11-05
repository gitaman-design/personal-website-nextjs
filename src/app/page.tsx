"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circle from "../../public/hero-circle.png";
import figma from "../../public/figma.png";
import vsCode from "../../public/visual-studio-code.png";
import shoopy from "../../public/shoopy-small.png";
import Header from "./components/header";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("anyone");

  const tabs = [
    {
      id: "anyone",
      label: "For Anyone",
      text: "Hello there, I'm a designer who cares about making beautiful things that help people.",
    },
    {
      id: "recruiters",
      label: "Recruiters",
      text: "Looking to hire? I'm a seasoned designer with expertise in creating impactful digital experiences.",
    },
    {
      id: "design-leads",
      label: "Design Leads",
      text: "Fellow design leader? Let's connect and discuss design systems, team management, and innovation.",
    },
    {
      id: "product-managers",
      label: "Product Managers",
      text: "Need a design partner? I collaborate closely with PMs to ship user-centered products.",
    },
    {
      id: "tech-leads",
      label: "Tech Leads",
      text: "Working on complex technical challenges? I bridge the gap between design and development.",
    },
  ];

  return (
    <div className="">
      <Header />

      {/* Hero Section */}
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen pt-44 px-6 lg:px-24 xl:px-32 relative"
      >
        {/* Tab Navigation */}
        <nav className="flex flex-wrap gap-4 md:gap-8 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-xs md:text-sm transition-colors duration-200 ${
                selectedTab === tab.id
                  ? "text-indigo-900 font-medium"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </nav>

        {/* Hero Text */}
        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={selectedTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-6xl text-black font-bold"
            >
              {tabs.find((tab) => tab.id === selectedTab)?.text}
            </motion.h1>
          </AnimatePresence>

          {/* Job Status Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-gray-600">Open to new job offers</span>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-56 right-0"
        >
          <Image src={circle} alt="circle" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex lg:absolute top-44 right-40"
        >
          <Image src={figma} alt="figma" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:flex lg:absolute bottom-50 right-96"
        >
          <Image src={vsCode} alt="vs-code" />
        </motion.div>
      </motion.main>

      {/* Featured Work Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="px-6 lg:px-24 xl:px-32"
      >
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-black text-xl font-semibold"
        >
          Featured Work
        </motion.h2>

        {/* Project Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ y: -5 }}
          className="mt-6"
        >
          <div className="pt-6 relative">
            <Image src={shoopy} alt="shoopy" />
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute top-4 right-0 bg-black p-2 rounded"
            >
              <p className="text-white text-sm">5 mins read</p>
            </motion.div>
          </div>
          
          <div className="pt-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              className="bg-gray-200 p-2 rounded pt-2 w-8/12"
            >
              <p className="text-gray-500 text-xs text-center m-0">
                Mobile, Web, Website & Admin
              </p>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-black text-xl font-semibold pt-2"
            >
              Shoopy UX Case Study: Empowering SMBs in Tier 2-3 Cities to go digital
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-gray-500 pt-2"
            >
              I led design efforts collaborating with cross-functional teams to enhance Shoopy's UX expanding its presence in SMBs with engaging features.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="flex items-start justify-between pt-4 gap-2"
            >
              <div className="w-6/12">
                <h4 className="text-lg font-semibold text-black">60%</h4>
                <p className="text-xs text-black">Average increase in SMB income after going online</p>
              </div>
              <div className="w-6/12">
                <h4 className="text-lg font-semibold text-black">45%</h4>
                <p className="text-xs text-black">Increase in user base, demonstrating significant growth and effectiveness</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
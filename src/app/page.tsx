"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import circle from "../../public/hero-circle.png";
import figma from "../../public/figma.png";
import vsCode from "../../public/visual-studio-code.png";
import shoopy from "../../public/shoopy-small.png";
import bigradar from "../../public/bigradar-small.png";
import billSubmit from "../../public/billsubmit.png";
import olympiad from "../../public/olympiad.png";
import imsa from "../../public/imsa.png";
import mahjong from "../../public/mahjong.png";
import go from "../../public/go.png";
import aicf from "../../public/aicf.png";
import aman from "../../public/aman.png";
import draughts from "../../public/draughts.png";
import figmaLogo from "../../public/figma-logo.png";
import notion from "../../public/notion.png";
import framer from "../../public/framer.png";
import webflow from "../../public/webflow.png";
import wordpress from "../../public/wordpress.png";
import mern from "../../public/mern.png";
import reactNative from "../../public/react-native.png";
import davinci from "../../public/davinci.png";
import nextjs from "../../public/nextjs.png";
import tailwind from "../../public/tailwind.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import Header from "./components/header";
import Footer from "./components/footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const stackItemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
};

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

  const stackItems = [
    {
      icon: figmaLogo,
      title: "Figma",
      description: "Interface Design Tool",
    },
    {
      icon: notion,
      title: "Notion",
      description: "Productivity Tool",
    },
    {
      icon: framer,
      title: "Framer",
      description: "No Code Design Tool",
    },
    {
      icon: webflow,
      title: "Webflow",
      description: "No Code Design Tool",
    },
    {
      icon: wordpress,
      title: "Wordpress",
      description: "No Code Design Tool",
    },
    {
      icon: mern,
      title: "MERN",
      description: "Coding Stack",
    },
    {
      icon: reactNative,
      title: "React-Native",
      description: "Mobile App Development",
    },
    {
      icon: davinci,
      title: "Davinci Resolve",
      description: "Video Editing Tool",
    },
    {
      icon: nextjs,
      title: "NextJs",
      description: "React-framework",
    },
    {
      icon: tailwind,
      title: "Tailwind CSS",
      description: "CSS Framework",
    },
  ];

  return (
    <div className="">
      <Header />
      {/* Hero Section */}
      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="min-h-min pt-44 px-6 lg:px-24 xl:px-32 2xl:px-60 relative"
      >
        {/* Tab Navigation */}
        <nav className="flex flex-wrap gap-4 md:gap-8 mb-8 z-auto">
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
              className="text-4xl md:text-5xl lg:text-6xl text-black font-bold"
            >
              {tabs.find((tab) => tab.id === selectedTab)?.text}
            </motion.h1>
          </AnimatePresence>

          {/* Job Status Indicator */}
          <motion.div
            variants={staggerContainer}
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
          className="absolute top-56 right-0 sm:top-48 md:top-60 sm:w-80 md:top-2"
        >
          <Image src={circle} alt="circle" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex lg:absolute top-44 right-40 lg:top-32 lg:right-12 2xl:right-96"
        >
          <Image src={figma} alt="figma" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:flex lg:absolute bottom-50 right-96 lg:bottom-0 lg:right-40 2xl:right-1/4"
        >
          <Image src={vsCode} alt="vs-code" />
        </motion.div>
      </motion.main>

      {/* Featured Work Section */}
      <motion.div
        variants={staggerContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className=" mt-20 px-6 lg:px-24 xl:px-32 sm:mt-20 xl:mt-36 2xl:px-60"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-black text-xl xl:text-3xl font-semibold"
        >
          Featured Work
        </motion.h2>

        {/* Project Card 1 */}
        <Link href="/case-study/shoopy">
          <motion.div
            variants={staggerContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ y: -5 }}
            className="mt-6 md:flex md:items-start md:gap-6"
          >
            <div className="pt-6 relative">
              <Image src={shoopy} alt="shoopy" />
              <motion.div
                variants={staggerContainer}
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
                className="bg-gray-200 p-2 rounded pt-2 w-8/12 2xl:w-6/12 2xl:mt-10"
              >
                <p className="text-gray-500 text-xs text-center m-0 xl:text-lg">
                  Mobile, Web, Website & Admin
                </p>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-black text-xl font-semibold pt-2 xl:text-3xl xl:mt-2 2xl:mt-4 2xl:pr-20"
              >
                Shoopy UX Case Study: Empowering SMBs in Tier 2-3 Cities to go
                digital
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-gray-500 pt-2 xl:text-lg"
              >
                I led design efforts collaborating with cross-functional teams
                to enhance Shoopy's UX expanding its presence in SMBs with
                engaging features.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="flex items-start justify-between pt-4 gap-2 2xl:mt-10"
              >
                <div className="w-6/12">
                  <h4 className="text-lg font-semibold text-black 2xl:text-3xl">
                    60%
                  </h4>
                  <p className="text-xs text-black xl:text-sm 2xl:text-xl 2xl:mt-2">
                    Average increase in SMB income after going online
                  </p>
                </div>
                <div className="w-6/12">
                  <h4 className="text-lg font-semibold text-black 2xl:text-3xl">
                    45%
                  </h4>
                  <p className="text-xs text-black xl:text-sm 2xl:text-xl 2xl:mt-2">
                    Increase in user base, demonstrating significant growth and
                    effectiveness
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Link>
        {/* project 1 ends here  */}

        <div className="md:flex md:items-start md:gap-6 2xl:gap-20">
          {/* project 2 starts here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            variants={staggerContainer}
            whileHover={{ y: -5 }}
            className="mt-6"
          >
            <div className="pt-6 relative">
              <Image src={bigradar} alt="bigradar" />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                variants={staggerContainer}
                className="absolute top-4 right-0 bg-black p-2 rounded 2xl:right-24"
              >
                <p className="text-white text-sm">6 mins read</p>
              </motion.div>
            </div>

            <div className="pt-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                className="bg-gray-200 p-2 rounded pt-2 w-8/12 2xl:w-6/12"
              >
                <p className="text-gray-500 text-xs text-center m-0 xl:text-lg">
                  Mobile, Web, Website & Admin
                </p>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-black text-xl font-semibold pt-2 xl:text-3xl xl:mt-2"
              >
                Boosting BigRadar’s Expansion Across Africa & Europe
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-gray-500 pt-2 xl:text-lg"
              >
                I led design efforts collaborating with cross-functional teams
                to enhance Shoopy's UX expanding its presence in SMBs with
                engaging features.
              </motion.p>
            </div>
          </motion.div>

          {/* project 2 ends here  */}

          {/* project 3 starts here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ y: -5 }}
            className="mt-6"
          >
            <div className="pt-6 relative">
              <Image src={billSubmit} alt="billsubmit" />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                className="absolute top-4 right-0 bg-black p-2 rounded 2xl:right-24"
              >
                <p className="text-white text-sm">6 mins read</p>
              </motion.div>
            </div>

            <div className="pt-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                className="bg-gray-200 p-2 rounded pt-2 w-8/12"
              >
                <p className="text-gray-500 text-xs text-center m-0 xl:text-lg">
                  Mobile, Web, Website & Admin
                </p>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-black text-xl font-semibold pt-2 xl:text-3xl xl:mt-2"
              >
                Boosting BigRadar’s Expansion Across Africa & Europe
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-gray-500 pt-2 xl:text-lg"
              >
                I led design efforts collaborating with cross-functional teams
                to enhance Shoopy's UX expanding its presence in SMBs with
                engaging features.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* project 3 ends here  */}

      {/* Notable work starts  */}

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="border border-solid border-gray-100 rounded-md mt-8 p-4 shadow-lg relative z-0 mx-6 lg:mx-24 xl:mx-32 2xl:mx-60 lg:mt-16 xl:p-6 2xl:p-10 xl:my-36"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-black text-xl font-semibold pt-2 xl:text-3xl"
          >
            Notable Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-gray-500 pt-2 xl:text-lg 2xl:pr-60"
          >
            I led design efforts collaborating with cross-functional teams to
            enhance Shoopy's UX expanding its presence in SMBs with engaging
            features.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="flex flex-wrap mt-6 justify-between 2xl:justify-start 2xl:gap-10"
          >
            <div className="w-6/12 p-2 sm:p-6 sm:w-36 md:w-28 md:p-2">
              <Image src={olympiad} alt="olympiad" />
            </div>
            <div className="w-6/12 p-2 sm:p-6 sm:w-36 md:w-28 md:p-2">
              <Image src={imsa} alt="imsa" />
            </div>
            <div className="w-6/12 p-2 sm:p-6 sm:w-36 md:w-28 md:p-2">
              <Image src={mahjong} alt="olympiad" />
            </div>
            <div className="w-6/12 p-2 sm:p-6 sm:w-36 md:w-28 md:p-2">
              <Image src={go} alt="imsa" />
            </div>
            <div className="w-6/12 p-2 sm:p-6 sm:w-36 md:w-28 md:p-2">
              <Image src={aicf} alt="olympiad" />
            </div>
            <div className="w-6/12 p-2 sm:p-6 sm:w-36 md:w-28 md:p-2">
              <Image src={draughts} alt="imsa" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="absolute -bottom-36 -left-20 -z-50 w-48 md:w-96 md:-bottom-96 xl:-left-36 2xl:-left-60 2xl:w-4/12"
          >
            <Image src={circle} alt="circle" className="rotate-180" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      {/* Notable work ends here  */}

      {/* my story starts here  */}

      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="mt-10 mx-6 lg:mx-24 xl:mx-32 2xl:mx-60 sm:flex sm:items-start sm:gap-6 xl:gap-10"
      >
        <div className="w-full sm:w-6/12 sm:mt-10">
          <Image src={aman} alt="aman" />
        </div>

        <motion.div className="w-full sm:w-6/12 xl:mt-0 2xl:mt-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-black text-xl font-semibold pt-8 xl:text-3xl"
          >
            My Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-gray-500 pt-2 xl:text-lg"
          >
            I led design efforts collaborating with cross-functional teams to
            enhance Shoopy's UX expanding its presence in SMBs with engaging
            features. I led design efforts collaborating with cross-functional
            teams to enhance Shoopy's UX expanding its presence in SMBs with
            engaging features.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-gray-500 pt-2 xl:text-lg"
          >
            I led design efforts collaborating with cross-functional teams to
            enhance Shoopy's UX expanding its presence in SMBs with engaging
            features. I led design efforts collaborating with cross-functional
            teams to enhance Shoopy's UX expanding its presence in SMBs with
            engaging features.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-gray-500 pt-2 xl:text-lg"
          >
            I led design efforts collaborating with cross-functional teams to
            enhance Shoopy's UX expanding its presence in SMBs with engaging
            features. I led design efforts collaborating with cross-functional
            teams to enhance Shoopy's UX expanding its presence in SMBs with
            engaging features.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* my store ends here  */}

      {/* my stack starts here  */}
      <motion.div
        className="mx-6 lg:mx-24 xl:mx-32 2xl:mx-60 xl:my-20"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-black text-xl font-semibold pt-8 xl:text-3xl"
        >
          My Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-gray-500 pt-2 xl:text-lg"
        >
          Commitment to staying updated with the latest design and coding
          technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          variants={staggerContainer}
          className="mt-4 md:flex md:flex-wrap md:gap-4 md:items-center 2xl:mt-10"
        >
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              variants={stackItemVariants}
              whileHover="hover"
              className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200 sm:mt-2 mt-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* my stack ends here  */}
      <Footer />
    </div>
  );
}

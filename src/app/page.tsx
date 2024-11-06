"use client";
import { useState } from "react";
import Image from "next/image";
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

        {/* Project Card 1 */}
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
              Shoopy UX Case Study: Empowering SMBs in Tier 2-3 Cities to go
              digital
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-gray-500 pt-2"
            >
              I led design efforts collaborating with cross-functional teams to
              enhance Shoopy's UX expanding its presence in SMBs with engaging
              features.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="flex items-start justify-between pt-4 gap-2"
            >
              <div className="w-6/12">
                <h4 className="text-lg font-semibold text-black">60%</h4>
                <p className="text-xs text-black">
                  Average increase in SMB income after going online
                </p>
              </div>
              <div className="w-6/12">
                <h4 className="text-lg font-semibold text-black">45%</h4>
                <p className="text-xs text-black">
                  Increase in user base, demonstrating significant growth and
                  effectiveness
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* project 1 ends here  */}

        {/* project 2 starts here */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          whileHover={{ y: -5 }}
          className="mt-6"
        >
          <div className="pt-6 relative">
            <Image src={bigradar} alt="bigradar" />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6 }}
              className="absolute top-4 right-0 bg-black p-2 rounded"
            >
              <p className="text-white text-sm">6 mins read</p>
            </motion.div>
          </div>

          <div className="pt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.8 }}
              className="bg-gray-200 p-2 rounded pt-2 w-8/12"
            >
              <p className="text-gray-500 text-xs text-center m-0">
                Mobile, Web, Website & Admin
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="text-black text-xl font-semibold pt-2"
            >
              Boosting BigRadar’s Expansion Across Africa & Europe
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2 }}
              className="text-gray-500 pt-2"
            >
              I led design efforts collaborating with cross-functional teams to
              enhance Shoopy's UX expanding its presence in SMBs with engaging
              features.
            </motion.p>
          </div>
        </motion.div>

        {/* project 2 ends here  */}

        {/* project 3 starts here */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          whileHover={{ y: -5 }}
          className="mt-6"
        >
          <div className="pt-6 relative">
            <Image src={billSubmit} alt="billsubmit" />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.4 }}
              className="absolute top-4 right-0 bg-black p-2 rounded"
            >
              <p className="text-white text-sm">6 mins read</p>
            </motion.div>
          </div>

          <div className="pt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.6 }}
              className="bg-gray-200 p-2 rounded pt-2 w-8/12"
            >
              <p className="text-gray-500 text-xs text-center m-0">
                Mobile, Web, Website & Admin
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8 }}
              className="text-black text-xl font-semibold pt-2"
            >
              Boosting BigRadar’s Expansion Across Africa & Europe
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="text-gray-500 pt-2"
            >
              I led design efforts collaborating with cross-functional teams to
              enhance Shoopy's UX expanding its presence in SMBs with engaging
              features.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* project 3 ends here  */}

      {/* Notable work starts  */}

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 4 }}
          className="border border-solid border-gray-100 rounded-md mt-8 p-4 shadow-lg relative z-0 mx-6 lg:mx-24 xl:mx-32"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            className="text-black text-xl font-semibold pt-2"
          >
            Notable Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2 }}
            className="text-gray-500 pt-2"
          >
            I led design efforts collaborating with cross-functional teams to
            enhance Shoopy's UX expanding its presence in SMBs with engaging
            features.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.4 }}
            className="flex flex-wrap mt-6"
          >
            <div className="w-6/12 p-2">
              <Image src={olympiad} alt="olympiad" />
            </div>
            <div className="w-6/12 p-2">
              <Image src={imsa} alt="imsa" />
            </div>
            <div className="w-6/12 p-2">
              <Image src={mahjong} alt="olympiad" />
            </div>
            <div className="w-6/12 p-2">
              <Image src={go} alt="imsa" />
            </div>
            <div className="w-6/12 p-2">
              <Image src={aicf} alt="olympiad" />
            </div>
            <div className="w-6/12 p-2">
              <Image src={draughts} alt="imsa" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 4.2 }}
            className="absolute -bottom-36 -left-20 -z-50 w-48"
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
        transition={{ duration: 0.8, delay: 4.8 }}
        className="mt-10 mx-6 lg:mx-24 xl:mx-32"
      >
        <div>
          <Image src={aman} alt="aman" />
        </div>

        <motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.8 }}
            className="text-black text-xl font-semibold pt-8"
          >
            My Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.8 }}
            className="text-gray-500 pt-2"
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
            transition={{ delay: 4.8 }}
            className="text-gray-500 pt-2"
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
            transition={{ delay: 4.8 }}
            className="text-gray-500 pt-2"
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
        className="mx-6 lg:mx-24 xl:mx-32"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 4.8 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          className="text-black text-xl font-semibold pt-8"
        >
          My Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.8 }}
          className="text-gray-500 pt-2"
        >
          Commitment to staying updated with the latest design and coding
          technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4"
        >
          {/* figma stack */}
          <motion.div className="border border-solid rounded-md border-gray-100 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2/12">
                <Image src={figmaLogo} alt="figma-logo" />
              </div>
              <div>
                <motion.h3 className="text-black font-medium">Figma</motion.h3>
                <motion.p className="text-gray-600 text-sm">
                  Interface Design Tool
                </motion.p>
              </div>
            </div>
            <div>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-black"
              />
            </div>
          </motion.div>
          {/* figma stack end */}

          {/* notion stack */}
          <motion.div className="border border-solid rounded-md border-gray-100 p-4 flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2/12">
                <Image src={notion} alt="notion-logo" />
              </div>
              <div>
                <motion.h3 className="text-black font-medium">Notion</motion.h3>
                <motion.p className="text-gray-600 text-sm">
                  Productivity Tool
                </motion.p>
              </div>
            </div>
            <div>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-black"
              />
            </div>
          </motion.div>
          {/* notion stack end */}

          {/* framer stack */}
          <motion.div className="border border-solid rounded-md border-gray-100 p-4 flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2/12">
                <Image src={framer} alt="framer-logo" />
              </div>
              <div>
                <motion.h3 className="text-black font-medium">Framer</motion.h3>
                <motion.p className="text-gray-600 text-sm">
                  No Code Design Tool
                </motion.p>
              </div>
            </div>
            <div>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-black"
              />
            </div>
          </motion.div>
          {/* framer stack end */}

          {/* webflow stack */}
          <motion.div className="border border-solid rounded-md border-gray-100 p-4 flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2/12">
                <Image src={webflow} alt="webflow-logo" />
              </div>
              <div>
                <motion.h3 className="text-black font-medium">
                  Webflow
                </motion.h3>
                <motion.p className="text-gray-600 text-sm">
                  No Code Design Tool
                </motion.p>
              </div>
            </div>
            <div>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-black"
              />
            </div>
          </motion.div>
          {/* webflow stack end */}

          {/* wordpress stack */}
          <motion.div className="border border-solid rounded-md border-gray-100 p-4 flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2/12">
                <Image src={wordpress} alt="wordpress-logo" />
              </div>
              <div>
                <motion.h3 className="text-black font-medium">
                  Wordpress
                </motion.h3>
                <motion.p className="text-gray-600 text-sm">
                  No Code Design Tool
                </motion.p>
              </div>
            </div>
            <div>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-black"
              />
            </div>
          </motion.div>
          {/* wordpress stack end */}

          {/* mern stack */}
          <motion.div className="border border-solid rounded-md border-gray-100 p-4 flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2/12">
                <Image src={mern} alt="mern-logo" />
              </div>
              <div>
                <motion.h3 className="text-black font-medium">MERN</motion.h3>
                <motion.p className="text-gray-600 text-sm">
                  Coding Stack
                </motion.p>
              </div>
            </div>
            <div>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-black"
              />
            </div>
          </motion.div>
          {/* mern stack end */}

          {/* react-native stack */}
          <motion.div className="border border-solid rounded-md border-gray-100 p-4 flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2/12">
                <Image src={reactNative} alt="react-native-logo" />
              </div>
              <div>
                <motion.h3 className="text-black font-medium">
                  React-Native
                </motion.h3>
                <motion.p className="text-gray-600 text-sm">
                  Mobile App Development
                </motion.p>
              </div>
            </div>
            <div>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-black"
              />
            </div>
          </motion.div>
          {/* react-native stack end */}

          {/* davinci stack */}
          <motion.div className="border border-solid rounded-md border-gray-100 p-4 flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2/12">
                <Image src={davinci} alt="davinci-logo" />
              </div>
              <div>
                <motion.h3 className="text-black font-medium">
                  Davinci Resolve
                </motion.h3>
                <motion.p className="text-gray-600 text-sm">
                  Video Editing Tool
                </motion.p>
              </div>
            </div>
            <div>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-black"
              />
            </div>
          </motion.div>
          {/* davinci stack end */}

          {/* nextjs stack */}
          <motion.div className="border border-solid rounded-md border-gray-100 p-4 flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2/12">
                <Image src={nextjs} alt="nextjs-logo" />
              </div>
              <div>
                <motion.h3 className="text-black font-medium">NextJs</motion.h3>
                <motion.p className="text-gray-600 text-sm">
                  React-framework
                </motion.p>
              </div>
            </div>
            <div>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-black"
              />
            </div>
          </motion.div>
          {/* nextjs stack end */}

          {/* tailwind stack */}
          <motion.div className="border border-solid rounded-md border-gray-100 p-4 flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2/12">
                <Image src={tailwind} alt="tailwind-logo" />
              </div>
              <div>
                <motion.h3 className="text-black font-medium">
                  Tailwind CSS
                </motion.h3>
                <motion.p className="text-gray-600 text-sm">
                  CSS Framework
                </motion.p>
              </div>
            </div>
            <div>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-black"
              />
            </div>
          </motion.div>
          {/* tailwind stack end */}
        </motion.div>
      </motion.div>
      {/* my stack ends here  */}
      <Footer />
    </div>
  );
}

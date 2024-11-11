"use client";
import { useState } from "react";
import Image from "next/legacy/image";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import circle from "../../public/hero-circle.png";
import figma from "../../public/figma.png";
import vsCode from "../../public/visual-studio-code.png";
import shoopy from "../../public/shoopy-small.png";
import lifeCare from "../../public/lifeCare-banner.png";
import billSubmit from "../../public/Billsubmit-banner.png";
import fanball from "../../public/FanBall-Banner.png";
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
import brCover from "../../public/br-cover.png";
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
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const tabs = [
    {
      id: "anyone",
      label: "For Anyone",
      text: "Hello there, I'm a designer & Developer who cares about making beautiful things that help people.",
    },
    {
      id: "recruiters",
      label: "Recruiters",
      text: "Looking to hire? I'm a seasoned designer & Developer with expertise in creating impactful digital experiences.",
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

  const projects = [
    {
      id: 1,
      name: "Olympiad",
      image: olympiad,
      description:
        "Designed and developed the official website for Chess Olympiad 2022, Chennai.",
      link: "https://chennai2022.fide.com/",
      buttons: [
        { label: "Visit Website", url: "https://chennai2022.fide.com/" },
      ],
    },
    {
      id: 2,
      name: "IMSA",
      image: imsa,
      description:
        "Created the digital presence for the International Mind Sports Association.",
      link: "https://imsa.sport/",
      buttons: [{ label: "Visit Website", url: "https://imsa.sport/" }],
    },
    {
      id: 3,
      name: "Mahjong",
      image: mahjong,
      description:
        "Developed the official website for international Mahjong tournaments.",
      link: "https://mahjong-mil.org/",
      buttons: [{ label: "Visit Website", url: "https://mahjong-mil.org/" }],
    },
    {
      id: 4,
      name: "Go",
      image: go,
      description:
        "Built the official website for international GO Federation.",
      link: "https://www.intergofed.org/",
      buttons: [{ label: "Visit Website", url: "https://www.intergofed.org/" }],
    },
    {
      id: 5,
      name: "AICF",
      image: aicf,
      description:
        "Redesigned the All India Chess Federation's digital presence.",
      link: "https://aicf.in",
      buttons: [{ label: "Visit Website", url: "https://aicf.in" }],
    },
    {
      id: 6,
      name: "Draughts",
      image: draughts,
      description: "Created the website for World Draughts Federation.",
      link: "#",
      buttons: [{ label: "Visit Website", url: "#" }],
    },
  ];

  return (
    <div className="">
      <Head>
        {/* HTML Meta Tags */}
        <title>Aman Jakhar : UX Designer & Developer</title>
        <meta
          name="description"
          content="Aman Jakhar : Hello there, I'm a designer & Developer who cares about making beautiful things that help people."
        />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Aman Jakhar : UX Designer & Developer" />
        <meta
          itemProp="description"
          content="Aman Jakhar : Hello there, I'm a designer & Developer who cares about making beautiful things that help people."
        />
        <meta
          itemProp="image"
          content="https://aman-jakhar.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faman.c62c6f3a.png&w=1200&q=75"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://aman-jakhar.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aman Jakhar : UX Designer & Developer"
        />
        <meta
          property="og:description"
          content="Aman Jakhar : Hello there, I'm a designer & Developer who cares about making beautiful things that help people."
        />
        <meta
          property="og:image"
          content="https://aman-jakhar.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faman.c62c6f3a.png&w=1200&q=75"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Aman Jakhar : UX Designer & Developer"
        />
        <meta
          name="twitter:description"
          content="Aman Jakhar : Hello there, I'm a designer & Developer who cares about making beautiful things that help people."
        />
        <meta
          name="twitter:image"
          content="https://aman-jakhar.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faman.c62c6f3a.png&w=1200&q=75"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

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
        <Link href="/case-study/bigradar">
          <motion.div
            variants={staggerContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ y: -5 }}
            className="mt-6 md:flex md:items-start md:gap-6"
          >
            <div className="pt-6 relative w-full md:w-6/12">
              <Image src={brCover} alt="bigradar" sizes="100vw" />
              <motion.div
                variants={staggerContainer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute top-4 right-0 2xl:right-20 bg-black p-2 rounded"
              >
                <p className="text-white text-sm">8 mins read</p>
              </motion.div>
            </div>

            <div className="pt-4  md:w-6/12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="bg-gray-200 p-2 rounded pt-2 w-9/12 2xl:w-6/12 2xl:mt-10"
              >
                <p className="text-gray-500 text-xs text-center m-0 xl:text-lg">
                  End-To-End Product Development
                </p>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-black text-xl font-semibold pt-2 xl:text-3xl xl:mt-2 2xl:mt-4 2xl:pr-20 hover:underline transition-shadow duration-200"
              >
                BigRadar : Powering Seamless Customer Connections
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-gray-500 pt-2 xl:text-lg"
              >
                As a product lead at BigRadar, my role in the development of
                BigRadar has been multifaceted and deeply involved in every
                aspect of the product lifecycle.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="flex items-start justify-between pt-4 gap-2 2xl:mt-10"
              >
                <div className="w-6/12">
                  <h4 className="text-lg font-semibold text-black 2xl:text-3xl">
                    40%
                  </h4>
                  <p className="text-xs text-black xl:text-sm 2xl:text-xl 2xl:mt-2">
                    Reduction in customer support costs due to improved
                    efficiencies in handling inquiries
                  </p>
                </div>
                <div className="w-6/12">
                  <h4 className="text-lg font-semibold text-black 2xl:text-3xl">
                    60%
                  </h4>
                  <p className="text-xs text-black xl:text-sm 2xl:text-xl 2xl:mt-2">
                    faster response times and personalized interactions, reports
                    higher satisfaction levels among customers
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
            className="mt-6 md:w-6/12"
          >
            <Link href="/case-study/shoopy">
              <div className="pt-6 relative">
                <Image src={shoopy} alt="shoopy" />
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
                  className="text-black text-xl font-semibold pt-2 xl:text-3xl xl:mt-2 hover:underline transition-shadow duration-200"
                >
                  Shoopy UX Case Study: Empowering SMBs in Tier 2-3 Cities to Go
                  Digital
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-gray-500 pt-2 xl:text-lg"
                >
                  I led design efforts collaborating with cross-functional teams
                  to enhance Shoopy’s UX expanding its presence in SMBs with
                  engaging features.
                </motion.p>
              </div>
            </Link>
          </motion.div>

          {/* project 2 ends here  */}

          {/* project 3 starts here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ y: -5 }}
            className="mt-6 md:w-6/12"
          >
            <Link
              href="https://www.behance.net/gallery/80782331/Lifecare-health-Branding-Website-Design"
              target="_blank"
            >
              <div className="pt-6 relative">
                <Image src={lifeCare} alt="lifecare" sizes="100vw" />
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
                    Mobile, Web, Website, Admin & Branding
                  </p>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-black text-xl font-semibold pt-2 xl:text-3xl xl:mt-2 hover:underline transition-shadow duration-200"
                >
                  LifeCare Health : One of the leading healthcare subscription
                  portal
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-gray-500 pt-2 xl:text-lg"
                >
                  LifeCare health is a subscription-based online pharmacy that
                  enables all chronic patients with Diabetes, Heart Conditions,
                  Hypertension, Renal Disorders etc. to place online medicine
                  order and refill them every month.
                </motion.p>
              </div>
            </Link>
          </motion.div>
        </div>
        {/* project 3 ends here  */}

        <div className="md:flex md:items-start md:gap-6 2xl:gap-20">
          {/* project 4 starts here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            variants={staggerContainer}
            whileHover={{ y: -5 }}
            className="mt-6 md:w-6/12"
          >
            <Link
              href="https://www.behance.net/gallery/147801877/Football-Fantasy-Mobile-App-FanBall-XI"
              target="_blank"
            >
              <div className="pt-6 relative">
                <Image src={fanball} alt="fanball" />
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 }}
                  variants={staggerContainer}
                  className="absolute top-4 right-0 bg-black p-2 rounded 2xl:right-24"
                >
                  <p className="text-white text-sm">4 mins read</p>
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
                    Mobile App Design
                  </p>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-black text-xl font-semibold pt-2 xl:text-3xl xl:mt-2 hover:underline transition-shadow duration-200"
                >
                  FanBall XI : Fantasy Sports Platform for Football fans.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-gray-500 pt-2 xl:text-lg"
                >
                  FanBall XI aims to provide a fantasy sports platform where
                  football fans can compete in mega & head to head contests by
                  building unique fantasy teams using their football knowledge &
                  skills.
                </motion.p>
              </div>
            </Link>
          </motion.div>

          {/* project 4 ends here  */}

          {/* project 5 starts here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ y: -5 }}
            className="mt-6 md:w-6/12"
          >
            <Link href="https://billsubmit.com/" target="_blank">
              <div className="pt-6 relative">
                <Image src={billSubmit} alt="billsubmit" sizes="100vw" />
                {/* <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 }}
                  className="absolute top-4 right-0 bg-black p-2 rounded 2xl:right-24"
                >
                  <p className="text-white text-sm">6 mins read</p>
                </motion.div> */}
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                    className="bg-gray-200 p-2 rounded pt-2 w-8/12"
                  >
                    <p className="text-gray-500 text-xs text-center m-0 xl:text-lg">
                      SaaS Product
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                    className="bg-black p-2 rounded pt-2 w-8/12"
                  >
                    <p className="text-white text-xs text-center m-0 xl:text-lg">
                      Coming Very Soon
                    </p>
                  </motion.div>
                </div>

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-black text-xl font-semibold pt-2 xl:text-3xl xl:mt-2 hover:underline transition-shadow duration-200"
                >
                  BillSubmit : Keep your bills organised for years
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-gray-500 pt-2 xl:text-lg"
                >
                  Make your accountant life easy, You don’t have to panic or to
                  search your documents to send every single bill to your
                  accountant. Just upload it on BillSubmit.
                </motion.p>
              </div>
            </Link>
          </motion.div>
          {/* project 5 ends here */}
        </div>
      </motion.div>

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

          <div className="flex flex-wrap mt-6 gap-4 justify-between 2xl:justify-start 2xl:gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative w-[calc(50%-0.5rem)] sm:w-36 md:w-28 group"
                onMouseEnter={() => setHoveredItem(project.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block md:hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto"
                  />
                </Link>

                {/* Desktop Version with Hover */}
                <div className="hidden md:block">
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto"
                  />

                  {/* Hover Overlay */}
                  <div
                    className={`absolute cursor-pointer top-0 right-0 left-0 bg-black w-52 rounded-md bg-opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center p-6 z-50 ${
                      hoveredItem === project.id
                        ? "opacity-200"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <h3 className="text-white font-semibold text-sm mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 text-xs mb-4 text-center">
                      {project.description}
                    </p>
                    <div className="flex flex-col gap-2 w-full">
                      {project.buttons.map((button, index) => (
                        <a
                          key={index}
                          href={button.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-white text-black text-xs py-3 px-3 rounded-md hover:bg-gray-100 transition-colors"
                        >
                          {button.label}
                          <ArrowRightIcon className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            From the sports fields of Haryana to the digital design world, my
            journey has been anything but conventional. As a former competitive
            chess and cricket player turned self-taught UI/UX designer and
            developer, I've learned that success isn't always about following
            the traditional path – it's about finding your passion and pursuing
            it relentlessly.
            <br></br>
            <br></br>
            After discovering design through a data entry job, I taught myself
            UI/UX design through online resources and hands-on practice. Since
            2016, I've been crafting digital experiences for leading companies
            while maintaining a successful freelance practice. Recently, I've
            expanded my toolkit to include full-stack development with the MERN
            stack, combining my design expertise with technical capabilities to
            create comprehensive digital solutions.
            <br></br>
            <br></br>
            Currently, I'm bringing this blend of skills to my role at BigRadar
            while continuing to take on exciting freelance projects. Every day
            brings new challenges and opportunities to create, learn, and grow.
          </motion.p>
          <motion.div>
            <Link href="/story">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-md md:text-sm transition-colors duration-200 bg-gray-100 p-4 w-full rounded-md mt-2 text-black`}
              >
                Read In Detail
              </motion.button>
            </Link>
          </motion.div>
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
                {/* <ArrowRightIcon className="w-5 h-5 text-gray-400 flex-shrink-0" /> */}
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

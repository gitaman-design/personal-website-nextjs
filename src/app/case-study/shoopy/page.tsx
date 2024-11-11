"use client";
import { useState } from "react";
import Image from "next/legacy/image";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/header";
import Footer from "../../components/footer";
import circle from "../../../../public/hero-circle.png";
import shoopy from "../../../../public/shoopy-logo.png";
import cover from "../../../../public/shoopy-cover.png";
import shoopy1 from "../../../../public/Shoopy1.png";
import shoopy2 from "../../../../public/shoopy2.png";
import shoopy3 from "../../../../public/Shoopy3.png";
import figmaLogo from "../../../../public/figma-logo.png";
import notion from "../../../../public/notion.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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

export default function Page() {
  const tags = [
    { id: "1", label: "Website" },
    { id: "2", label: "User Research" },
    { id: "3", label: "Mobile App" },
    { id: "4", label: "Product Design" },
    { id: "5", label: "Branding" },
    { id: "6", label: "UI Design" },
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

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="min-h-min pt-44 px-6 lg:px-24 xl:px-32 2xl:px-60 relative"
      >
        {/* Hero Text */}
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="w-14 my-8"
          >
            <Image src={shoopy} alt="shoopy-logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-200 p-2 rounded pt-2 w-8/12 sm:w-4/12 2xl:w-6/12"
          >
            <p className="text-gray-500 text-xs text-center m-0 xl:text-lg">
              Mobile, Web, Website & Admin
            </p>
          </motion.div>
          <motion.h1
            key=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl text-black font-bold mt-6 lg:pr-36"
          >
            Shoopy UX Case Study: Empowering SMBs in Tier 2-3 Cities to Go
            Digital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-gray-500 pt-2 xl:text-lg mt-2 lg:pr-36"
          >
            I led design efforts collaborating with cross-functional teams to
            enhance Shoopy's UX expanding its presence in SMBs with engaging
            features.
          </motion.p>
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
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-10 px-6 lg:px-24 xl:px-32 2xl:px-60 relative"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image src={cover} alt="cover" />
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-2 mt-4"
        >
          {tags.map((value, index) => (
            <motion.div
              key={index}
              className="text-xs bg-gray-100 lg:text-sm rounded-md text-black p-2 w-auto"
            >
              {value.label}
            </motion.div>
          ))}
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-10 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black md:flex md:items-start md:justify-between"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=" md:pr-4 md:h-40 md:mr-3 lg:mr-6 md:border-gray-100 border-r-2 border-solid border-black w-full"
        >
          <h3 className="text-lg 2xl:text-xl font-semibold">My Role</h3>
          <p className="text-sm 2xl:text-lg mt-1">Design Lead</p>
          <p className="text-sm 2xl:text-lg mt-1">UX Designer</p>
          <p className="text-sm 2xl:text-lg mt-1">User Researcher</p>
          <p className="text-sm 2xl:text-lg mt-1">UI Designer</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 md:mt-0 md:h-40 md:mr-3 lg:mr-6 md:border-gray-100  border-r-2 border-solid border-black w-full"
        >
          <h3 className="text-lg 2xl:text-xl font-semibold">Deliverables</h3>
          <p className="text-sm 2xl:text-lg mt-1">Flow Creation</p>
          <p className="text-sm 2xl:text-lg mt-1">High Fidelity Design</p>
          <p className="text-sm 2xl:text-lg mt-1">Research & Testing</p>
          <p className="text-sm 2xl:text-lg mt-1">Quality Assurance</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 md:mt-0 md:h-40 md:mr-3 lg:mr-6 md:border-gray-100  border-r-2 border-solid border-black w-full"
        >
          <h3 className="text-lg 2xl:text-xl font-semibold">Team</h3>
          <p className="text-sm 2xl:text-lg mt-1">Design Team</p>
          <p className="text-sm 2xl:text-lg mt-1">Development Team</p>
          <p className="text-sm 2xl:text-lg mt-1">Founders</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 md:mt-0 md:h-40 md:border-gray-100 border-r-2 border-solid 2xl:border-none border-black w-full"
        >
          <h3 className="text-lg 2xl:text-xl font-semibold">Years</h3>
          <p className="text-sm 2xl:text-lg mt-1">2023</p>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-16 md:pt-10  px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:flex md:items-start md:justify-between 2xl:mt-10"
        >
          <div className="md:w-4/12">
            <h3 className="text-lg 2xl:text-xl font-semibold">My Work</h3>
          </div>
          <div className="md:w-8/12">
            <p className="text-sm lg:text-base 2xl:text-lg mt-1 md:mt-0 2xl:pr-20">
              Shoopy is an all-in-one e-commerce platform designed to help small
              and medium-sized businesses (SMBs) transition from offline to
              online operations. The platform specifically caters to businesses
              in tier 2-3 cities across India, focusing on merchants who are not
              necessarily tech-savvy but are eager to expand their digital
              presence.
            </p>
            <p className="text-sm lg:text-base 2xl:text-lg mt-4">
              As the Design Lead at Shoopy, I was responsible for
            </p>
            <ul className="mt-2 list-disc list-inside text-sm lg:text-base 2xl:text-lg">
              <li>
                Collaborating directly with founders to align design with
                business objectives
              </li>
              <li>
                Conducting user research through interviews and phone
                conversations
              </li>
              <li>
                Managing stakeholder relationships across development teams,
                founders, and users
              </li>
              <li>
                Creating end-to-end user experiences for daily platform
                interactions
              </li>
              <li>Designing critical business flows and premium themes</li>
            </ul>
          </div>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-16 md:pt-10 xl:pt-20 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:flex md:items-start md:justify-between"
        >
          <div className="md:w-4/12">
            <h3 className="text-lg 2xl:text-xl font-semibold">
              Problem Statement
            </h3>
          </div>
          <div className="md:w-8/12">
            <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
              Small business owners in tier 2-3 cities of India face significant
              challenges in digitalizing their businesses:
            </p>
            <ul className="mt-2 list-disc list-inside text-sm lg:text-base 2xl:text-lg">
              <li>Limited technical expertise and resources</li>
              <li>Hesitation to invest heavily in technology</li>
              <li>Uncertainty about the ROI of going digital</li>
              <li>Need for simple yet effective digital solutions</li>
              <li>Time constraints in managing online operations</li>
            </ul>
          </div>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-6 px-4 xl:pt-20 lg:px-20 xl:px-24 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image src={shoopy1} alt="cover" />
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-16 md:pt-10 xl:pt-20 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:flex md:items-start md:justify-between"
        >
          <div className="md:w-4/12">
            <h3 className="text-lg 2xl:text-xl font-semibold">User Research</h3>
          </div>
          <div className="md:w-8/12">
            <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
              Target Audience
            </p>
            <ul className="mt-2 list-disc list-inside text-sm lg:text-base 2xl:text-lg">
              <li>Small and medium business owners</li>
              <li>Age group: 25+ years</li>
              <li>Location: Tier 2-3 cities in India</li>
              <li>Technical proficiency: Basic to moderate</li>
              <li>
                Business type: Primarily offline operations looking to expand
                online
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-16 md:pt-10 xl:pt-20 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:flex md:items-start md:justify-between"
        >
          <div className="md:w-4/12">
            <h3 className="text-lg 2xl:text-xl font-semibold">
              Key User Concerns
            </h3>
          </div>
          <div className="md:w-8/12">
            <p className="text-sm mt-1 md:mt-0 lg:text-base 2xl:text-lg">
              Through extensive user interviews and conversations, we identified
              several recurring concerns
            </p>
            <p className="text-md 2xl:text-xl font-semibold mt-4 xl:mt-8">
              Technical Complexity
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-2 xl:mt-4 2xl:text-lg">
              <div className="bg-gray-100 p-2 rounded-md">
                <p>How hard will it be to make our store online?</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-md 2xl:text-lg">
                <p>Will i be able to manage it myself?</p>
              </div>
            </div>

            <p className="text-md 2xl:text-xl font-semibold mt-4 xl:mt-8">
              Time Investment
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-2 xl:mt-4 2xl:text-lg">
              <div className="bg-gray-100 p-2 rounded-md">
                <p>How much time will it take to upload our inventory?</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <p>Can i manage both offline and online store?</p>
              </div>
            </div>

            <p className="text-md 2xl:text-xl font-semibold mt-4 xl:mt-8">
              Business Growth
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-2 xl:mt-4 2xl:text-lg">
              <div className="bg-gray-100 p-2 rounded-md">
                <p>Will i be able to get any business online?</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <p>How can i market my business digitally?</p>
              </div>
            </div>

            <p className="text-md 2xl:text-xl font-semibold mt-4 xl:mt-8">
              ROI Concerns
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-2 xl:mt-4 2xl:text-lg">
              <div className="bg-gray-100 p-2 rounded-md">
                <p>How much will it cost?</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <p>When will i see returns?</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-6 px-4 xl:pt-20 lg:px-20 xl:px-24 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image src={shoopy2} alt="cover" />
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-16 md:pt-10 xl:pt-20 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:flex md:items-start md:justify-between"
        >
          <div className="md:w-4/12">
            <h3 className="text-lg 2xl:text-xl font-semibold">
              Some Design Solutions
            </h3>
          </div>
          <div className="md:w-8/12">
            <div className="">
              <p className="text-md 2xl:text-xl font-semibold mt-1 md:mt-0">
                Simplified Order Flow
              </p>
              <p className="text-sm mt-4 2xl:text-lg">
                Challenge: Users needed an intuitive system to manage orders
                without getting overwhelmed.
              </p>
              <p className="text-sm mt-4 2xl:text-lg">Solutions:</p>

              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>Created a step-by-step order management system</li>
                <li>Implemented clear status indicators</li>
                <li>Designed simple action buttons for common tasks</li>
                <li>Added order tracking and management features</li>
              </ul>
            </div>

            <div className="xl:mt-8">
              <p className="text-md font-semibold mt-4 2xl:text-xl">
                Streamlined Inventory Upload
              </p>
              <p className="text-sm mt-4 2xl:text-xl">
                Challenge: Users found inventory management time-consuming and
                complex.
              </p>
              <p className="text-sm mt-4 2xl:text-lg">Solutions:</p>

              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>Developed bulk upload features</li>
                <li>Created simple forms for individual product addition</li>
                <li>Implemented category-based organization</li>
                <li>Added quick edit features for inventory management</li>
              </ul>
            </div>

            <div className="xl:mt-8">
              <p className="text-md 2xl:text-xl font-semibold mt-4">
                User-Friendly Coupon System
              </p>
              <p className="text-sm mt-4 2xl:text-lg">
                Challenge: Users wanted to offer discounts but struggled with
                complex promotion systems.
              </p>
              <p className="text-sm mt-4 2xl:text-lg">Solutions:</p>

              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>Designed simple coupon creation flow</li>
                <li>Implemented visual feedback for coupon status</li>
                <li>Created easy-to-understand validation rules</li>
                <li>Added performance tracking for promotions</li>
              </ul>
            </div>

            <div className="xl:mt-8">
              <p className="text-md font-semibold mt-4 2xl:text-xl">
                Premium Theme System
              </p>
              <p className="text-sm mt-4 2xl:text-lg">
                Challenge: Users wanted professional-looking stores without
                design expertise.
              </p>
              <p className="text-sm mt-4 2xl:text-lg">Solutions:</p>

              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>Created a library of premium themes</li>
                <li>Implemented one-click theme application</li>
                <li>Designed customization options for basic branding</li>
                <li>Added mobile-responsive layouts</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-6 px-4 md:px-8 xl:pt-20 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image src={shoopy3} alt="cover" />
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-16 md:pt-10 xl:pt-20 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:flex md:items-start md:justify-between"
        >
          <div className="md:w-4/12">
            <h3 className="text-lg 2xl:text-xl font-semibold">Our Actions</h3>
          </div>
          <div className="md:w-8/12">
            <div>
              <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0 ">
                Research Phase
              </p>
              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>Conducted user interviews with 50+ SMB owners</li>
                <li>Created user personas based on common patterns</li>
                <li>Mapped user journeys for critical tasks</li>
                <li>Identified pain points and opportunities</li>
              </ul>
            </div>
            <div className="xl:mt-8">
              <p className="text-md font-semibold mt-4 2xl:text-xl">
                Design Phase
              </p>
              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>Created low-fidelity wireframes</li>
                <li>Developed interactive prototypes</li>
                <li>Conducted usability testing</li>
                <li>Iterated based on user and founders feedback</li>
              </ul>
            </div>

            <div className="xl:mt-8">
              <p className="text-md font-semibold mt-4 2xl:text-xl">
                Implementation Phase
              </p>
              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>Worked closely with developers</li>
                <li>Created detailed documentation</li>
                <li>Conducted regular testing</li>
                <li>Gathered user feedback for improvements</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-10 px-6 xl:pt-20 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white border-gray-100 shadow-lg rounded-lg p-4 md:p-6 lg:p-10 z-20"
        >
          <div className=" relative">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-black text-xl font-semibold xl:text-3xl"
            >
              Results and Impact
            </motion.h2>

            <div className="md:flex md:items-center md:justify-between md:gap-6 2xl:gap-10 2xl:mt-14">
              <div className=" mt-4">
                <h4 className="text-lg font-semibold text-black 2xl:text-3xl">
                  400%
                </h4>
                <p className="text-xs text-black xl:text-sm 2xl:text-xl 2xl:mt-2">
                  Increase in successful store onboarding
                </p>
              </div>

              <div className=" mt-4">
                <h4 className="text-lg font-semibold text-black 2xl:text-3xl">
                  75%
                </h4>
                <p className="text-xs text-black xl:text-sm 2xl:text-xl 2xl:mt-2">
                  Adoption rate for premium themes
                </p>
              </div>

              <div className=" mt-4">
                <h4 className="text-lg font-semibold text-black 2xl:text-3xl">
                  60%
                </h4>
                <p className="text-xs text-black xl:text-sm 2xl:text-xl 2xl:mt-2">
                  Average increase in SMB income after going online
                </p>
              </div>

              <div className=" mt-4">
                <h4 className="text-lg font-semibold text-black 2xl:text-3xl">
                  65%
                </h4>
                <p className="text-xs text-black xl:text-sm 2xl:text-xl 2xl:mt-2">
                  Reduced store setup time for SMB
                </p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute 2xl:w-96 2xl:right-0 -top-20 md:-top-36 right-0 sm:top-48 md:top-60 sm:w-80 md:top-2 -z-20"
          >
            <Image src={circle} alt="circle" />
          </motion.div>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-16 md:pt-10 xl:pt-20 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:flex md:items-start md:justify-between"
        >
          <div className="md:w-4/12">
            <h3 className="text-lg 2xl:text-xl font-semibold">Key Learnings</h3>
          </div>
          <div className="md:w-8/12">
            <div>
              <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
                Simplicity is Key
              </p>
              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>
                  Users prefer straightforward solutions over feature-rich
                  complexity
                </li>
                <li>Clear visual hierarchy helps reduce learning curve</li>
                <li>Step-by-step guidance is essential for new users</li>
              </ul>
            </div>

            <div className="xl:mt-8">
              <p className="text-md 2xl:text-xl font-semibold mt-4">
                Local Context Matters
              </p>
              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>
                  Understanding tier 2-3 city business dynamics is crucial
                </li>
                <li>
                  Language and cultural considerations affect design decisions
                </li>
                <li>Trust-building elements are essential</li>
              </ul>
            </div>

            <div className="xl:mt-8">
              <p className="text-md 2xl:text-xl font-semibold mt-4">
                Business Impact Focus
              </p>
              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>Users need to see clear ROI</li>
                <li>Quick wins encourage continued platform usage</li>
                <li>Success stories motivate new users</li>
              </ul>
            </div>

            <div className="xl:mt-8">
              <p className="text-md 2xl:text-xl font-semibold mt-4">
                Qualitative Improvements
              </p>
              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>Increased user confidence in managing online stores</li>
                <li>Higher satisfaction with store aesthetics</li>
                <li>Better understanding of digital business operations</li>
                <li>Improved customer engagement</li>
              </ul>
            </div>

            <div className="xl:mt-8">
              <p className="text-md 2xl:text-xl font-semibold mt-4">
                Expansion Opportunities
              </p>
              <ul className="mt-2 list-disc list-inside text-sm 2xl:text-lg">
                <li>Multi-language support for broader reach</li>
                <li>Advanced marketing tools for growing businesses</li>
                <li>Integration with local payment systems</li>
              </ul>
            </div>

            <div className="xl:mt-8">
              <p className="text-sm mt-4 2xl:text-lg">
                The Shoopy platform demonstrates how thoughtful UX design can
                bridge the digital divide for small businesses in India. By
                focusing on user needs and maintaining simplicity while
                providing powerful features, we've created a platform that
                genuinely helps SMBs grow their business online.
                <br></br>
                <br></br>
                The success metrics show that when design thinking is applied to
                real-world problems with a deep understanding of user context,
                it can create significant business impact. The project continues
                to evolve, with new features and improvements being added based
                on ongoing user feedback and changing market needs.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.main>

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
          Stack Used In the Project
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

      <motion.div
        className="mx-6 my-10 lg:mx-24 xl:mx-32 2xl:mx-60 xl:my-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <Link href="/story">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-md md:text-sm transition-colors duration-200 text-black bg-gray-100 p-4 w-full rounded-md mt-2`}
          >
            Read My Story
          </motion.button>
        </Link>
      </motion.div>

      <Footer />
    </div>
  );
}

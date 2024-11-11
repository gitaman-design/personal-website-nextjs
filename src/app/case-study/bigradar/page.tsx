"use client";
import { useState } from "react";
import Image from "next/legacy/image";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/header";
import Footer from "../../components/footer";
import circle from "../../../../public/hero-circle.png";
import bigradarIcon from "../../../../public/bigradar-icon.png";
import br1 from "../../../../public/br1.png";
import br2 from "../../../../public/br2.png";
import br3 from "../../../../public/br3.png";
import br4 from "../../../../public/br4.png";
import br5 from "../../../../public/br5.png";
import br6 from "../../../../public/br6.png";
import r1icon from "../../../../public/r1-icon.png";
import r2icon from "../../../../public/r2-icon.png";
import figmaLogo from "../../../../public/figma-logo.png";
import notion from "../../../../public/notion.png";
import wordpress from "../../../../public/wordpress.png";
import mern from "../../../../public/mern.png";
import reactNative from "../../../../public/react-native.png";
import davinci from "../../../../public/davinci.png";
import nextjs from "../../../../public/nextjs.png";
import tailwind from "../../../../public/tailwind.png";
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
    { id: "7", label: "Coding" },
    { id: "8", label: "Product Development" },
    { id: "9", label: "Testing & Deployment" },
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
            className="w-20 my-8"
          >
            <Image src={bigradarIcon} alt="shoopy-logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-200 p-2 rounded pt-2 w-8/12 sm:w-4/12 2xl:w-6/12"
          >
            <p className="text-gray-500 text-xs text-center m-0 xl:text-lg">
              End-to-End Product Development
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
            BigRadar : Powering Seamless Customer Connections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-gray-500 pt-2 xl:text-lg mt-2 lg:pr-36"
          >
            BigRadar is a comprehensive multichannel messaging solution designed
            to enhance customer service and engagement across various platforms.
            By integrating live chat, email campaigns, and WhatsApp
            communications, BigRadar aims to catch, convert, and retain
            customers effectively
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
          <Image src={br1} alt="cover" />
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
          <p className="text-sm 2xl:text-lg mt-1">Product Lead</p>
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
          <p className="text-sm 2xl:text-lg mt-1">Features Development</p>
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
          <p className="text-sm 2xl:text-lg mt-1">Stake Holders</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 md:mt-0 md:h-40 md:border-gray-100 border-r-2 border-solid 2xl:border-none border-black w-full"
        >
          <h3 className="text-lg 2xl:text-xl font-semibold">Years</h3>
          <p className="text-sm 2xl:text-lg mt-1">2022 - Present</p>
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
            <h3 className="text-lg 2xl:text-xl font-semibold">What is it?</h3>
          </div>
          <div className="md:w-8/12">
            <p className="text-sm lg:text-base 2xl:text-lg mt-1 md:mt-0 2xl:pr-20">
              BigRadar is a comprehensive multichannel messaging solution
              designed to enhance customer service and engagement across various
              platforms. By integrating live chat, email campaigns, and WhatsApp
              communications, BigRadar aims to catch, convert, and retain
              customers effectively. This platform is particularly beneficial
              for businesses seeking to improve their customer experience
              through seamless communication channels. With a focus on
              personalizing interactions and automating responses, BigRadar
              enables organizations to manage customer inquiries efficiently,
              ultimately driving sales and support outcomes.
            </p>
            <br></br>
            <br></br>
            <p className="text-sm lg:text-base 2xl:text-lg mt-1 md:mt-0 2xl:pr-20">
              As a product lead at BigRadar, my role in the development of
              BigRadar has been multifaceted and deeply involved in every aspect
              of the product lifecycle. From initial discussions with founders
              and stakeholders to conducting user research and engaging directly
              with existing users, I have taken on responsibilities that span
              project management, UX design, development, and testing. This
              hands-on approach has allowed me to gain a holistic understanding
              of the product's needs and user expectations.
            </p>
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
              Understanding the Problems
            </h3>
          </div>
          <div className="md:w-8/12">
            <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
              Our journey began with an in-depth exploration of the existing
              customer communication landscape. Through extensive interviews
              with business owners, marketing managers, and customer service
              representatives, we uncovered a complex web of challenges that
              were significantly impacting business growth and customer
              acquisition.
            </p>
            <br></br>
            <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
              The Conversion Black Box
            </p>
            <br></br>
            <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
              One of the most pressing concerns that emerged from our research
              was the mystery surrounding website visitor behavior. Business
              owners were experiencing substantial visitor dropout rates but
              lacked the tools and insights to understand why potential
              customers were leaving their websites without converting. This
              "black box" of user behavior was particularly frustrating for
              companies investing heavily in driving traffic to their sites,
              only to see visitors disappear without a trace. As one business
              owner put it, "It's like watching money walk out the door, and we
              don't even know why they're leaving."
            </p>
            <br></br>
            <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
              The Human Connection Gap
            </p>
            <br></br>
            <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
              Another critical insight that emerged was the growing resistance
              to traditional contact forms. Modern consumers, increasingly
              accustomed to instant gratification in their digital interactions,
              showed a strong preference for immediate, human-like connections.
              The standard "fill out this form and we'll get back to you"
              approach was creating a significant barrier to engagement. Users
              wanted to talk to a real person, get immediate answers to their
              questions, and feel heard in the moment of their interest – not
              hours or days later when their motivation might have waned.
            </p>
            <br></br>
            <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
              The Fragmentation Challenge
            </p>
            <br></br>
            <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
              Beyond these fundamental issues, businesses were grappling with:
            </p>
            <ul className="mt-2 list-disc list-inside text-sm lg:text-base 2xl:text-lg">
              <li>
                <span className="font-semibold">
                  Siloed communication channels:
                </span>{" "}
                Teams were struggling to manage a fragmented ecosystem of email,
                live chat, social media, and messaging platforms, making it
                difficult to provide a cohesive customer experience.
              </li>
              <li>
                <span className="font-semibold">
                  Lack of centralized visibility:
                </span>{" "}
                The absence of a unified view of customer interactions was
                leading to inefficiencies, redundancies, and a disjointed
                understanding of customer needs.
              </li>
              <li>
                <span className="font-semibold">
                  Limited automation capabilities:
                </span>{" "}
                Manual processes for tasks like lead qualification, appointment
                scheduling, and order tracking were hampering productivity and
                scalability.
              </li>
              <li>
                <span className="font-semibold">Engagement hurdles:</span>{" "}
                Companies found it increasingly difficult to cut through the
                noise and capture the attention of their target audiences,
                especially on emerging channels like WhatsApp.
              </li>
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
          <Image src={br2} alt="cover" />
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
            <h3 className="text-lg 2xl:text-xl font-semibold">Solutions</h3>
          </div>
          <div className="md:w-8/12">
            <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
              Designing for Seamless Connections
            </p>
            <br></br>
            <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
              With a deep understanding of the problem space, I set out to craft
              a comprehensive product strategy that would address the pain
              points of our target users. The design process involved close
              collaboration with the founding team, frequent user interviews,
              and an iterative approach to prototyping and testing.
            </p>
            <br></br>
            <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
              Unifying the Communication Landscape
            </p>
            <br></br>
            <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
              At the core of BigRadar's design was the concept of a centralized
              dashboard that would give businesses a single pane of glass for
              managing all customer interactions. By integrating email, live
              chat, social media, and messaging platforms like WhatsApp, we
              aimed to eliminate the need for multiple disparate tools,
              streamlining workflows and enhancing cross-channel visibility.
            </p>
            <br></br>
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
          <Image src={br3} alt="cover" />
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
            <h3 className="text-lg 2xl:text-xl font-semibold"> </h3>
          </div>
          <div className="md:w-8/12">
            <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
              Empowering Intelligent Automation
            </p>
            <br></br>
            <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
              To boost productivity and free up teams to focus on higher-value
              tasks, we developed a suite of intelligent automation features.
              This included automated lead qualification, intelligent routing,
              appointment scheduling, and order tracking - all seamlessly
              integrated into the BigRadar platform.
            </p>
            <br></br>
            <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
              Driving Engagement through Personalization
            </p>
            <br></br>
            <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
              Recognizing the importance of personalization in today's
              customer-centric landscape, we invested heavily in tools that
              would help businesses connect with their audiences in a more
              meaningful way. This included the development of a no-code chatbot
              builder for WhatsApp, sophisticated email campaign management, and
              AI-powered analytics to deliver data-driven insights.
            </p>
            <br></br>
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
          <Image src={br4} alt="cover" />
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
            <h3 className="text-lg 2xl:text-xl font-semibold"> </h3>
          </div>
          <div className="md:w-8/12">
            <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
              Ensuring Seamless Experiences
            </p>
            <br></br>
            <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
              Throughout the design process, we placed a strong emphasis on
              creating an intuitive, user-friendly experience that would empower
              businesses of all sizes to leverage BigRadar's capabilities. This
              involved extensive usability testing, iterative refinements, and a
              focus on simplifying complex tasks through intelligent design.
            </p>
            <br></br>
            <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
              Achieving Tangible Results
            </p>
            <br></br>
            <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
              As the BigRadar platform began to take shape, we closely monitored
              its impact on our customers' businesses. The results were nothing
              short of transformative, with companies reporting significant
              improvements across a range of key metrics.
            </p>
            <br></br>
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
          <Image src={br5} alt="cover" />
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
          className=""
        >
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-black text-xl font-semibold xl:text-3xl"
            >
              Results and Impact
            </motion.h2>

            <div className="md:flex md:items-start md:gap-10 mt-8">
              <div className="bg-white border-gray-100 shadow-lg rounded-lg p-4 md:p-6 lg:p-10 z-20">
                <div className="w-14">
                  <Image src={r1icon} alt="icon" />
                </div>
                <div className="mt-4">
                  <p className="text-black text-xl 2xl:text-3l font-semibold mt-4 md:mt-0">
                    Simplicity is Key
                  </p>
                  <br></br>
                  <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                    The combination of intelligent chatbots, personalized email
                    campaigns, and data-driven insights empowered businesses to
                    engage their customers more effectively. This translated to
                    a 40% increase in lead conversion rates and a 25% boost in
                    email open and click-through rates.
                  </p>
                </div>
              </div>

              <div className="bg-white border-gray-100 shadow-lg rounded-lg p-4 md:p-6 lg:p-10 z-20 mt-8 md:mt-0">
                <div className="w-14">
                  <Image src={r2icon} alt="icon" />
                </div>
                <div className="mt-4">
                  <p className="text-black text-xl 2xl:text-3l font-semibold mt-4 md:mt-0">
                    Boosting Operational Efficiency
                  </p>
                  <br></br>
                  <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                    The automation features embedded within BigRadar allowed
                    teams to redirect their efforts from repetitive, manual
                    tasks to higher-value customer interactions. This resulted
                    in a 35% increase in agent productivity and a 20% reduction
                    in operational costs.
                  </p>
                </div>
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
              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                Through the journey of building and evolving BigRadar, several
                critical insights emerged that shaped not only our product
                development but also our understanding of the customer
                engagement landscape.
              </p>
              <br></br>

              <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
                The Power of Real-Time Engagement
              </p>
              <br></br>

              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                Perhaps our most significant learning was the tremendous impact
                of immediate response times on conversion rates. We discovered
                that businesses who engaged with visitors within the first 30
                seconds of their website visit were three times more likely to
                convert them into qualified leads. This reinforced our
                commitment to developing sophisticated real-time engagement
                tools and automated response systems that could initiate
                conversations at the perfect moment.
              </p>
              <br></br>
              <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
                The Complexity of Simplicity
              </p>
              <br></br>

              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                Building a platform that unified multiple communication channels
                taught us that simplicity on the surface requires incredible
                complexity behind the scenes. While users demanded a seamless,
                intuitive interface, they also needed robust features and deep
                customization options. Finding this balance between simplicity
                and power became a crucial principle in our design process. We
                learned to layer functionality, making basic operations
                immediately accessible while allowing power users to dive deeper
                into advanced features when needed.
              </p>
              <br></br>
              <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
                The Human Element in Digital Transformation
              </p>
              <br></br>

              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                Despite the growing sophistication of AI and automation, we
                learned that the human element remains irreplaceable in customer
                service. Our most successful implementations were those that
                used technology to enhance rather than replace human
                interactions. This insight led us to focus on creating tools
                that empowered customer service representatives rather than
                trying to fully automate their roles.
              </p>
              <br></br>

              <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
                Data-Driven Decision Making
              </p>
              <br></br>

              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                Our experience showed that businesses often make assumptions
                about their customers' preferences without hard data to back
                them up. By implementing comprehensive analytics and tracking
                capabilities, we helped our clients discover surprising insights
                about their customers' behavior and preferences. This reinforced
                the importance of building robust analytics tools and making
                data easily accessible and actionable.
              </p>
            </div>
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
              Future Considerations
            </h3>
          </div>
          <div className="md:w-8/12">
            <div>
              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                As we look ahead, several key areas of opportunity and
                development are shaping our roadmap for BigRadar's evolution.
              </p>
              <br></br>

              <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
                AI and Machine Learning Enhancement
              </p>
              <br></br>

              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                We're exploring advanced applications of AI to further improve
                customer engagement and automate routine tasks:
              </p>

              <ul className="mt-2 list-disc list-inside text-sm lg:text-base 2xl:text-lg">
                <li>
                  Enhanced natural language processing for more sophisticated
                  chatbot conversations
                </li>
                <li>
                  Predictive analytics to anticipate customer needs and behavior
                </li>
                <li>
                  Automated sentiment analysis for better understanding of
                  customer satisfaction
                </li>
                <li>
                  Smart routing algorithms that learn from past interactions to
                  optimize response times
                </li>
              </ul>

              <br></br>

              <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
                Emerging Channel Integration
              </p>
              <br></br>

              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                The communication landscape continues to evolve rapidly, and
                we're preparing to integrate new channels and technologies:
              </p>

              <ul className="mt-2 list-disc list-inside text-sm lg:text-base 2xl:text-lg">
                <li>
                  Integration with emerging social media platforms and messaging
                  apps
                </li>
                <li>Voice-based interaction capabilities</li>
                <li>Video chat and co-browsing features</li>
                <li>AR/VR support for enhanced customer service experiences</li>
              </ul>

              <br></br>

              <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
                Enterprise-Scale Solutions
              </p>
              <br></br>

              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                As our platform grows, we're developing features specifically
                designed for larger enterprises:
              </p>

              <ul className="mt-2 list-disc list-inside text-sm lg:text-base 2xl:text-lg">
                <li>Advanced team collaboration tools</li>
                <li>Custom workflow builders</li>
                <li>Enhanced security and compliance features</li>
                <li>Multi-department support with role-based access control</li>
                <li>
                  Global deployment capabilities with regional customization
                </li>
              </ul>

              <br></br>

              <p className="text-md 2xl:text-xl font-semibold mt-4 md:mt-0">
                Mobile-First Evolution
              </p>
              <br></br>

              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                With the increasing dominance of mobile commerce, we're
                expanding our mobile capabilities:
              </p>

              <ul className="mt-2 list-disc list-inside text-sm lg:text-base 2xl:text-lg">
                <li>Enhanced mobile SDK for better in-app customer support</li>
                <li>Progressive Web App support</li>
                <li>Advanced mobile analytics and tracking</li>
                <li>
                  Improved mobile-first user experiences for both agents and
                  customers
                </li>
              </ul>
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
          <Image src={br6} alt="cover" />
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
            <h3 className="text-lg 2xl:text-xl font-semibold">Conclusion</h3>
          </div>
          <div className="md:w-8/12">
            <div>
              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                BigRadar's journey from a simple customer service tool to a
                comprehensive engagement platform reflects the evolving nature
                of customer communications in the digital age. By maintaining a
                laser focus on solving real business problems while embracing
                technological innovation, we've created a solution that not only
                meets current needs but is positioned to adapt to future
                challenges.
              </p>
              <br></br>
              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                The success metrics and positive feedback from our clients
                validate our approach to building a platform that emphasizes
                both efficiency and human connection. With a 40% increase in
                lead conversion rates, 25% improvement in customer engagement
                metrics, and significant reduction in response times, BigRadar
                has demonstrated its ability to deliver tangible business value.
              </p>
              <br></br>
              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                However, what truly sets BigRadar apart is not just the
                technology or the metrics, but its role in transforming how
                businesses connect with their customers. By providing tools that
                make sophisticated customer engagement accessible to businesses
                of all sizes, we're democratizing access to enterprise-level
                customer service capabilities.
              </p>
              <br></br>
              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                Looking ahead, our commitment to innovation, coupled with our
                deep understanding of customer needs, positions BigRadar to
                continue leading the evolution of customer engagement
                technology. As we move forward, we remain focused on our core
                mission: helping businesses build stronger, more meaningful
                connections with their customers across every digital
                touchpoint.
              </p>
              <br></br>
              <p className="text-sm lg:text-base mt-1 md:mt-0 2xl:text-lg">
                The future of customer engagement is not just about adding more
                channels or automating more processes – it's about creating more
                meaningful, personalized, and effective interactions between
                businesses and their customers. With this vision guiding our
                development, BigRadar is well-positioned to continue shaping the
                future of customer engagement technology.
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
        <Link href="/case-study/shoopy">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-md md:text-sm transition-colors duration-200 text-black bg-gray-100 p-4 w-full rounded-md mt-2`}
          >
            Next Project
          </motion.button>
        </Link>
      </motion.div>

      <Footer />
    </div>
  );
}

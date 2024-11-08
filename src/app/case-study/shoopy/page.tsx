"use client";
import { useState } from "react";
import Image from "next/image";
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
            className="bg-gray-200 p-2 rounded pt-2 w-8/12 2xl:w-6/12"
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
            className="text-4xl md:text-5xl lg:text-6xl text-black font-bold mt-6"
          >
            Shoopy UX Case Study: Empowering SMBs in Tier 2-3 Cities to Go
            Digital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-gray-500 pt-2 xl:text-lg mt-2"
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
              className="text-xs bg-gray-100 rounded-md text-black p-2 w-auto"
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
        className="pt-10 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-r-2 border-solid border-black"
        >
          <h3 className="text-lg font-semibold">My Role</h3>
          <p className="text-sm mt-1">Design Lead</p>
          <p className="text-sm mt-1">UX Designer</p>
          <p className="text-sm mt-1">User Researcher</p>
          <p className="text-sm mt-1">UI Designer</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 border-r-2 border-solid border-black"
        >
          <h3 className="text-lg font-semibold">Deliverables</h3>
          <p className="text-sm mt-1">Flow Creation</p>
          <p className="text-sm mt-1">High Fidelity Design</p>
          <p className="text-sm mt-1">Research & Testing</p>
          <p className="text-sm mt-1">Quality Assurance</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 border-r-2 border-solid border-black"
        >
          <h3 className="text-lg font-semibold">Team</h3>
          <p className="text-sm mt-1">Design Team</p>
          <p className="text-sm mt-1">Development Team</p>
          <p className="text-sm mt-1">Founders</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 border-r-2 border-solid border-black"
        >
          <h3 className="text-lg font-semibold">Years</h3>
          <p className="text-sm mt-1">2023 - Present</p>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-16 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=""
        >
          <div>
            <h3 className="text-lg font-semibold">My Role</h3>
          </div>
          <div>
            <p className="text-sm mt-1">
              Shoopy is an all-in-one e-commerce platform designed to help small
              and medium-sized businesses (SMBs) transition from offline to
              online operations. The platform specifically caters to businesses
              in tier 2-3 cities across India, focusing on merchants who are not
              necessarily tech-savvy but are eager to expand their digital
              presence.
            </p>
            <p className="text-sm mt-4">
              As the Design Lead at Shoopy, I was responsible for
            </p>
            <ul className="mt-2 list-disc list-inside text-sm">
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
        className="pt-16 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=""
        >
          <div>
            <h3 className="text-lg font-semibold">Problem Statement</h3>
          </div>
          <div>
            <p className="text-sm mt-1">
              Small business owners in tier 2-3 cities of India face significant
              challenges in digitalizing their businesses:
            </p>
            <ul className="mt-2 list-disc list-inside text-sm">
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
        className="pt-6 px-4 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
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
        className="pt-16 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=""
        >
          <div>
            <h3 className="text-lg font-semibold">User Research</h3>
          </div>
          <div>
            <p className="text-md font-semibold mt-4">Target Audience</p>
            <ul className="mt-2 list-disc list-inside text-sm">
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
        className="pt-16 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=""
        >
          <div>
            <h3 className="text-lg font-semibold">Key User Concerns</h3>
          </div>
          <div>
            <p className="text-sm mt-1">
              Through extensive user interviews and conversations, we identified
              several recurring concerns
            </p>
            <p className="text-md font-semibold mt-4">Technical Complexity</p>
            <div className="flex flex-wrap gap-2 text-sm mt-2">
              <div className="bg-gray-100 p-2 rounded-md">
                <p>How hard will it be to make our store online?</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <p>Will i be able to manage it myself?</p>
              </div>
            </div>

            <p className="text-md font-semibold mt-4">Time Investment</p>
            <div className="flex flex-wrap gap-2 text-sm mt-2">
              <div className="bg-gray-100 p-2 rounded-md">
                <p>How much time will it take to upload our inventory?</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <p>Can i manage both offline and online store?</p>
              </div>
            </div>

            <p className="text-md font-semibold mt-4">Business Growth</p>
            <div className="flex flex-wrap gap-2 text-sm mt-2">
              <div className="bg-gray-100 p-2 rounded-md">
                <p>Will i be able to get any business online?</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <p>How can i market my business digitally?</p>
              </div>
            </div>

            <p className="text-md font-semibold mt-4">ROI Concerns</p>
            <div className="flex flex-wrap gap-2 text-sm mt-2">
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
        className="pt-6 px-4 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
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
        className="pt-16 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=""
        >
          <div>
            <h3 className="text-lg font-semibold">Some Design Solutions</h3>
          </div>
          <div>
            <p className="text-md font-semibold mt-1">Simplified Order Flow</p>
            <p className="text-sm mt-4">
              Challenge: Users needed an intuitive system to manage orders
              without getting overwhelmed.
            </p>
            <p className="text-sm mt-4">Solutions:</p>

            <ul className="mt-2 list-disc list-inside text-sm">
              <li>Created a step-by-step order management system</li>
              <li>Implemented clear status indicators</li>
              <li>Designed simple action buttons for common tasks</li>
              <li>Added order tracking and management features</li>
            </ul>
          </div>

          <div>
            <p className="text-md font-semibold mt-4">
              Streamlined Inventory Upload
            </p>
            <p className="text-sm mt-4">
              Challenge: Users found inventory management time-consuming and
              complex.
            </p>
            <p className="text-sm mt-4">Solutions:</p>

            <ul className="mt-2 list-disc list-inside text-sm">
              <li>Developed bulk upload features</li>
              <li>Created simple forms for individual product addition</li>
              <li>Implemented category-based organization</li>
              <li>Added quick edit features for inventory management</li>
            </ul>
          </div>

          <div>
            <p className="text-md font-semibold mt-4">
              User-Friendly Coupon System
            </p>
            <p className="text-sm mt-4">
              Challenge: Users wanted to offer discounts but struggled with
              complex promotion systems.
            </p>
            <p className="text-sm mt-4">Solutions:</p>

            <ul className="mt-2 list-disc list-inside text-sm">
              <li>Designed simple coupon creation flow</li>
              <li>Implemented visual feedback for coupon status</li>
              <li>Created easy-to-understand validation rules</li>
              <li>Added performance tracking for promotions</li>
            </ul>
          </div>

          <div>
            <p className="text-md font-semibold mt-4">Premium Theme System</p>
            <p className="text-sm mt-4">
              Challenge: Users wanted professional-looking stores without design
              expertise.
            </p>
            <p className="text-sm mt-4">Solutions:</p>

            <ul className="mt-2 list-disc list-inside text-sm">
              <li>Created a library of premium themes</li>
              <li>Implemented one-click theme application</li>
              <li>Designed customization options for basic branding</li>
              <li>Added mobile-responsive layouts</li>
            </ul>
          </div>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-6 px-4 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
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
        className="pt-16 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=""
        >
          <div>
            <h3 className="text-lg font-semibold">Our Actions</h3>
          </div>
          <div>
            <p className="text-md font-semibold mt-4">Research Phase</p>
            <ul className="mt-2 list-disc list-inside text-sm">
              <li>Conducted user interviews with 50+ SMB owners</li>
              <li>Created user personas based on common patterns</li>
              <li>Mapped user journeys for critical tasks</li>
              <li>Identified pain points and opportunities</li>
            </ul>
          </div>

          <div>
            <p className="text-md font-semibold mt-4">Design Phase</p>
            <ul className="mt-2 list-disc list-inside text-sm">
              <li>Created low-fidelity wireframes</li>
              <li>Developed interactive prototypes</li>
              <li>Conducted usability testing</li>
              <li>Iterated based on user and founders feedback</li>
            </ul>
          </div>

          <div>
            <p className="text-md font-semibold mt-4">Implementation Phase</p>
            <ul className="mt-2 list-disc list-inside text-sm">
              <li>Worked closely with developers</li>
              <li>Created detailed documentation</li>
              <li>Conducted regular testing</li>
              <li>Gathered user feedback for improvements</li>
            </ul>
          </div>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-10 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white border-gray-100 shadow-lg rounded-lg p-4 z-20"
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

            <div>
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
            className="absolute -top-20 right-0 sm:top-48 md:top-60 sm:w-80 md:top-2 -z-20"
          >
            <Image src={circle} alt="circle" />
          </motion.div>
        </motion.div>
      </motion.main>

      <motion.main
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="pt-16 px-6 lg:px-24 xl:px-32 2xl:px-60 relative text-black"
      >
        <motion.div
          variants={staggerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=""
        >
          <div>
            <h3 className="text-lg font-semibold">Key Learnings</h3>
          </div>
          <div>
            <p className="text-md font-semibold mt-4">Simplicity is Key</p>
            <ul className="mt-2 list-disc list-inside text-sm">
              <li>
                Users prefer straightforward solutions over feature-rich
                complexity
              </li>
              <li>Clear visual hierarchy helps reduce learning curve</li>
              <li>Step-by-step guidance is essential for new users</li>
            </ul>
          </div>

          <div>
            <p className="text-md font-semibold mt-4">Local Context Matters</p>
            <ul className="mt-2 list-disc list-inside text-sm">
              <li>Understanding tier 2-3 city business dynamics is crucial</li>
              <li>
                Language and cultural considerations affect design decisions
              </li>
              <li>Trust-building elements are essential</li>
            </ul>
          </div>

          <div>
            <p className="text-md font-semibold mt-4">Business Impact Focus</p>
            <ul className="mt-2 list-disc list-inside text-sm">
              <li>Users need to see clear ROI</li>
              <li>Quick wins encourage continued platform usage</li>
              <li>Success stories motivate new users</li>
            </ul>
          </div>

          <div>
            <p className="text-md font-semibold mt-4">
              Qualitative Improvements
            </p>
            <ul className="mt-2 list-disc list-inside text-sm">
              <li>Increased user confidence in managing online stores</li>
              <li>Higher satisfaction with store aesthetics</li>
              <li>Better understanding of digital business operations</li>
              <li>Improved customer engagement</li>
            </ul>
          </div>

          <div>
            <p className="text-md font-semibold mt-4">
              Expansion Opportunities
            </p>
            <ul className="mt-2 list-disc list-inside text-sm">
              <li>Multi-language support for broader reach</li>
              <li>Advanced marketing tools for growing businesses</li>
              <li>Integration with local payment systems</li>
            </ul>
          </div>

          <div>
            <p className="text-sm mt-4">
              The Shoopy platform demonstrates how thoughtful UX design can
              bridge the digital divide for small businesses in India. By
              focusing on user needs and maintaining simplicity while providing
              powerful features, we've created a platform that genuinely helps
              SMBs grow their business online.
              <br></br>
              <br></br>
              The success metrics show that when design thinking is applied to
              real-world problems with a deep understanding of user context, it
              can create significant business impact. The project continues to
              evolve, with new features and improvements being added based on
              ongoing user feedback and changing market needs.
            </p>
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
                <ArrowRightIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`text-md md:text-sm transition-colors duration-200 text-black bg-gray-100 p-4 w-full rounded-md mt-2`}
        >
          Next Project
        </motion.button>
      </motion.div>

      <Footer />
    </div>
  );
}

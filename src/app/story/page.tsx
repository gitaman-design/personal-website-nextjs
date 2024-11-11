"use client";
import { useState } from "react";
import Image from "next/legacy/image";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import circle from "../../../public/hero-circle.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import story from "../../../public/story.png";

import Header from "../components/header";
import Footer from "../components/footer";

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
        <div className="lg:flex lg:items-start gap-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="w-full xl:mt-0 2xl:mt-20"
          >
            <Image src={story} alt="story" sizes="100vw" />
          </motion.div>

          <motion.div className="w-full  xl:mt-0 2xl:mt-20">
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
              Growing up in Haryana, India, I was never what you'd call a
              typical "good student." Instead of textbooks, you'd find me on the
              cricket field or hunched over a chessboard. Sports weren't just
              hobbies for me – they were my life. I played cricket and chess at
              competitive levels, learning valuable lessons about strategy,
              patience, and perseverance that would later shape my professional
              life in unexpected ways.
              <br></br>
              <br></br>
              After school, life took an interesting turn. I started working as
              a data entry operator at a small company – not exactly the dream
              job, but it turned out to be the doorway to my future. It was
              there, through what seemed like a routine job, that I first
              encountered the world of design. Something about the way digital
              interfaces could shape user experiences fascinated me. It was like
              discovering a new game, but instead of moving cricket balls or
              chess pieces, I was moving pixels and shaping user journeys.
              <br></br>
              <br></br>
              With no formal training but armed with curiosity and
              determination, I dove into the world of UI/UX design. YouTube
              became my classroom, design blogs my textbooks, and every new
              project a practical exam. I spent countless nights learning,
              practicing, and refining my skills. It wasn't easy, but my
              background in sports had taught me that excellence requires
              dedication and consistent practice.
              <br></br>
              <br></br>
              In 2016, I landed my first professional design role, marking the
              beginning of my journey in the tech industry. Over the years, I've
              had the privilege of working with remarkable companies, each
              adding new dimensions to my expertise. Alongside my full-time
              roles, I ventured into freelancing, which has now been a
              significant part of my professional life for over five years.
              <br></br>
              <br></br>
              But my journey didn't stop at design. Last year, I decided to
              expand my horizons into development. Starting with React, I
              gradually built my knowledge to encompass the entire MERN stack.
              It was like learning a new sport – challenging at first, but
              incredibly rewarding as the pieces started falling into place.
              <br></br>
              <br></br>
              Today, I work with BigRadar while continuing my freelancing
              projects. This dual role keeps me on my toes, constantly learning
              and evolving. Looking back, it's amazing to see how my path has
              unfolded – from a sports enthusiast to a data entry operator, to a
              self-taught designer, and now a full-stack developer. It's been
              quite a journey, and I'm excited to see where it leads next.
            </motion.p>
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
      </motion.main>

      <Footer />
    </div>
  );
}

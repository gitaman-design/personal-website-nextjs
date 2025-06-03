"use client";
import { useState } from "react";
import Image from "next/legacy/image";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import circle from "../../../public/hero-circle.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import yt from "../../../public/youtube.png";
import insta from "../../../public/insta.png";
import x from "../../../public/x.png";

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
        className="min-h-min pt-60 px-6 lg:px-24 xl:px-32 2xl:px-60 relative"
      >
        <div className="">
          <AnimatePresence mode="wait">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl text-black font-bold"
            >
              Connect With Me
            </motion.h1>
          </AnimatePresence>
        </div>
        <div className="">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-gray-500 pt-2 xl:text-lg"
          >
            Write a email or just message me on any social media.
          </motion.p>
        </div>

        <div className="lg:flex lg:items-center lg:justify-between lg:gap-10 mt-8">
          <div className="border rounded-md p-8 border-solid border-gray-100 lg:w-6/12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-gray-500 pt-2 xl:text-lg"
            >
              Email
            </motion.p>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-black text-xl font-semibold pt-2 xl:text-3xl xl:mt-2 2xl:mt-4 2xl:pr-20 hover:underline transition-shadow duration-200"
            >
              amanjakhar54@gmail.com
            </motion.h2>
          </div>

          <div className="border rounded-md p-8 border-solid border-gray-100 lg:w-6/12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-gray-500 pt-2 xl:text-lg"
            >
              Socials
            </motion.p>
            <div className="lg:flex lg:flex-1 lg:justify-start lg:gap-10 mt-8">
              <Link href="https://www.youtube.com/@jakhar-aman" target="_blank">
                <Image src={yt} alt="yt" width={20} height={20} />
              </Link>

              <Link href="https://www.instagram.com/liftaman/" target="_blank">
                <Image src={insta} alt="insta" width={20} height={20} />
              </Link>

              <Link href="https://x.com/_amanjakhar" target="_blank">
                <Image src={x} alt="x" width={20} height={20} />
              </Link>
            </div>
          </div>
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

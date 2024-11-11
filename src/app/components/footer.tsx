"use client";
import { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/aj-logo.png";
import email from "../../../public/email.png";
import nextjs from "../../../public/nextjs.png";
import tailwind from "../../../public/tailwind.png";

export default function Footer() {
  return (
    <motion.div className="bg-white mt-10">
      {/* want to work together starts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mx-6 lg:mx-24 xl:mx-32 2xl:mx-60"
      >
        <motion.div className="md:flex md:items-center md:justify-between">
          <motion.div className="flex items-center">
            <motion.div className="w-4/12">
              <Image src={email} alt="email" />
            </motion.div>
            <motion.div className="w-8/12">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-black text-xl font-semibold"
              >
                Want to <br></br>work together?
              </motion.h2>
            </motion.div>
          </motion.div>
          <motion.div>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-md md:text-sm transition-colors duration-200 bg-black p-4 w-full rounded-md mt-2`}
              >
                Connect With Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* want to work together ends */}

      {/* footer starts  */}
      <div className="mx-6 lg:mx-24 xl:mx-32 2xl:mx-60 pb-20">
        <div className="border-b-2 border-solid border-1 border-black my-10 lg:my-16"></div>
        <div className="lg:flex lg:items-start lg:justify-between">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div className="mt-8 lg:mt-0">
            <Link href="/">
              <p className="text-gray-500 pt-2 hover:text-black">Home</p>
            </Link>

            <Link href="/story">
              <p className="text-gray-500 pt-2 hover:text-black ">My Story</p>
            </Link>

            <Link
              href="https://drive.google.com/file/d/1uh6dGrywHwCYSaYatSdOS2tPoZvXSYep/view?usp=sharing"
              target="_blank"
            >
              <p className="text-gray-500 pt-2 hover:text">Resume</p>
            </Link>
            <Link href="/contact">
              <p className="text-gray-500 pt-2 hover:text-black ">
                Connect With Me
              </p>
            </Link>
          </div>
          <div className="mt-8 lg:mt-0">
            <Link href="https://www.instagram.com/uxuiaman/" target="_blank">
              <p className="text-gray-500 pt-2 hover:text-black">Instagram</p>
            </Link>

            <Link
              href="https://www.linkedin.com/in/aman-jakhar-562107107/"
              target="_blank"
            >
              <p className="text-gray-500 pt-2 hover:text-black ">Linkedin</p>
            </Link>
            <Link href="https://www.youtube.com/@uxuiaman" target="_blank">
              <p className="text-gray-500 pt-2 hover:text-black ">Youtube</p>
            </Link>
            <Link href="https://x.com/_amanjakhar" target="_blank">
              <p className="text-gray-500 pt-2 hover:text-black ">X</p>
            </Link>
          </div>
          <div className="mt-8 lg:mt-0">
            <p className="pt-2 text-black font-bold">
              2024 Aman Jakhar. All Rights Reserved
            </p>
            <p className="text-gray-500 hover:text-black ">
              Made With ❤️ and Chai
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Image src={nextjs} alt="nextjs" width={60} height={60} />
              <Image src={tailwind} alt="nextjs" width={60} height={60} />
            </div>
            <p className="text-gray-500 pt-2 hover:text-black ">
              Used for this website
            </p>
          </div>
        </div>
      </div>
      {/* footer ends  */}
    </motion.div>
  );
}

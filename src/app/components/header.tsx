"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import logo from "../../../public/aj-logo.png";
import insta from "../../../public/insta.png";
import yt from "../../../public/youtube.png";
import x from "../../../public/x.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "My Story", href: "/story" },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1uh6dGrywHwCYSaYatSdOS2tPoZvXSYep/view?usp=sharing",
    isExternal: true,
  },
  { name: "Connect With Me", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-24 xl:px-32 2xl:px-60 shadow"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Aman Jakhar</span>
              <Image src={logo} alt="logo" width={46} height={46} />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm/6 font-medium text-gray-900 hover:text-violet-900 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm/6 font-medium hover:text-violet-900 transition-colors ${
                    pathname === item.href
                      ? "text-violet-900 underline underline-offset-8"
                      : "text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-6 m-0">
            <Link href="https://www.youtube.com/@uxuiaman" target="_blank">
              <Image src={yt} alt="yt" width={20} height={20} />
            </Link>

            <Link href="https://www.instagram.com/uxuiaman/" target="_blank">
              <Image src={insta} alt="insta" width={20} height={20} />
            </Link>

            <Link href="https://x.com/_amanjakhar" target="_blank">
              <Image src={x} alt="x" width={20} height={20} />
            </Link>
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden transition-all duration-1000"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Aman Jakhar</span>
                  <Image src={logo} alt="logo" width={46} height={46} />
                </a>
                <motion.button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </motion.button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <motion.div
                    className="space-y-2 py-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {navigation.map((item) =>
                      item.isExternal ? (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-gray-50 ${
                            pathname === item.href
                              ? "text-violet-900 underline underline-offset-8"
                              : "text-gray-900"
                          }`}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </motion.div>
                  <motion.div
                    className="flex flex-1 gap-6 py-6"
                    initial={{ opacity: 0, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Link
                      href="https://www.youtube.com/@uxuiaman"
                      target="_blank"
                    >
                      <Image src={yt} alt="yt" width={20} height={20} />
                    </Link>

                    <Link
                      href="https://www.instagram.com/uxuiaman/"
                      target="_blank"
                    >
                      <Image src={insta} alt="insta" width={20} height={20} />
                    </Link>

                    <Link href="https://x.com/_amanjakhar" target="_blank">
                      <Image src={x} alt="x" width={20} height={20} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </AnimatePresence>
      </header>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlignRight, X } from "lucide-react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <div className="z-50 space-y-6">
      <button
        onClick={toggleMenu}
        className="z-[999] flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AlignRight className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      <div className="">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="z-0 w-full absolute top-16 left-0 right-0 bg-white shadow-lg overflow-hidden px-4 sm:px-6 lg:px-8"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="py-2">
                <ul className="space-y-1">
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-primary-foreground/10 transition-colors duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="block px-4 py-2 text-gray-800 hover:bg-primary-foreground/10 transition-colors duration-200"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="block px-4 py-2 text-gray-800 hover:bg-primary-foreground/10 transition-colors duration-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

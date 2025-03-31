"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut"
          }
        }}
        exit={{ 
          opacity: 0, 
          y: -50,
          transition: {
            duration: 0.4,
            ease: "easeIn"
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

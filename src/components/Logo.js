import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex flex-col items-center justify-center rounded-full text-xl font-bold "
        whileHover={{
          
          width: '150px',
          transition:{duration:1}
        }}
        
      >
        <motion.div className="p-0">
        MR
        </motion.div>
        
      </MotionLink>
    </div>
  );
}

export default Logo;

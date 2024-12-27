import Link from "next/link";
import React ,{useState } from 'react';
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function Logo() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
        className="w-16 h-16 bg-dark text-light flex flex-col items-center justify-center rounded-full text-xl font-bold "
        whileHover={{
          
          width: '150px',
          
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        
      >
        <motion.div className="p-0">
        {hovered ? 'Mediator' : 'MR'}
        </motion.div>
        
      </MotionLink>
    </div>
  );
}

export default Logo;

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath == href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo></Logo>
      </div>
      <nav className="flex item justify-center flex-wrap">
        <motion.a
        whileTap={{scale:0.9}}
          href="https://twitter.com"
          className="w-6 mr-3"
          target={"_blank"}
          whileHover={{
            y: [0, -5, -7, -5, 0], // Ajout de -30 pour une pause en haut

            transition: {
              duration: 1, // Durée totale de chaque cycle de rebond
              repeat: Infinity,
              ease: [0.1, 0.2, 0.9, 1], // Bézier personnalisé pour une animation en forme de cloche
            },
          }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
        whileTap={{scale:0.9}}
          href="https://Github.com"
          target={"_blank"}
          className="w-6 mx-3"
          whileHover={{
            y: [0, -5, -7, -5, 0], // Ajout de -30 pour une pause en haut

            transition: {
              duration: 1, // Durée totale de chaque cycle de rebond
              repeat: Infinity,
              ease: [0.1, 0.2, 0.9, 1], // Bézier personnalisé pour une animation en forme de cloche
            },
          }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
        whileTap={{scale:0.9}}
          href="https://www.linkedin.com/"
          target={"_blank"}
          className="w-6 mx-3"
          whileHover={{
            y: [0, -5, -7, -5, 0], // Ajout de -30 pour une pause en haut

            transition: {
              duration: 1, // Durée totale de chaque cycle de rebond
              repeat: Infinity,
              ease: [0.1, 0.2, 0.9, 1], // Bézier personnalisé pour une animation en forme de cloche
            },
          }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
        whileTap={{scale:0.9}}
          href="https://www.pinterest.com/"
          target={"_blank"}
          className="w-6 mx-3"
          whileHover={{
            y: [0, -5, -7, -5, 0], // Ajout de -30 pour une pause en haut

            transition: {
              duration: 1, // Durée totale de chaque cycle de rebond
              repeat: Infinity,
              ease: [0.1, 0.2, 0.9, 1], // Bézier personnalisé pour une animation en forme de cloche
            },
          }}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
        whileTap={{scale:0.9}}
          href="https://dribbble.com/"
          target={"_blank"}
          className="w-6 ml-3"
          whileHover={{
            y: [0, -5, -7, -5, 0], // Ajout de -30 pour une pause en haut

            transition: {
              duration: 1, // Durée totale de chaque cycle de rebond
              repeat: Infinity,
              ease: [0.1, 0.2, 0.9, 1], // Bézier personnalisé pour une animation en forme de cloche
            },
          }}
        >
          <DribbbleIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;

import { useState} from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";



const navVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const headVariants= {
    open: {opacity: 0},
    closed : {opacity: 1}
}
export default function Header() {
    const matches = useMediaQuery('(max-width: 640px)');
    
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full relative">
      <motion.div animate={isOpen ? 'open' : 'closed'} variants={headVariants} className="w-full flex p-2 justify-between sm:hidden">
        <p className="font-semibold text-xl">
          Albert<span className="text-red-500">.dev</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="24px"
          height="24px"
          className="hover:cursor-pointer"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
        </svg>
      </motion.div>
      <motion.div
        animate = {isOpen? "open" : "closed"}
        variants={matches? navVariants : undefined}
        transition={{type:'spring'}}
        className="mx-auto max-w-6xl p-2
        h-svh w-full  text-slate-700 absolute z-10 bg-red-100
        sm:relative sm:flex sm:justify-between sm:h-fit sm:items-end sm:mt-2"
      >
        <div>
          <div className="flex justify-between mt-0">
            <p className="font-semibold text-xl">
              Albert<span className="text-red-500">.dev</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
              className="hover:cursor-pointer sm:hidden"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
            </svg>
          </div>
        </div>
        <nav className="mt-8 sm:flex justify-between gap-[25%] sm:mt-0">
            <a href="#about" className="hover:text-red-500 block mb-4 sm:mb-0">About</a>
            <a href="#portfolio" className="hover:text-red-500 block mb-4 sm:mb-0">Portfolio</a>
            <a href="#contact" className="hover:text-red-500 block mb-4 sm:mb-0">Contact</a>
        </nav>
        <ul className="mt-8 [&>*]:mb-4 sm:flex justify-between gap-[25%] sm:mt-0  sm:align-center">
         
        </ul>

        <form>
          <input
            type="search"
            className="bg-red-50 p-2 rounded placeholder-slate-400 focus:ring-red-200 focus:shadow-red-200 focus:border-red-300 max"
            placeholder="Search"
          />
        </form>
      </motion.div>
    </div>
  );
}

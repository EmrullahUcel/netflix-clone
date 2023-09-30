import React, { useState } from "react";
import { motion } from "framer-motion";
import "/src/index.css";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const inputVariants = {
    initial: {
      opacity: 0,
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
    animate: {
      opacity: 1,

      x: -40,
      transition: {
        duration: 0.7,
      },
    },
  };
  const svgVariants = {
    initial: {
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
    animate: {
      x: -240,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <>
      <motion.input
        variants={inputVariants}
        initial="initial"
        animate={open ? "animate" : ""}
        placeholder="içerik,kişi,tür"
        className="bg-black relative w-[250px] py-1.5 mr-[-20px] border border-solid "
      />
      <motion.svg
        className="w-6 h-6 cursor-pointer absolute ml-52"
        variants={svgVariants}
        initial="hidden"
        animate={open ? "animate" : ""}
        onClick={() => setOpen(!open)}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17 10C17 13.866 13.866 17 10 17C6.13401 
          17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866
          3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635
            12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944,
            5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 
            18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 
            22.7071L15.6177 17.0319Z"
          fill="currentColor"
        ></path>
      </motion.svg>
    </>
  );
};

export default SearchBar;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsPlusCircle, BsFolderMinus } from "react-icons/bs";
import { accordionData } from "../data/accordionData";

import { Container } from "postcss";
const Accordion = () => {
  const [data, setData] = useState(accordionData);
  return (
    <div className="flex flex-col mx-auto rounded-lg w-full md:w-5/6 my-5">
      {data.map((item) => {
        return <AccordionItem key={item.id} {...item}></AccordionItem>;
      })}
    </div>
  );
};

export default Accordion;

function AccordionItem({ title, id, info }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleAccordion() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="accordionItem">
      <motion.div
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 1 }}
        onClick={handleAccordion}
        className="accordion-header bg-slate-200 text-gray-950 text-lg flex justify-between px-5 py-2"
      >
        <h1 className="accordion-title">{title}</h1>
        <button>{isOpen ? <BsFolderMinus /> : <BsPlusCircle />}</button>
      </motion.div>

      <motion.div
        animate={{
          height: isOpen ? "auto" : 0,
        }}
        className={`accordion-info overflow-hidden  px-5 text-gray-800  bg-slate-100`}
      >
        <p className="px-3 py-5">{info}</p>
      </motion.div>
    </div>
  );
}

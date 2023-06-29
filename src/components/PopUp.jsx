import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";
const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 1000);
  }, []);
  return (
    <>
      {isOpen && (
        <AnimatePresence>
          <div className="fixed  flex top-0 left-0 w-full h-full justify-center items-center bg-[rgba(0,0,0,0.5)] m-0">
            <a href="#">
              <motion.div
              
                className="max-w-lg max-h-lg relative"
              >
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="absolute top-3 right-3 text-white font-bold shadow-md"
                >
                  <ImCross></ImCross>
                </button>
                <motion.img
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{duration:1}}
                  src="/images/img (3).jpg"
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </a>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default PopUp;

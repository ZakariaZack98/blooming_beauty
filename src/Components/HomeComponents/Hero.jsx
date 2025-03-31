import React from "react";
import Navbar from "./Navbar";
import ButtonPrimary from "../CommponComponents/ButtonPrimary";
import { motion } from "framer-motion"; // Import Framer Motion
import { getRecordsData } from "../../lib/lib";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const recordsData = getRecordsData();

  // Animation variants
  const slideInFromLeft = {
    hidden: { x: "-50%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const slideInFromRight = {
    hidden: { x: "50%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div className="relative hero w-screen h-screen overflow-hidden z-0 text-white">
      <div className="gridOverlay translate-x-10 absolute h-full w-full top-0 left-0 pointer-events-none z-10 overflow-hidden flex justify-center items-end">
        <img src="/images/hero.png" alt="" className="image-with-shadow z-20 h-[70dvh] -translate-x-10" />
      </div>
      <Navbar />
      <div className="w-[85dvw] mx-auto">
        <div className="heroBody flex w-full justify-between">
          <div className="heroLeft w-1/2 h-[70dvh] flex flex-col justify-around">
            <motion.h1
              className="font-sanggar text-[140px] leading-29"
              initial="hidden"
              animate="visible"
              variants={slideInFromRight}
            >
              Bl<span className="text-heroGreen my-10">oo</span>m<span className="text-heroGreen">ing</span>
            </motion.h1>
            <p className="font-lato font-normal w-1/2 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, suscipit vel! Suscipit obcaecati veniam exercitationem cupiditate vel nobis consequuntur illo.
            </p>
            <ButtonPrimary label={"Shop Now"} />
            <div className="records flex my-10">
              {recordsData?.map((record, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col justify-center items-center px-5 ${
                    idx < recordsData.length - 1 ? "border-e-[1px] border-e-gray-500" : ""
                  }`}
                >
                  <h2 className="text-4xl font-sanggar">{record.numbers}+</h2>
                  <p className="font-lato text-sm">{record.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="heroRight w-1/2 h-[70dvh] flex flex-col justify-around items-end text-end">
            <div className="socials">
              <p className="font-lato my-2">Follow us</p>
              <div className="flex gap-x-3">
                {[FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                  <span key={idx} className="text-heroGreen text-xl hover:opacity-50 cursor-pointer">
                    <Icon />
                  </span>
                ))}
              </div>
            </div>
            <motion.h1
              className="font-sanggar text-[140px] text-start"
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft}
            >
              <span className="text-heroGreen">B</span>ea<span className="text-heroGreen">ut</span>y
            </motion.h1>
            <p className="font-lato font-normal w-1/2 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, suscipit vel! 
            </p>
            <ButtonPrimary label={"Contact with Us"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

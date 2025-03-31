import React from "react";
import { BsCart4 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="py-13 text-navGreen">
      <div className="w-[85dvw] mx-auto">
        <div className="flex justify-between">
          <span className="text-3xl">
            <HiMiniBars3BottomLeft />
          </span>
          <h3 className="font-sanggar text-3xl">blossom.</h3>
          <div className="icons flex gap-x-5">
            {
              [GoPerson, BsCart4, IoSearchOutline].map((Icon, idx) => (
                <span key={idx} className="text-2xl">
                  <Icon/>
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

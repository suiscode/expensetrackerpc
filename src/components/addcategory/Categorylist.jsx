import Image from "next/image";
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoIdCard } from "react-icons/io5";
import { FaIdCard } from "react-icons/fa";
import { PiLadderBold } from "react-icons/pi";
import { BsImage } from "react-icons/bs";
import { IoIosLeaf } from "react-icons/io";
import { FaBusSimple } from "react-icons/fa6";
import { IoMdMic } from "react-icons/io";
import { FaBaseballBall } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";

const categoryList = [
  {
    icon: GoHomeFill,
    alt: "house",
  },
  {
    icon: IoMdMic,
    alt: "house",
  },
  {
    icon: FaIdCard,
    alt: "house",
  },
  {
    icon: PiLadderBold,
    alt: "house",
  },
  {
    icon: BsImage,
    alt: "house",
  },
  {
    icon: IoIosLeaf,
    alt: "house",
  },
  {
    icon: FaBusSimple,
    alt: "house",
  },
  {
    icon: FaBaseballBall,
    alt: "house",
  },
  {
    icon: FaCar,
    alt: "house",
  },
  {
    icon: FaBabyCarriage,
    alt: "house",
  },
];
const colorList = [
  " rgba(1, 102, 255, 1)",
  "rgba(1, 179, 255, 1)",
  "rgba(65, 204, 0, 1)",
  "rgba(249, 209, 0, 1)",
  "rgba(255, 123, 1, 1)",
  "rgba(174, 1, 255, 1)",
  "rgba(255, 1, 1, 1)",
];

function Categorylist({ category, setCategory }) {
  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn flex flex-row bg-black m-1"
      >
        <Image src={category.img} alt="holder" width={40} height={40} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content overflow-hidden bg-white z-[1] menu p-2 shadow rounded-box w-[300px]"
      >
        {categoryList.map((item, index) => (
          <li
            className="hover:bg-slate-100"
            key={index}
            onClick={(e) =>
              setCategory((prev) => ({ ...prev, img: item.icon }))
            }
          >
            <item.icon size={60} color="black" />
          </li>
        ))}
          <ul className="flex gap-0">
          {colorList.map((item, index) => (
            <li className="w-7 h-7 rounded-full bg-black"></li>
          ))}
        </ul>
      </ul>
    
    </div>
  );
}

export default Categorylist;

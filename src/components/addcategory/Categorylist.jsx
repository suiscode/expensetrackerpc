import Image from "next/image";
import React from "react";

const categoryList = [
  {
    img: "/house.svg",
    alt: "house",
  },
  {
    img: "/bus.svg",
    alt: "bus",
  },
  {
    img: "/car.svg",
    alt: "car",
  },
  {
    img: "/dollar.svg",
    alt: "dollar",
  },
  {
    img: "/food.svg",
    alt: "food",
  },
  {
    img: "/game.svg",
    alt: "game",
  },
  {
    img: "/sport.svg",
    alt: "sport",
  },
  {
    img: "/selfimp.svg",
    alt: "selfimp",
  },
];

function Categorylist({category,setCategory}) {
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
        className="dropdown-content overflow-hidden bg-black z-[1] menu p-2 shadow rounded-box w-[300px]"
      >
        {categoryList.map((item) => (
          <li
          className="hover:bg-slate-800"
            key={item.alt}
            onClick={(e) => setCategory((prev) => ({ ...prev, img: item.img }))}
          >
            <Image src={item.img} alt={item.img} width={60} height={60} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorylist;

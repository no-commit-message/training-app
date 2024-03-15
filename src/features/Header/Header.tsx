"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { FaPhoenixFramework } from "react-icons/fa";
import { IoMdMenu, IoIosClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { GiNightSleep, GiMeal, GiMuscleUp } from "react-icons/gi";

type Props = {
  englishTitle: string;
  japaneseTitle: string;
};

const HeaderLink: FC<Props> = ({ englishTitle, japaneseTitle }) => (
  <Link
    href={`/${englishTitle.toLowerCase()}`}
    className="flex flex-col items-center cursor-pointer opacity-80 hover:opacity-100 duration-200"
  >
    <span className="text-xl font-bold">{englishTitle}</span>
    <span className="text-xs">{japaneseTitle}</span>
  </Link>
);

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-500 flex justify-between px-10 h-16 items-center md:px-6 bg-black text-white">
      <nav
        className={twMerge(
          "absolute z-10 top-0 -left-64 w-64 bg-zinc-900 h-screen duration-200",
          isOpen && "left-0"
        )}
      >
        <div className="flex justify-end w-full">
          <IoIosClose
            size={50}
            className="opacity-80 hover:opacity-100 duration-200 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="space-y-8 font-semibold text-xl mx-6 mt-2">
          <Link
            href="/sleep"
            className="flex items-center space-x-2 border-b border-gray-500 opacity-80 hover:opacity-100 duration-200 cursor-pointer"
          >
            <GiNightSleep size={25} />
            <p>Sleep</p>
          </Link>
          <Link
            href="/meal"
            className="flex items-center space-x-2 border-b border-gray-500 opacity-80 hover:opacity-100 duration-200 cursor-pointer"
          >
            <GiMeal size={25} />
            <p>Meal</p>
          </Link>
          <Link
            href="/training"
            className="flex items-center space-x-2 border-b border-gray-500 opacity-80 hover:opacity-100 duration-200 cursor-pointer"
          >
            <GiMuscleUp size={25} />
            <p>Training</p>
          </Link>
        </div>
      </nav>
      <Link
        href="/"
        className="flex items-center space-x-2 opacity-80 hover:opacity-100 cursor-pointer duration-200"
      >
        <FaPhoenixFramework size={35} />
        <span className="text-2xl font-bold">Training makes perfect</span>
      </Link>
      <div className="flex space-x-8 md:hidden">
        <HeaderLink englishTitle="Sleep" japaneseTitle="睡眠" />
        <HeaderLink englishTitle="Meal" japaneseTitle="食事" />
        <HeaderLink englishTitle="Training" japaneseTitle="トレーニング" />
      </div>
      <IoMdMenu
        className="hidden md:block opacity-80 hover:opacity-100 duration-200 cursor-pointer"
        size={30}
        onClick={() => setIsOpen(!isOpen)}
      />
    </header>
  );
};

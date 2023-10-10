"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { SiCodefactor } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgUserlane } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";

const topics = ["Renderer", "Simulation", "Fluid", "Smoke", "Water"];

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <header className="fixed w-full border-t-4 bg-white dark:bg-black border-indigo-600 dark:border-indigo-900 shadow z-50">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center hover:text-indigo-600 text-gray-800 dark:text-gray-50"
            >
              {/* <Image src="/logo.jpg" height={60} width={60} alt="logo" /> */}
              <Image
                className="rounded-full"
                src="/me-1.jpg"
                width={50}
                height={50}
                alt="logo"
                priority={false}
              />
            </Link>
            {/* posts categories */}
            <div className="dropdown inline-block relative mx-2">
              <a className="flex items-center hover:text-indigo-600 text-gray-800 dark:text-gray-50 mx-6 cursor-pointer">
                <span>
                  <SiCodefactor className="text-sm" />
                </span>
                <span className="mx-1 font-semibold text-base md:text-base">
                  Posts
                </span>
                <span>
                  <IoMdArrowDropdown className="text-xl" />
                </span>
              </a>
              {/* todo: Get topics */}
              <ul className="dropdown-menu hidden absolute text-gray-700 pt-1 bg-white dark:bg-black w-30 rounded-xl text-right ">
                {topics.map((topic) => {
                  return (
                    <Link href={`/topic/${topic}`} key={topic}>
                      <li className="cursor-pointer rounded-xlbg-white dark:bg-black text-gray-800 dark:text-gray-50 py-2 px-4 block whitespace-no-wrap">
                        {topic}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex items-center -mx-3">
            {/* About Me */}
            <Link
              href="/about"
              className="mx-2 lg:mx-4 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-50"
            >
              <span className="text-xl">
                <CgUserlane className="text-xl" />
              </span>
            </Link>
            {/* ThemeSwitch */}
            <button
              onClick={toggleTheme}
              className="mx-2 lg:mx-4 text-gray-800 hover:text-indigo-600 dark:text-gray-50"
            >
              <span className="text-lg">
                {isMounted && theme == "dark" ? (
                  <HiSun className="text-xl" />
                ) : (
                  <HiMoon className="text-xl" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function MainNav() {
  const [isChecked, setIsChecked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
  }, []);

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  const handleCollapseToggle = () => {
    setIsChecked(!isChecked);
  };

  const applyTheme = (isDarkMode) => {
    const body = document.body;
    const nav = document.querySelector("nav");
    const menuLinks = document.querySelectorAll("#navbar-default a");

    if (isDarkMode) {
      body.style.backgroundColor = "#111827";
      body.style.color = "#f9fafb";
      nav.style.backgroundColor = "#374151";
      nav.style.borderColor = "#4b5563";
      menuLinks.forEach((link) => {
        link.style.color = "#f9fafb";
      });
    } else {
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#1f2937";
      nav.style.backgroundColor = "#ffffff";
      nav.style.borderColor = "#d1d5db";
      menuLinks.forEach((link) => {
        link.style.color = "#1f2937";
      });
    }
  };

  return (
    <nav className="bg-white border-gray-200  h-[146px] flex items-center justify-center">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isChecked ? "true" : "false"}
          onClick={handleCollapseToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${
            isChecked ? "block" : "hidden"
          } mx-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 gap-[10px] mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700">
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={handleToggle}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900  ">
                  {darkMode ? "Dark" : "Light"} Mode
                </span>
              </label>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  "
              >
                العربيه
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                الاتصال بنا
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  "
              >
                الفيديوهات
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  "
              >
                معرض الصور
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                المقالات
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                العروض
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  "
              >
                عنا
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-[4px] px-[16px] rounded-xl bg-gray-400 text-[16px] font-[400] text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700   "
              >
                الصفحه الرئيسيه
              </a>
            </li>
          </ul>
        </div>

        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse mr-[50px]"
        >
          <Image
            src="/Assets/Logo.svg"
            width={32}
            height={32}
            alt="Flowbite Logo"
          />
        </a>
      </div>
    </nav>
  );
}

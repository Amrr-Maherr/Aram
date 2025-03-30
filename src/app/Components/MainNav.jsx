"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

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
    const select = document.querySelector("select");
    const homeButton = document.querySelector(".home-button");

    if (isDarkMode) {
      body.style.backgroundColor = "#121212";
      body.style.color = "#FAFAFA";
      nav.style.backgroundColor = "#1E1E1E";
      nav.style.borderColor = "#333333";
      if (select) {
        select.style.backgroundColor = "#2c2c2c";
        select.style.color = "#FAFAFA";
      }
      menuLinks.forEach((link) => {
        link.style.color = "#FAFAFA";
      });
      if (homeButton) {
        homeButton.style.backgroundColor = "#333333";
        homeButton.style.color = "#FAFAFA";
      }
    } else {
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#212121";
      nav.style.backgroundColor = "#ffffff";
      nav.style.borderColor = "#eeeeee";
      if (select) {
        select.style.backgroundColor = "#ffffff";
        select.style.color = "#212121";
      }
      menuLinks.forEach((link) => {
        link.style.color = "#212121";
      });
      if (homeButton) {
        homeButton.style.backgroundColor = "#DBDFD0";
        homeButton.style.color = "#212121";
      }
    }
  };

  return (
    <nav className="bg-white border-gray-200 flex items-center justify-center shadow-md transition-all duration-300">
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
          <ul className="font-medium flex flex-col p-4 md:p-0 gap-[10px] mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <button
                onClick={handleToggle}
                className="focus:outline-none transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={darkMode ? faSun : faMoon}
                  className="text-gray-600 dark:text-gray-300 text-xl"
                />
              </button>
            </li>
            <li>
              <select
                name=""
                id=""
                className="p-1 focus:outline-none text-[16px] font-[400] rounded transition-all duration-300 hover:scale-105"
              >
                <option value="">العربيه</option>
                <option value="">English</option>
              </select>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 transition-colors duration-300 hover:text-blue-500"
              >
                الاتصال بنا
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  transition-colors duration-300 hover:text-blue-500"
              >
                الفيديوهات
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  transition-colors duration-300 hover:text-blue-500"
              >
                معرض الصور
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 transition-colors duration-300 hover:text-blue-500"
              >
                المقالات
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 transition-colors duration-300 hover:text-blue-500"
              >
                العروض
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[16px] font-[400] text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  transition-colors duration-300 hover:text-blue-500"
              >
                عنا
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-[4px] px-[16px] rounded-xl home-button text-[16px] font-[400] text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700   transition-colors duration-300 hover:scale-105"
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
            width={68}
            height={80}
            alt="Flowbite Logo"
          />
        </a>
      </div>
    </nav>
  );
}

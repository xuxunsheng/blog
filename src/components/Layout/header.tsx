import React from "react";

const lightIcon = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    stroke="currentColor"
  >
    <title>sun</title>

    <path
      fill="currentColor"
      d="M16 9c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7c0-3.859-3.141-7-7-7zM16 21c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5zM16 7c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM16 25c-0.552 0-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1zM23.777 9.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM8.223 22.365l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0l1.414-1.414c0.391-0.392 0.391-1.023 0-1.414s-1.023-0.392-1.414 0zM7 16c0-0.552-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1zM28 15h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1zM8.221 9.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM23.779 22.363c-0.392-0.391-1.023-0.391-1.414 0s-0.392 1.023 0 1.414l1.414 1.414c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414z"
    ></path>
  </svg>
);

const darkIcon = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    stroke="currentColor"
  >
    <title>moon</title>
    <path
      fill="currentColor"
      d="M15.505 16.496c-1.97-1.971-2.499-4.819-1.626-7.284-0.953 0.337-1.854 0.865-2.616 1.626-2.734 2.734-2.734 7.167 0 9.9 2.733 2.733 7.164 2.735 9.898 0 0.764-0.762 1.29-1.663 1.626-2.616-2.463 0.872-5.312 0.344-7.283-1.626z"
    ></path>
  </svg>
);

declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme: (theme: string) => void;
  }
}

export default function Header() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-between px-4">
      <div>BLOG</div>
      <div className="">
        <div className="block dark:hidden">
          <button
            type="button"
            aria-label="Use Dark Mode"
            onClick={() => {
              window.__setPreferredTheme("dark");
            }}
            className="items-center h-full pr-2"
          >
            {darkIcon}
          </button>
        </div>
        <div className="hidden dark:block">
          <button
            type="button"
            aria-label="Use Light Mode"
            onClick={() => {
              window.__setPreferredTheme("light");
            }}
            className="items-center h-full pr-2"
          >
            {lightIcon}
          </button>
        </div>
      </div>
    </div>
  );
}

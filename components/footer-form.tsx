import React from "react";

export default function FooterForm() {
  return (
      <footer className="flex items-center justify-center p-4 bg-amber-300 shadow-xl">
        <div className="absolute -z-5 bg-linear-to-b from-gray-200 from-70% w-full h-300 -mt-400"></div>
      <div className="absolute -z-10 -mt-120  bg-[url('/bg-metrocat.png')] bg-cover bg-center w-full min-h-screen "></div>
        <p className="text-gray-900 dark:text-gray-800 text-sm">
          © {new Date().getFullYear()} Metro Cat Form. All rights reserved.
        </p>
      </footer>
  );
}

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row items-center justify-between">
      <div className="text-xl font-bold text-blue-700">ALX Listing</div>
      <nav className="flex gap-6 my-2 md:my-0">
        <Link href="/">
          <span className="hover:underline cursor-pointer">Home</span>
        </Link>
        <Link href="/booking">
          <span className="hover:underline cursor-pointer">Booking</span>
        </Link>
      </nav>
      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-4 py-2 w-full md:w-1/3 my-2 md:my-0"
      />
      <div className="flex gap-4">
        <button className="text-blue-600 hover:underline">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

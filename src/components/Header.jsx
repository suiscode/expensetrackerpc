"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const params = usePathname();
  console.log(params);
  return (
    <div className="w-screen bg-white flex justify-center">
      <div className="w-[1440px] flex justify-between px-[120px] py-4 items-center">
        <div className="flex gap-4 items-center text-sm p-2">
          <Image src="/Vector.png" alt="logo" width={27} height={27} />
          <Link
            href="/dashboard"
            className={`${params == "/dashboard" && "font-semibold"}`}
          >
            Dashboard
          </Link>
          <Link
            href="/records"
            className={`${params == "/records" && "font-semibold"}`}
          >
            Records
          </Link>
        </div>
        <div className="flex gap-4">
          <button className="btn rounded-3xl btn-primary text-white flex items-start">
            <span className="text-4xl font-extralight">+</span>
            <h1 className="self-center">Record</h1>
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

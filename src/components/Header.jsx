"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AddRecord from "./addrecords/AddRecord";
import { useGlobalContext } from "@/app/context/Context";
import axios from "axios";

function Header() {
  const router = useRouter();
  const { setRecordState, recordState, user, setUser } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const params = usePathname();
  const logOut = async () => {
    const response = await axios.post("/api/signout");
    router.push("/signin");
  };
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("/api/getuser");
      setUser(response.data.user);
      setLoading(false);
    };
    fetchUser();
  }, []);

  return (
    <div className="w-screen relative bg-white flex justify-center">
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
          <h1>{user.name}</h1>
        </div>
        <div className="flex gap-4">
          <button
            className="btn rounded-3xl btn-primary text-white flex items-start"
            onClick={() => setRecordState(true)}
          >
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
                <Link href="/profile" className="justify-between">
                  Profile
                </Link>
              </li>

              <li>
                <a onClick={logOut}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {recordState && (
        <div className="w-screen flex justify-center items-center h-screen absolute bg-black bg-opacity-40">
          <AddRecord setRecordState={setRecordState} />
        </div>
      )}
    </div>
  );
}

export default Header;

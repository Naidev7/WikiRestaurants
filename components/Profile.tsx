"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

function dashboard() {
  const { data: session } = useSession();
  const [menu, setMenu] = useState(false);

  const handleMenu = ()=>{
    setMenu(!menu)
  }

  return (
    <section className="bg-white p-8 flex flex-col gap-y-[40px] text-slate-700 rounded-xl w-[15%] cursor-pointer mt-8 ml-4">
      <small onClick={handleMenu} className="flex space-x-5">
      <FaRegUserCircle  className="text-md mt-1 cursor-pointer font-medium" />
      <h1
        
        className="font-semibold capitalize text-md text-nowrap "
      >
        {session?.user?.name}
      </h1>
      </small>

      {menu && (
        <>
          <h3 className="capitalize text-md font-medium">My Restaurants</h3>
          <h3 className="capitalize text-md font-medium">Favorites</h3>
          <button
            className="bg-red-500 p-2 rounded-xl cursor-pointer w-[40px] hover:scale-75 "
            onClick={(e) => signOut()}
          >
            <CiLogout className="text-white/80 font-semibold cursor-pointer" />
          </button>
        </>
      )}
    </section>
  );
}

export default dashboard;

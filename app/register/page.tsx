'use client';
import Link from "next/link";
import { useState } from "react";



function page() {
  const [ userData, setUserData ] = useState({})

  const handleInputs = (evt: React.ChangeEvent<HTMLInputElement>) =>{
    const id = evt.target.id;
    const value = evt.target.value;
    setUserData({...userData, [id]: value})
  }

  return (
    <section className="bg-slate-400 flex flex-col items-center  gap-y-[20px] w-[70%] p-8 rounded-[20px]">
      <h1 className="font-bold text-white text-4xl">Register</h1>

      <form className="flex flex-col gap-y-10 p-4">
        <input id="name" onChange={handleInputs} className="p-3 rounded-[8px] border-none" type="text" placeholder="Karol Brown"/>
        <input id="email" onChange={handleInputs} className="p-3 rounded-[8px] border-none" type="text" placeholder="karolB@gmail.com"/>
        <input id="password" onChange={handleInputs} className="p-3 rounded-[8px] border-none" type="password" placeholder="Password"/>
        <input className="bg-orange-400 rounded-[15px] w-[80px] h-[40px] m-auto text-white font-semibold hover:scale-90 cursor-pointer " type="button" value="Register" />
      </form>
       
      <article>
        <Link href="/login">
            <h4 className="cursor-pointer text-white/80 hover:scale-75">Already Have Account</h4>
        </Link>
      </article>

    </section>
  )
}

export default page
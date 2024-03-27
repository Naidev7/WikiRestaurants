"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { IoArrowBackCircleSharp } from "react-icons/io5";


function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necesary.");
      return;
    }
    
    try {

      const resUserExist = await fetch('/api/userExist', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      })

      const { userData } = await resUserExist.json();
      if(userData){
        setError('User already exist, please login');
        return;
      }


      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        setName('');
        setEmail('');
        setPassword(''); 
        router.push("/login")

      } else {
        console.log("Error during registration.");
      }
    } catch (error) {
      console.error("error during registration : ", error);
    }
  };



  return (
    <div>
      <a href="/">
    <IoArrowBackCircleSharp className="mb-9 text-4xl cursor-pointer hover:scale-75" />
    </a>
    <div className="flex">
    <section className="bg-white/90 shadow-2xl flex flex-col items-center  gap-y-[20px] w-full p-9 rounded-[20px]">
      <h1 className="font-bold text-slate-700 text-6xl">Register</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-10 p-4">
        <input
          id="name"
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded-[8px] border-none text-slate-700"
          type="text"
          placeholder="Name"
          required
          value={name}
        />
        <input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-[8px] border-none  text-slate-700"
          type="text"
          placeholder="Email"
          required
          value={email}
        />
        <input
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-[8px] border-none  text-slate-700"
          title="Must be at least 8 characters"
          pattern="[a-zA-Z0-9],{8,}"
          type="password"
          placeholder="Password"
          required
          value={password}
        />
        <p className="text-slate-500 text-xs text-center">Must be at least 8 characters</p>
        <input
          onClick={handleSubmit}
          className="bg-orange-400 rounded-[15px] w-[40%] h-[40px] m-auto text-white font-bold  hover:scale-90 cursor-pointer "
          type="submit"
          value="Register"
        />
      </form>

      {error && (
        <div className="text-red-500 w-fit text-sm py-1 px-3 rounded-[15px]">
          {error}
        </div>
      )}

      <article>
        <Link href="/login">
          <h4 className="cursor-pointer text-slate-600 hover:scale-75">
            Already Have an Account
          </h4>
        </Link>
      </article>
    </section>
    <section>
      <Image className="rounded-lg shadow-xl" src="/hero-reg.jpg" alt="RegisterPhoto" width={700} height={200}/>
    </section>
    </div>
    </div>
  );
}

export default Page;

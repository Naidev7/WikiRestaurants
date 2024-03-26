"use client";
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";


function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necesary.");
      return;
    }
    
    try {

      const resUserExist = await fetch('/Api/userExist', {
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
        setError('User already exist');
        return;
      }


      const res = await fetch("/Api/register", {
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
        console.log('tengo que redirecionar boluda')
     /*    redirect("/login"); */

      } else {
        console.log("Error during registration.");
      }
    } catch (error) {
      console.error("error during registration : ", error);
    }
  };

  return (
    <section className="bg-slate-400 shadow-xl border-t-4 border-orange-400 flex flex-col items-center  gap-y-[20px] w-full p-8 rounded-[20px]">
      <h1 className="font-bold text-white text-4xl">Register</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-10 p-4">
        <input
          id="name"
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded-[8px] border-none"
          type="text"
          placeholder="Karol Brown"
        />
        <input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-[8px] border-none"
          type="text"
          placeholder="karolB@gmail.com"
        />
        <input
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-[8px] border-none"
          type="password"
          placeholder="Password"
        />
        <input
          onClick={handleSubmit}
          className="bg-orange-400 rounded-[15px] w-[40%] h-[40px] m-auto text-white font-bold  hover:scale-90 cursor-pointer "
          type="button"
          value="Register"
        />
      </form>

      {error && (
        <div className="text-red-500 bg-white/80 w-fit text-sm py-1 px-3 rounded-[15px]">
          {error}
        </div>
      )}

      <article>
        <Link href="/login">
          <h4 className="cursor-pointer text-white/80 hover:scale-75">
            Already Have an Account
          </h4>
        </Link>
      </article>
    </section>
  );
}

export default Page;

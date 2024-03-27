"use client";
import Link from "next/link";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSumbit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!email || !password) {
      setError("All fields are necesary");
      return;
    };

    try {
      
      const resUserExist = await fetch('/Api/userExist', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      });

      const userData = await resUserExist.json();
      if( userData ) return setError('Account not found, please register');

      
     

    } catch (error) {
      console.log('error during login: ', error)
    }
  };

  return (
    <section className="bg-slate-400 shadow-xl border-t-4 border-orange-400 flex flex-col items-center  gap-y-[20px] w-full p-8 rounded-[20px]">
      <h1 className="font-bold text-white text-4xl">Login</h1>
      <form onSubmit={handleSumbit} className="flex flex-col gap-y-10 p-4">
        <input
          onInput={(e) => setEmail(e.target.value)}
          className="p-3 rounded-[8px] border-none"
          type="email"
          placeholder="karolB@gmail.com"
          required
          autoComplete="off"
        />
        <input
          onInput={(e) => setPassword(e.target.value)}
          className="p-3 rounded-[8px] border-none"
          type="password"
          placeholder="password"
          required
          autoComplete="off"
        />
        <input
          onClick={handleSumbit}
          className="bg-orange-400 rounded-[15px] w-[80px] h-[40px] m-auto text-white font-semibold hover:scale-90 cursor-pointer "
          type="submit"
          value="Login"
        />
      </form>

      {error && (
        <div className="text-red-500 bg-white/80 w-fit text-sm py-1 px-3 rounded-[15px]">
          {error}
        </div>
      )}

      <article>
        <Link href="/register">
          <h4 className="cursor-pointer text-white/80 hover:scale-75">
            Create Account
          </h4>
        </Link>
      </article>
    </section>
  );
}

export default Login;

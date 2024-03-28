"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


import Image from "next/image";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSumbit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!email || !password) {
      setError("All fields are necesary");
      return;
    }
    try {
      const resSignIn = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log('se ha creado token? ', resSignIn)

      if (resSignIn?.error) {
        setError("Invalid credentials.");
        console.log('No se ha creado token, algun dato es malo: ', resSignIn.error)
        return;
      }
      
      router.replace("dashboard");

    } catch (error) {
      console.log("error during login: ", error);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen w-screen ">
      <div className="flex p-6">
        <section className="bg-white/90 shadow-2xl flex flex-col items-center gap-y-[50px] w-full p-9 rounded-[20px]">
          <h1 className="font-bold text-slate-700 text-6xl mt-5">Login</h1>
          <form onSubmit={handleSumbit} className="flex flex-col gap-y-10 p-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-[8px] border-none"
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-[8px] border-none"
              type="password"
              placeholder="password"
              required
              autoComplete="off"
            />
            <input
              className="bg-orange-400 rounded-[15px] w-[80px] h-[40px] m-auto text-white font-semibold hover:scale-90 cursor-pointer "
              type="submit"
              value="Login"
            />
          </form>

          {error && (
            <div className="text-red-500 w-fit text-sm py-1 px-3 rounded-[15px]">
              {error}
            </div>
          )}

          <article>
            <Link href="/register">
              <h4 className="cursor-pointer text-slate-600 hover:scale-75">
                Create Account
              </h4>
            </Link>
          </article>
        </section>
        <section>
          <Image
            className="rounded-lg shadow-xl"
            src="/hero-reg.jpg"
            alt="RegisterPhoto"
            width={700}
            height={200}
          />
        </section>
      </div>
    </div>
  );
}

export default Login;

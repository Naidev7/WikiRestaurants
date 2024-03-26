import Link from "next/link"


function page() {
  return (
    <section className="bg-slate-400 flex flex-col items-center  gap-y-[20px] w-[70%] p-8 rounded-[20px]">
        <h1 className="font-bold text-white text-4xl">Login</h1>
        <form className="flex flex-col gap-y-10 p-4">
            <input className="p-3 rounded-[8px] border-none" type="text" placeholder="karolB@gmail.com" />
            <input className="p-3 rounded-[8px] border-none" type="password" placeholder="Password" />
            <input className="bg-orange-400 rounded-[15px] w-[80px] h-[40px] m-auto text-white font-semibold hover:scale-90 cursor-pointer " type="button" value="Login" />
        </form>
        <article>
            <Link href="/register">
                <h4 className="cursor-pointer text-white/80 hover:scale-75">Create Account</h4>
            </Link>
        </article>
    </section>
  )
}

export default page
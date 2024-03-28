import Image from "next/image";
import Link from "next/link";
import Login from "@/components/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

async function page() {
  const session = await getServerSession(authOptions);
  
  if(session) redirect("/dashboard");

  return (
    <main className="flex flex-col ">
      <Login/>
    </main>
  );
}

export default page;

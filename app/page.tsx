import Image from "next/image";
import Link from "next/link";
/* import Landing from "@/components/Landing"; */
import Login from "@/components/Login";

function page() {
  return (
    <main className="flex flex-col ">
      <Login/>
    {/*   <Landing /> */}
    </main>
  );
}

export default page;

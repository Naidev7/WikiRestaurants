'use client'
import { signOut } from "next-auth/react";

function dashboard() {

  return (
    <section className="flex flex-col justify-start ">
    <h1>Profile</h1>
    <h3>Hey, John</h3>
    <button onClick={(e) => signOut()}>Log out</button>
  </section>
  )
}

export default dashboard
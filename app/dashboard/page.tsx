import Profile from "@/components/Profile"
import RestList from "@/components/RestList"

function page() {
  return (
    <section className="flex">
      <Profile/>
      <RestList/>
    </section>
  )
}

export default page
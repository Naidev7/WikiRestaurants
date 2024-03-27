import Image from "next/image";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";



function Slider() {
 
  return (
    <section className='flex gap-x-8 p-9 rounded-xl w-full  shadow-xl mb-5'>
      <SlArrowLeft className="slideIcon text-white text-xl mt-[50px] cursor-pointer " />

    <div>
     <a href="/register">
    <Image className='cursor-pointer hover:scale-90' src="/landing-1.jpg" alt="hero-landing" width={150} height={50}/>
    </a>
    </div>

    <div>
    <a href="/register">
    <Image className='cursor-pointer hover:scale-90' src="/landing-2.jpg" alt="hero-landing" width={150} height={50}/>
    </a>
    </div>
    <div>
    <a href="/register">
    <Image className='cursor-pointer hover:scale-90' src="/landing-3.jpg" alt="hero-landing" width={150} height={50}/>
    </a>
    </div>
    <div>
    <a href="/register">
    <Image className='cursor-pointer hover:scale-90' src="/landing-4.jpg" alt="hero-landing" width={150} height={50}/>
    </a>
    </div>
    <div>
    <a href="/register">
    <Image className='cursor-pointer hover:scale-90' src="/landing-1.jpg" alt="hero-landing" width={150} height={50}/>
    </a>
    </div>
    <div>
    <a href="/register">
    <Image className='cursor-pointer hover:scale-90' src="/landing-3.jpg" alt="hero-landing" width={150} height={50}/>
    </a>
    </div>

    <SlArrowRight className="slideIcon text-white text-xl mt-[50px] cursor-pointer "  />

   </section>
  )
}

export default Slider
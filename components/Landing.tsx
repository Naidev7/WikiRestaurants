import Image from 'next/image';
import Link from 'next/link';
import Slider from './Slider';

function page() {
  return (
    <div className="flex flex-col ">
     <section className='mt-8 mb-[100px] text-center flex flex-col gap-y-9'>
      <h1 className=' text-6xl font-bold text-white/90'>Your Culinary Adventure Begins Here</h1>
      <h3 className='text-white/80 font-semibold text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere</h3>
      <Link href="/register" className='bg-orange-500 w-[90px] p-4 m-auto rounded-xl text-white font-semibold border-none hover:scale-75 cursor-pointer '>
        Start
      </Link>
     </section>

     <Slider/>
      
      </div>
  )
}

export default page
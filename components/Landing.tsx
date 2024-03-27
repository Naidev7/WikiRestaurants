import Image from 'next/image';
import Link from 'next/link';

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

     <section className='flex gap-x-8 bg-white/80 p-9 rounded-xl w-full border-2 shadow-xl mb-5'>
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
     </section>
      
      </div>
  )
}

export default page
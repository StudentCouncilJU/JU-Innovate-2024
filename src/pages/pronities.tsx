import React from 'react'

import Image from 'next/image';

const images = [
    {
        image: 'https://i.postimg.cc/NFd7CRh5/revealing-soon.png'
    },
    {
        image: 'https://i.postimg.cc/NFd7CRh5/revealing-soon.png'
    },
    {

        image: 'https://i.postimg.cc/NFd7CRh5/revealing-soon.png'
    }
]
const Pronities = () => {
    return (
        <section >
                <div className="bg-black bg-dot-white/[0.2] z-50">
                <div className="pointer-events-none inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       
            <div className="   md:px-12 xl:px-6">
                <div className="relative pt-36 ">
              
                 
         

                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="team2 text-white font-bold text-4xl md:text-6xl xl:text-7xl">Stars At Rhythm'24</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 p-5">
                    <div className=' p-3  transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto max-w-full " src="https://i.postimg.cc/pTpjFYZ8/djholyc.png" height={100} width={100} alt="" />
                        <h4 className=" p-1 text-center team2 text-white font-bold text-4xl md:text-4xl xl:text-4xl">21 FEBRUARY</h4>
                    </div>
                    <div className=' p-3  transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto  max-w-full " src="https://i.postimg.cc/Vvtb7f2k/indeep.png" height={100} width={100} alt="" />
                        <h4 className="p-1 text-center team2 text-white font-bold text-4xl md:text-4xl xl:text-4xl">22 FEBRUARY</h4>
                    </div>
                    <div className=' pt-1  transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                     <Image className="h-auto  max-w-full " src="https://i.postimg.cc/ZK3rHHhx/king.png" height={300} width={300} alt="" />
                    <h4 className="p-1 text-center team2 text-white font-bold text-4xl md:text-4xl xl:text-4xl">23 FEBRUARY</h4>
                    </div>
                    <div className=' p-3 transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto  max-w-full " src="https://i.postimg.cc/jjqPsrnM/trapperx.png" height={100} width={100} alt="" />
                        <h4 className=" text-center p-1 team2 text-white font-bold text-4xl md:text-4xl xl:text-4xl">22 FEBRUARY</h4>
                    </div>
                    <div className=' p-3 transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto  max-w-full " src="https://i.postimg.cc/HLTjQ4pn/socialmedia.png" height={100} width={100} alt="" />
                        <h4 className=" text-center p-1 team2 text-white font-bold text-4xl md:text-4xl xl:text-4xl">22 FEBRUARY</h4>
                    </div>
                    </div>
                </div>
            </div>
        </section>
 
    )
}

export default Pronities



{/*
<section className='p-10 md:p-20 bg-black bg-dot-white/[0.2] z-50'>
        <div className="pointer-events-none inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="md:px-12 xl:px-6">
          <div className="relative pt-12">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="team2 text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Glimpses Of JU Rhythm</h1>
            </div>
          </div>
        </div>
        <div className="grid-wrapper mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((item, index) => (
            <div key={index} className={item.className}>
              <Image src={item.image} alt="" height={100} width={100} />
            </div>
          ))}
        </div>
      </section>*/}



{/* <div className="bg-black bg-dot-white/[0.2] z-50">
<div className="pointer-events-none inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

<div className='flex flex-col text-center justify-center p-10 md:p-16'>
  <div className="mb-12">
    <h1 className="team2 leading-3 text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl" style={{ fontFamily: "CustomFont", letterSpacing: "5px" }}>Events</h1>
  </div>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-evenly'>
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
        <a href='/technical'>
          <Image src='https://i.postimg.cc/dVhb3xHN/Technical.png' className="p-1 rounded-[22px] transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100} />
        </a>
      </BackgroundGradient>
    </div>
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
        <a href='/cultural'>
          <Image src='https://i.postimg.cc/h4rW5xQs/Cultural.png' className="p-1 rounded-[22px] transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Cultural Poster' width={400} height={100} />
        </a>
      </BackgroundGradient>
    </div>
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
        <a href='/sports'>
          <Image src='https://i.postimg.cc/CLxTT1jg/Sports.png' className="p-1 rounded-[22px] transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Sports Poster' width={400} height={100} />
        </a>
      </BackgroundGradient>
    </div>
  </div>
</div>
</div> */}
  
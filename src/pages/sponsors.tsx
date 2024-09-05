import React from 'react'

import Image from 'next/image'
import NavMenu from '@/components/NavMenu'
import { useRouter } from 'next/router'
import NewNavBar from '@/components/NavBar'
// const eventSponsors = [
//     // {
//     //     image: 'https://i.postimg.cc/KY5z3DFS/hushjammer.png'
//     // },
//     // {

//     //     image: 'https://i.postimg.cc/W3W1Xph5/ashokasundari.png'
//     // },
//     // {
//     //     image: 'https://i.postimg.cc/0jz23gSP/colourbar.png' 
//     // },
//     // {
//     //     image: 'https://i.postimg.cc/50NtBQNH/liberty.png'
//     // },
//     // {
//     //     image: 'https://i.postimg.cc/Vkn5mcVN/ramas.png'
//     // },
//     // {
//     //     image: 'https://i.postimg.cc/m2ctp93C/thebodyshop.png'
//     // },
   
    
  

  
// ]

  
const handleEventsClick = () => {
    // Handle the events click
    console.log('Events clicked');
};

const handleAboutClick = () => {
    // Handle the about click
    console.log('About clicked');
};
const sponsors = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
           <NewNavBar onEventsClick={handleEventsClick} onAboutClick={handleAboutClick} />
            <div className='bg-black pb-10'>
                <div className="md:px-12 xl:px-6 "> <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className=" text-white text-12xl md:text-8xl xl:text-7xl" style={{fontFamily:"Shuri", letterSpacing:"5px"}}>Collaborators</h1> 
                    </div>
                </div>
                </div>
                <div className="mx-auto  px-2 py-2 lg:px-10 lg:pt-12 ">
                    <div className="container justify-center lg:max-w-[1300px]">
                        <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                            {/* {eventSponsors.map((sponsor) => (
                                <div className=' p-3 justify-center flex rounded-3xl m-4'>
                                    <div>
                                        <Image className="h-auto max-w-full  rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer" width={300} height={300} src={sponsor.image} alt="" />
                                       
                                    </div>
                                </div>
                            ))} */}
                          
                        </div>
                        <h1 className='text-white text-7xl text-center my-auto'>Coming Soon</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sponsors
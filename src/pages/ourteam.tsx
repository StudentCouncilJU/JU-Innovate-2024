import React from 'react'

import Image from 'next/image'

import { useRouter } from 'next/router';
import NewNavBar from '@/components/NavBar';
import { BackgroundGradient } from "@/components/ui/background-gradient";


const teamDetails = [
    {
        name: 'Arpit Sharma',
        image: 'https://i.postimg.cc/W1zVD8WH/RAKSHITA-PARIHAR.png',
        year: "Technical Secretary",
       

    },
    {
        name: 'Dhruv Tomar',
        image: 'https://i.postimg.cc/MZYJdNgL/NANDINI-SHARMA.png',
         year: "Software Head",
       

    },
    {
        name: 'Keshav Khandelwal',
        image: 'https://i.postimg.cc/x8ffxGvg/ARPIT-SHARMA.png',
         year: "Software Head",
       
    },
    {
        name: 'Devansh Verma',
        image: 'https://i.postimg.cc/brhVQYzv/ASHMIT-SINGH.png',
         year: "Esports Head",

      

    },
    {
        name: 'Mukund Verma',
        image: 'https://i.postimg.cc/TYHqx2ZW/DAKSH-NAGAR.png',
       year: "Esports Head",

       
    },
    {
        name: 'Garvit Raj Bhati',
        image: 'https://i.postimg.cc/vHRxtgFh/DHRUV-SINGH.png',
         year: "Hardware Head",
       

    },
    {
        name: 'Amit Jain',
        image: 'https://i.postimg.cc/rwB1dnyV/AWEZ-KHAN.png',
       year: "Hardware Head",

      

    },
    {
        name: 'Logistics Head',
        image: 'https://i.postimg.cc/gkB57Wsg/SAJAL-GOYAL.png',
       year: "Madhusudhan Srivastava",

       

    },
    {
        name: 'Nandini Sharma',
        image:'https://i.postimg.cc/PqBdnDMF/NAVIN-JAIN.png',
       year: "Logistics Head",

       

    },
    {
        name: 'Dhruvi Vaid',
        image: 'https://i.postimg.cc/qMYbLGBY/SHRISHTI-MISHRA.png',
       year: "PR & Collaboration",

      

    },
    {
        name: 'Isha Soni',
        image: 'https://i.postimg.cc/J0YTSNNs/SAKSHAM-TAMBI.png',
       year: "PR & Collaboration",

      

    },
    {
        name: 'Daksh Nagar',
        image: 'https://i.postimg.cc/FsHDmLqp/SOHAN-BENIWAL.png',
       year: "Media Head",

        
    },
    {
        name: 'Saksham Saraogi',
        image: 'https://i.postimg.cc/52KxpTQJ/RAJSHEKAR-SINGH.png',
       year: "Graphics Head",

    
    },
  
    {
        name: 'Piyush Bhagchandani',
        image: 'https://i.postimg.cc/DzQXS7Y6/ADITYA-JAIN.png',
       year: "Graphics Head",


    },

   
    {
        name: 'Priyanshi Bhardwaj',
        image: 'https://i.postimg.cc/Hx491wgp/ISHA-SONI.png',
       year: "Operations Head",

        

    },
  
    {
        name: 'Pradyuman Srivastava',
        image: 'https://i.postimg.cc/LsZMDXMk/SAJAL-BATWARA.png',
       year: "Operations Head",

      

    },


]

  
const handleEventsClick = () => {
    // Handle the events click
    console.log('Events clicked');
};

const handleAboutClick = () => {
    // Handle the about click
    console.log('About clicked');
};
const Ourteam = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
            <NewNavBar onEventsClick={handleEventsClick} onAboutClick={handleAboutClick}/>
            <div className="flex justify-center bg-black  z-50 ">
                <div className=" md:px-12 xl:px-0">          
                <div className="relative pt-36 bg-black">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="text-white text-4xl md:text-6xl xl:text-8xl" style={{fontFamily:"Shuri", letterSpacing:"5px"}}>Our Team</h1>

                    </div>
                </div>
                    <div className="grid md:grid-cols-3 gap-6 sm:grid-cols-1 m-10 ">
                        {teamDetails.map((item) => (
                            <div className="w-[400px] px-6 py-6  text-center bg--200 rounded-lg lg:mt-0 xl:px-10">
                                <div className="space-y-4 xl:space-y-6 ">
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
                                    <Image className="mx-auto rounded-[22px]  h-50 w-50 transition-transform duration-300 transform hover:scale-105 cursor-pointer" src={item.image} alt="author avatar" width={400} height={100}/>
                                    </BackgroundGradient>
                                    <div className="space-y-2">
                                        <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium " style={{fontFamily:"Shuri"}}>
                                            <h1 className="text-white text-2xl">{item.name}</h1>
                                             <p className='text-white '>{item.year}</p> 
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>


    )
}

export default Ourteam
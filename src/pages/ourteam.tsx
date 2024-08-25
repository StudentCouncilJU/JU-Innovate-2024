import React from 'react'

import Image from 'next/image'

import { useRouter } from 'next/router';
import NewNavBar from '@/components/NavBar';


const teamDetails = [
    {
        name: '',
        image: 'https://i.postimg.cc/W1zVD8WH/RAKSHITA-PARIHAR.png',
        year: "",
       

    },
    {
        name: '',
        image: 'https://i.postimg.cc/MZYJdNgL/NANDINI-SHARMA.png',
         year: "",
       

    },
    {
        name: '',
        image: 'https://i.postimg.cc/x8ffxGvg/ARPIT-SHARMA.png',
         year: "",
       
    },
    {
        name: '',
        image: 'https://i.postimg.cc/brhVQYzv/ASHMIT-SINGH.png',
         year: "",

      

    },
    {
        name: '',
        image: 'https://i.postimg.cc/TYHqx2ZW/DAKSH-NAGAR.png',
       year: "",

       
    },
    {
        name: '',
        image: 'https://i.postimg.cc/vHRxtgFh/DHRUV-SINGH.png',
         year: "",
       

    },

  
    {
        name: '',
        image: 'https://i.postimg.cc/rwB1dnyV/AWEZ-KHAN.png',
       year: "",

      

    },
    {
        name: '',
        image: 'https://i.postimg.cc/qMYbLGBY/SHRISHTI-MISHRA.png',
       year: "",

      

    },
    {
        name: '',
        image: 'https://i.postimg.cc/J0YTSNNs/SAKSHAM-TAMBI.png',
       year: "",

      

    },
    {
        name: '',
        image: 'https://i.postimg.cc/FsHDmLqp/SOHAN-BENIWAL.png',
       year: "",

        
    },
    {
        name: '',
        image: 'https://i.postimg.cc/52KxpTQJ/RAJSHEKAR-SINGH.png',
       year: "",

    
    },
  
    {
        name: '',
        image: 'https://i.postimg.cc/DzQXS7Y6/ADITYA-JAIN.png',
       year: "",


    },

   
    {
        name: '',
        image: 'https://i.postimg.cc/Hx491wgp/ISHA-SONI.png',
       year: "",

        

    },
  
    {
        name: '',
        image: 'https://i.postimg.cc/LsZMDXMk/SAJAL-BATWARA.png',
       year: "",

      

    },

    {
        name: '',
        image: 'https://i.postimg.cc/gkB57Wsg/SAJAL-GOYAL.png',
       year: "",

       

    },
    {
        name: '',
        image:'https://i.postimg.cc/PqBdnDMF/NAVIN-JAIN.png',
       year: "",

       

    },
    {
        name: '',
        image: 'https://i.postimg.cc/8z6ynrjC/SAKSHI-SRIVASTAVA.png',
       year: "",

       
    },
    {
        name: '',
        image:'https://i.postimg.cc/mgz3gfsp/CHAITANYA-MEHTA.png' ,
       year: "",

       
    },
    
    {
        name: '',
        image:'https://i.postimg.cc/y6D02PNJ/Dhruv-Tomar.png' ,
       year: "",

       
    },
    {
        name: '',
        image:'https://i.postimg.cc/MGHkTPZ1/Dhruvi-Vaid1.png' ,
       year: "",

       
    },

   
    {
        name: '',
        image:'https://i.postimg.cc/W4XYCr3f/Charvi-Agarwal.png' ,
       year: "",

       
    },
    {
        name: '',
        image:'https://i.postimg.cc/XY6PC4mx/Devansh-Verma.png' ,
       year: "",

       
    },
   
    {
        name: '',
        image:'https://i.postimg.cc/qRFbMT2s/Akshat-Pratap-Singh.png' ,
       year: "",

       
    },
    {
        name: '',
        image:'https://i.postimg.cc/L5ZyJbVr/Nihar-Patel.png' ,
       year: "",

       
    },
    
   

  
    
  

]
const Ourteam = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
            <NewNavBar/>
            <div className="flex justify-center">
                <div className=" md:px-12 xl:px-6">          
                <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="team2 text-[#FCEE09] font-bold text-4xl md:text-6xl xl:text-8xl">Our Team</h1>

                    </div>
                </div>
                    <div className="grid md:grid-cols-4 gap-6 sm:grid-cols-1 m-10   pt-10">
                        {teamDetails.map((item) => (
                            <div className="w-[400px] px-6 py-6  text-center bg--200 rounded-lg lg:mt-0 xl:px-10">
                                <div className="space-y-4 xl:space-y-6 ">
                                    <Image className="mx-auto  h-50 w-50 transition-transform duration-300 transform hover:scale-105 cursor-pointer" src={item.image} alt="author avatar" width={400} height={100}/>
                                    <div className="space-y-2">
                                        <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium ">
                                            <h1 className="text-white font-extrabold">{item.name}</h1>
                                             <p className='text-white font-bold'>{item.year}</p> 
                                            
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
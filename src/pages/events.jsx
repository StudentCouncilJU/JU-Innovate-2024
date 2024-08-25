import React from 'react'
import Image from 'next/image';
import NewNavBar from '@/components/NavBar';

const Events =()=>{
    return (
        <>
        <NewNavBar/>
        <div className='flex flex-col text-center justify-center'>
                    <div className="">
                        <h1 className="team2 mb-24 mt-24 text-white font-bold text-8xl md:text-6xl xl:text-8xl">Events</h1>
                    </div>
                       
                    <div className=' grid  md:flex justify-evenly pb-48'>
                                {/*Seperate cards for each Event Domain */} 
                                   
                               <div>
                                <a href='/technical'>
                                <Image src='https://i.postimg.cc/dVhb3xHN/Technical.png' className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </div>

                                <div>
                                <a href='/cultural'>
                                <Image src='https://i.postimg.cc/h4rW5xQs/Cultural.png' className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </div>

                                <div>
                                <a href='/Media'>
                                <Image src='https://i.postimg.cc/jd3VsbXJ/Media.png' className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </div>

                                <div>
                                <a href='/sports'>
                                <Image src='https://i.postimg.cc/CLxTT1jg/Sports.png' className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </div>
                                
    
                            </div>
                </div> 
     
                </> 
    )
}

export default Events


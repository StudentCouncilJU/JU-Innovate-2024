import React,{useState} from 'react'

import EventDetailsModal from '../components/EventDetailsModal'
import Image from 'next/image';
export default function EventsCard(props) {

    const [showModal,setShowModal]=useState(false)
  return (
    <>
    <div>
        <div className='flex flex-col  rounded-xl'>
            <div>
            <Image className="p-2" src={props.image} alt={props.alias} width={400} height={400}/>
            <p className='team2 text-3xl'>{props.title}</p>
            </div>
            <div className='flex gap-6 p-4 text-center justify-center'>
            <button className='team2 text-xl border-2 px-2 rounded-3xl '>
                <a href='https://rzp.io/l/upZWfSMfW'>
                    Register Now
                </a>                        
                </button>
            <button onClick={()=>{setShowModal(true)}} className='team2 text-xl border-2 px-2 rounded-3xl border-white'>
                    Event Details
            </button>
            {showModal && 
            <EventDetailsModal 
            name={props.title} 
            date={props.date}
            time={props.time}
            venue={props.venue}
            about={props.about}
            details={props.details}
            rules={props.rules}
            coordinator1={props.coordinator1}
            coordinator2={props.coordinator2}
            onClose={()=>setShowModal(false)}/>}   
            </div>
        </div>
        </div>
    </>
  )
}

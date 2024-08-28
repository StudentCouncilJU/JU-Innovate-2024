import React, { useState } from 'react';
import { CalendarCheck2, Clock8, MapPin, Phone } from 'lucide-react';
import { BackgroundGradient } from "@/components/ui/background-gradient";

function EventDetails(props) {
  const [activeTab, setActiveTab] = useState('ABOUT');

  const renderContent = () => {
    switch (activeTab) {
      case 'ABOUT':
        return (
          <div className='text-left h-[200px] py-2'>
            <h1 className='text-2xl team2'>About Event:</h1>
            <p>{props.about}</p>
          </div>
        );
      case 'RULES':
        return (
          <div className='text-left h-[200px] py-2'>
            <h1 className='team2 text-2xl'>RULES:</h1>
            {props.rules.map((rule, index) => (
              <p key={index}>{index + 1}. {rule}</p>
            ))}
          </div>
        );
      case 'CONTACT':
        return (
          <div className='text-left h-[200px] py-2'>
            <h1 className='team2 text-2xl'>Contact:</h1>
            <div className='flex flex-col py-2'>
              <h2 className='text-xl'>Event Coordinators:</h2>
              <div className='flex gap-16'>
                <div className='flex gap-2'><Phone color='white' /> <p className='text-lg'>{props.coordinator1}</p></div>
                <div className='flex gap-2'><Phone color='white' /> <p className='text-lg'>{props.coordinator2}</p></div>
              </div>
            </div>
          </div>
        );
      case 'DETAILS':
        return (
          <div className='text-left h-[200px] py-2'>
            <h1 className='team2 text-2xl'>Event Details:</h1>
            <div className='py-2'>
              <div className='flex gap-2'>
                <CalendarCheck2 /><p className='text-lg font-bold text-yellow-100'>DATE: {props.date}</p>
              </div>
              <div className='flex gap-2'>
                <Clock8 /><p className='text-lg font-bold text-yellow-100'>TIME: {props.time}</p>
              </div>
              <div className='flex gap-2'>
                <MapPin /><p className='text-lg font-bold text-yellow-100'>VENUE: {props.venue}</p>
              </div>
              <div className='flex gap-2'>
                <MapPin /><p className='text-lg font-bold text-yellow-100'>Prize: {props.Prize}</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    
    <div className='bg-[black] lg:w-[900px] w-[600px] p-3 text-white rounded-[50px] mt-10 lg:ml-10 sm:ml-20'>
      <BackgroundGradient className="rounded-[22px] p-2 sm:p-1 bg-white bg-zinc-900">
      <div className='flex w-full justify-between pb-2  '>
        <h1 className='team2 text-4xl'>{props.name}</h1>
      </div>
      <div className='text-left text-sm'>
        <p>{props.details}</p>
      </div>
      <hr />
      <div className='flex space-x-4 py-2'>
        <button 
          className={`px-4 py-2 ${activeTab === 'ABOUT' ? 'bg-purple-800' : 'bg-purple-600'}`}
          onClick={() => setActiveTab('ABOUT')}
        >
          ABOUT
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'RULES' ? 'bg-purple-800' : 'bg-purple-600'}`}
          onClick={() => setActiveTab('RULES')}
        >
          RULES
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'CONTACT' ? 'bg-purple-800' : 'bg-purple-600'}`}
          onClick={() => setActiveTab('CONTACT')}
        >
          CONTACT
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'DETAILS' ? 'bg-purple-800' : 'bg-purple-600'}`}
          onClick={() => setActiveTab('DETAILS')}
        >
          DETAILS
        </button>
        {/* Add more buttons here for other tabs if needed */}
      </div>
      <hr />
      <div className='max-h-64 overflow-y-auto'> {/* Adjust the height as needed */}
        {renderContent()}
      </div>
      </BackgroundGradient>
    </div>
    
  );
}

export default EventDetails;

{/* <div className="group">
<div className="flex justify-center items-center gap-2">
  <Navbar.Link href="" className="text-white text-2xl">
    Events  
  </Navbar.Link>
  <ChevronDown className="text-white" />
</div>
  <div className="invisible dropdown-content absolute px-4 backdrop-blur-sm min-w-200px md:group-hover:visible md:hover:visible">
    <div className="flex gap-1">
      <ul>
        <li>
          <Navbar.Link href="/sports" className="text-white text-xl">
            Sports
          </Navbar.Link>
        </li>
        <li>
          <Navbar.Link href="/cultural" className="text-white text-xl">
            Cultural
          </Navbar.Link>
        </li>
        <li>
          <Navbar.Link href="/technical" className="text-white text-xl">
            Technical
          </Navbar.Link>
        </li>
      </ul>
    </div>
  </div>
</div> */}

import EventCardSports from '../components/EventCardSports'
import React from 'react'
import EventCard from '../components/EventCard.jsx'
import NewNavBar from '../components/NavBar.jsx'
export default function Technical() {

  const events = [
    {
      "name": "",
      
  
      "alias": "Paintball",
      "image": 'https://i.postimg.cc/L644yF2Q/paintball.png',
      "aboutEvent": "Aim.....shoot.....conquer. Paintball is a challenging team sport that includes strategy, shooting, eliminating, and of course unlimited fun. In this game, generally two (or more) different teams gather in a specially designated area and wage a war against each other.",
      "eventDetail": [
        "Maximum 5 members || 2000/team"
      ],
      "rules": [
        
         "NO BLIND FIRING. No discharging paintball markers outside the designated shooting areas.",
        "No shooting at people not wearing protective equipment. No wiping off paint hits while still  on the field.",
        " No carrying or moving the bunkers or field parts. No knives or other weapons allowed.",
         "No drinks or foods to be carried within playing areas. No foul language should be used.",
        " Once eliminated, raise your gun and arm over your head and move quickly toward the exit.",
        " Put on a Barrel Sleeve prior to exiting the field. If you call  you are out. If you are in doubt, call Paint Check first.",
        " Referees' calls are final. Do not shoot the referees.",
         "All players MUST be wearing Goggles and Face Masks prior to entering playing areas.",
      ],
     
      "coordinators":{"name":'Kanishk Kumawat: 7014525176',"name2":'Raghav Sharma: 8824489129'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Roadies",
      "image": 'https://i.postimg.cc/Cx11KT2n/roadies.png',
      "aboutEvent":" Brain, strength and abilities all come in a single arena. Let your opponent get nervous just by your  moves. Players will participate in various tasks that challenge their physical, social and mental  strength. Participate to experience thrill and fun.",
     
     
      "eventDetail": ["Members: 2 team players ||900/team"],
      "rules": [
        "Each team consists of 2 players .",
        " Each team will compete on a hard track which will consist of different tasks.",
        " It is mandatory to complete all tasks in order to be selected for next round.",
        " Points will be awarded on the basis of timings of tasks completed and faults done by the team.",
        "There would be penalty for every foul made.",
        "Any misbehaviour would lead to disqualification",
        " Proper decorum is mandatory.",
          "Judges decision will be final.",
      ],
     
      "coordinators":{"name":'Suhasini Shaktawat: 9929361100',"name2":'Dushyant Singh: 7357769662'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "TableTennis",
      "image": 'https://i.postimg.cc/mDx2Vcg7/tabletennis.png',
    
      "aboutEvent": "Table tennis is a sport in which two or four players hit a lightweight ball, also known as the ping-pong ball, back and forth across a table using small solid rackets. The game takes place on a hard table divided by a net.",
      "eventDetail": [
        "450/player||Members: 1player"
      ],
      "rules": [
        "Games are played to 11 points.",
      "Players serve two serves each, alternating. A player does not have to win specifically off their own serve in order to win a point.",
      "If a game ties at 10-10, a player must win by 2 points. In this situation, players serve one serve each, alternating.",
    "You must throw the ball up straight, from a flat palm, at least 6inches (16cm).",
    "Your toss and service contact must be behind the table surface (not over).",
    "If the ball hits the net during service, it is a let, the point is replayed.",
    "There is no limit or point deductions for let serves.",
    "Proper decorum is mandatory and judges decision is final."
      ],
      "coordinators":{"name":'Shivesh Patidar: 7426966255',"name2":'Raj Trivedi: 9587260753'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
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

  return (
    <>
      
      <div className=" bg-dot-white/[0.2] z-50 lg:w-full md:w-[1500px]" style={{backgroundColor:"black"}}>
      <div className="pointer-events-none inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       <NewNavBar onEventsClick={handleEventsClick} onAboutClick={handleAboutClick} />
      <div className='flex flex-col text-center justify-center gap-10 mt-6'>
        <div className='text-white subtle-glowing-text text-6xl'>
          <p className='m-2' style={{fontFamily:"Customfont", letterSpacing:"5px"}}>SPORTS</p>
        </div>
        <div className='flex flex-col mx-16 md:grid gap-10'>
          {events.map((element, index) => (
            <EventCardSports
              key={index}
              title={element.alias}
              image={element.image}
              date={element.schedule.day}
              time={element.schedule.time}
              venue={element.schedule.venue}
              about={element.aboutEvent}
              details={element.eventDetail}
              rules={element.rules}
              coordinator1={element.coordinators.name}
              coordinator2={element.coordinators.name2}
            />
          ))}
        </div>
      </div>   </div> 
    </>
  )
}

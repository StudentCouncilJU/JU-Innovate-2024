import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import NextLink from 'next/link';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';
import footer from'./Footer'
import logo from '../images/team/jecrc.png'

import { useRouter } from 'next/router';

export const navItems = [
  {
    href: '/',
    text: 'Home',
  },
  
  {
    href: '/events',
    text: 'Event',
  },
  {
    href: '/gallery',
    text: 'Gallery',
  },
  {
    href: '/ourteam',
    text: 'Our Team',
  },
  {
    href: '/sponsors',
    text: 'Sponsors',
  },
  {
    href:'/footer',
    text: 'Contact Us',

  }
 
];

const NavMenu = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [userPaid, setUserPaid] = useState(false)
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(true);
  };


  let user: any;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      user = JSON.parse(localStorage.getItem('user') as string)
      if (user) {
        setEmail(user.email)
      }
    }
    if (user?.paymentStatus === 'PAID') {
      setUserPaid(true);
    }

  }, [])

  return (
    <div className=' text-[#FCEE09]'>
      <div
        className='  flex items-end justify-end  max-w-12xl lg:max-w-[72rem] xl:max-w-6xl px-4 py-6 mx-auto sm:px-6
       '
      >
        
        <div className='flex justify-start lg:w-0  transition whitespace-nowrap hover:transition duration-300 text-4xl font-bold cursor-pointer  '>
          <span className='sr-only'>LOGO</span>
          {/* <NextLink href={} passHref>
            <span className=' opacity-100 hover:text-lightGreen dark:hover:text-lightGreen '>
            
            </span>         
          </NextLink> */}
        </div> 
        <div className='-my-2 -mr-2 lg:hidden' onClick={() => handleClick()}>
          <MobileMenu />
        </div>
        <nav className='hidden space-x-6 text-3xl  justify-around  lg:flex '>
          {navItems.map(({ href, text }, index) => (
            <NavItem href={href} text={text} />
          ))}
          </nav>
        
    </div>
    </div>
    
  );
};

export default NavMenu; 

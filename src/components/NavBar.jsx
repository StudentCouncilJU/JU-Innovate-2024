'use client';
import { ChevronDown } from 'lucide-react';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import { useEffect, useState } from "react";

function NewNavBar({ onEventsClick, onTrailerClick, onAboutClick }) { // Added onAboutClick
  const [isMounted, setIsMounted] = useState(false); // to fix hydration error
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      if (position > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>   
      <Navbar
        fluid
        rounded
        className={`sticky top-0 z-50 transition-colors duration-1000 ${
          isScrolled ? 'bg-gray-800 bg-opacity-90' : 'bg-transparent'
        }`}
      >
        <Navbar.Brand href="">
          <Image
            src="/test4.png"
            width={150}
            height={150}
            alt="JECRC LOGO"
            className="ml-16"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="ml-96">
          <Navbar.Link href="/" className="text-white text-2xl">
            Home
          </Navbar.Link>

          <div className="group">
            <div className=" items-center gap-2">
              <Navbar.Link
                href="#"
                className="text-white text-2xl"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  onEventsClick();    // Trigger custom scroll behavior
                }}
              >
                Events
              </Navbar.Link>
          
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
          </div>

          <Navbar.Link
            href="#"
            className="text-white text-2xl"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              onAboutClick();   // Trigger custom scroll behavior to "JU Rhythm" section
            }}
          >
            About
          </Navbar.Link>

          <Navbar.Link
            href="/gallery"
            className="text-white text-2xl"
          >
            Gallery
          </Navbar.Link>
          <Navbar.Link href="/ourteam" className="text-white text-2xl">
            Our Team
          </Navbar.Link>
          <Navbar.Link href="/sponsors" className="text-white text-2xl">
            Sponsors
          </Navbar.Link>
          <Navbar.Link href="/contactus" className="text-white text-2xl">
            Contact Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NewNavBar;

import Image from 'next/image';






const Header = () => {
    return (
        <>
            <header>
                <div className="relative inset-x-0 overflow-hidden">
                    <video autoPlay muted loop
                        className='absolute inset-0 w-full h-full object-cover'
                        style={{ position: 'fixed', width: '100%', height: '142vh', objectFit: 'cover', zIndex: -3, opacity: .9 }}>
                        <source src="goku web.mp4" width={400} height={100} type="video/mp4" /> 
                       
                    </video>
                </div>


                <div className="flex items-center justify-center">
                    <div className="relative w-[500px] max-w-screen-md md:mt-0 sm:mt-10">
                        <div className="relative h-0 pb-[80%] md:pb-[65%] mt-[100px] md:mt-12 ">
                            <Image src="/test3.png" alt="logo" className=" -mt-10 absolute inset-0 w-full object-contain" width={100} height={100}/>  
                        </div>
                       
                    </div>
                </div> 
            </header>


        </>
    );
};

export default Header;






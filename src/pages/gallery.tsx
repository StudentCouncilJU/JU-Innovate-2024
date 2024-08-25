import React, { useEffect, useState } from 'react'



import Image from 'next/image'
import { useRouter } from 'next/router'

import NewNavBar from '@/components/NavBar';
const images = [
    {
        image: 'https://i.postimg.cc/3NYncKdb/image3.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/rFgY7tGG/image2.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/NMTznJbL/image4.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/j2bFYHkc/image5.jpg',
        className: 'tall'
    },
    {
        image:'https://i.postimg.cc/rpyyM478/image6.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/PfCxCmJJ/image7.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/vBSJRxwS/image8.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/wT9GWkNT/image9.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/BbLdJZqZ/image10.jpg',
        className: 'tall',
    },
    {
        image: 'https://i.postimg.cc/Sswg76hq/image11.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/8P7YvCgT/image12.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/Qxgf1KnG/image13.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/rFgY7tGG/image2.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/8cjr5MvQ/image14.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/KvTdVYqJ/image15.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/C1K7VvFw/image16.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/66mjBN2g/image17.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/pdW4pJ26/image18.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/3JMn6FDD/image19.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/Cx77Ryrj/image20.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/zf3C3ygr/image21.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/GpSjjFCt/image22.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/gJPCGbx3/image23.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/yx2XzsdH/image24.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/fbYP2q8y/image25.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/nzzvjC9x/image26.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/xCwcfCKt/image27.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/9XLnn7Yd/image28.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/PqLXCHfc/image29.jpg',
        className: 'small'   
    },

    {
        image: 'https://i.postimg.cc/tTtLTv6w/image30.jpg',
        className: 'small'   
    },
]

const Gallery = () => {
    const router = useRouter();
    let showNav = router.query.showNav;
    const [isShowNav, setIsShowNav] = useState(showNav === 'true');

    useEffect(() => {
        const handlePopstate = () => {
            setIsShowNav(false);
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);
    return (
        <>
        <NewNavBar/>
            <section className='p-10 md:p-20'>
                <div className="   md:px-12 xl:px-6">         
                 <div className="relative pt-12 ">
                    <div className="lg:w-2/3 md:text-center  mx-auto">
                        <h1 className=" team2 text-white font-bold text-4xl md:text-6xl xl:text-7xl ">Glimpses Of JU Rhythm</h1>

                    </div>
                </div>
                </div>
                <div className="grid-wrapper  mt-10" >
                    {images.map((item) => (
                        <div className={item.className}>
                            <Image src={item.image} alt="" height={100} width={100} />
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default Gallery
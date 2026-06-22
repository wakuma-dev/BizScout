import { useState, useEffect } from 'react';
import Navbar from "../navbar/Navbar";
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
export default function MainLayout(){
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
   useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll);
        return ()=> {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);
    return(
    <>
     <Navbar isScrolled={isScrolled} />
     <main className='pt-20'>
        <Outlet />
     </main>
     <Footer />
    </>
    )
}
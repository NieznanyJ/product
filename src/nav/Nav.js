import { useState, useEffect } from "react";

const Nav = ({ className }) => {

    const [navOpen, setNavOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 720);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 720);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleNav = (e) => {
       
        setNavOpen(!navOpen);

    }

    useEffect(() =>{
        const navContainer = document.querySelector('.nav-container');
        

        if (!navOpen) {
            const lightbox = document.querySelector('.lightbox');
            navContainer.style.left = "-100%";
            navContainer.style.transition = "all .3s ease-out"         
            
        }
        else {
            const lightbox = document.querySelector('.lightbox');
            lightbox.style.background = "#000"
            lightbox.style.transition = "background .3s ease"
            lightbox.style.zIndex = '-1';
            lightbox.style.zIndex = '90';
            navContainer.style.left = "0";
        }

    }, [navOpen]);

    return (
        <nav className="navigation">
            
            {navOpen && !isLargeScreen &&
                <div className="lightbox" onClick={handleNav}></div>
            }            
            {!navOpen &&
                <svg className="menu-icon menu-icon-open" onClick={handleNav} width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" /></svg>}
            {navOpen && 
                <svg className="menu-icon menu-icon-close" onClick={handleNav} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" /></svg>
            }

            <div className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item"><a className="nav-link" href="">collections</a></li>
                    <li className="nav-item"><a className="nav-link" href="">men</a></li>
                    <li className="nav-item"><a className="nav-link" href="">women</a></li>
                    <li className="nav-item"><a className="nav-link" href="">about</a></li>
                    <li className="nav-item"><a className="nav-link" href="">contact</a></li>
                </ul>
            </div>

        </nav>
    );
}

export default Nav;
import React, { useState } from 'react'
import "./Navbar.css"
import coders from "../../assets/images/coders_club.jpeg"
import MenuIcon from '@mui/icons-material/Menu';
import { MdCancel} from 'react-icons/md';
import { LoginOutlined } from '@mui/icons-material';


function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='app_navbar'>
            <div className="app_navbar-logo">
                <img src={coders} alt="Coders" />
                <h1 className='nav_heading'>Coder's </h1>
                <h1 className='nav_heading'>Club</h1>
            </div>
            <ul className='app_navbar-links'>
                <li className='p_opensans'><a href="/">Home</a></li>
                <li className='p_opensans'><a href="/events">Events</a></li>
                <li className='p_opensans'><a href="/team">Team</a></li>
                <li className='p_opensans'><a href="/contact">Contact</a></li>
                <li className='p_opensans'><a href="/membership">Membership</a></li>
            </ul>
            <div className="app_navbar-login">
              <a href="#login" className='login'><LoginOutlined/>Login</a>
            </div>



            {/* small Screen */}
            <div className="app_navbar-smallscreen">
                <MenuIcon color='#fff' fontSize='27' onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                    <div className="app_navbar-smallscreen_overlay flex_centre slide-bottom" >
                        <MdCancel fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
                        <ul className='app_navbar-smallscreen-links'>
                            <li className='p_opensans'><a href="/">Home</a></li>
                            <li className='p_opensans'><a href="/events">Events</a></li>
                            <li className='p_opensans'><a href="/team">Team</a></li>
                            <li className='p_opensans'><a href="/contact">Contact</a></li>
                            <li className='p_opensans'><a href="/membership">Membership</a></li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
            <span className='sidebarTitle'>About Me</span>
            <img className='sidebarImg' 
            src="https://i.ibb.co/56sPfRw/Untitled-design.png"
            alt=""
            />
             <p className='descrip'>Hey, this is my homepage, so I have to say something about myself. 
                Sometimes it is hard to introduce yourself because you know yourself 
                so well that you do not know where to start with. Let me give a try 
                to see what kind of image youhave about me through my self-description.
                I hope that my impression about myself and your impression about me are
                 not so different. Here it goes.</p>
            </div>
            <div className='sidebarItem'>
            <span className='sidebarTitle'>Catagories:</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                  <Link className='link' to="/posts?cat=life"> 
                    Life</Link>  
                    </li>
                    
                <li className='sidebarListItem'>
                <Link className='link' to="/posts?cat=music"> 
                    Music
                    </Link>
                    </li>
                <li className='sidebarListItem'>
                <Link className='link' to="/posts?cat=style"> 
                    Style
                    </Link></li>
                <li className='sidebarListItem'>
                <Link className='link' to="/posts?cat=sport">
                    Sport
                    </Link>
                </li>
                <li className='sidebarListItem'>
                <Link className='link' to="/posts?cat=tech"> 
                    Tech
                    </Link>
                    </li>
                <li className='sidebarListItem'>
                <Link className='link' to="/posts?cat=cinema"> 
                    Cinema
                    </Link>
                    </li>
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>Follow Us</span>
            <div className='sidebarSocial'>
            <i className="sidebarIcon topIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon topIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon topIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon topIcon fab fa-instagram-square"></i>
         </div>
        </div>
        </div>
    );
};

export default Sidebar;

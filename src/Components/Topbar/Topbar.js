import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';


const Topbar = () => {
    const user = false
    return (
        <div className='top'>
            <div className='topLeft'>
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
              <ul className='topList'>
              <li className='topListItems'><Link className="link" to="/">Home</Link></li>
              <li className='topListItems'><Link className="link"  to="/about">About</Link></li>
              <li className='topListItems'><Link className="link"  to="/contact">Contact</Link></li>
              <li className='topListItems'><Link className="link"  to="/write">Write</Link></li>
              <li className='topListItems'>
                  {user && "LogOut"}
              </li>
            </ul>
            </div>
            <div className='topRight'>
                {
                    user ? (
                <img className='topImg' 
                src='https://images.unsplash.com/photo-1583813611092-d9158078a457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGluJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"  
                ' alt=''
                />
                    ):(
                        <ul className='topList'>
                            <li className='topListItems'>
                        <Link className="link"  to="/login">
                            Login
                            </Link>
                            </li>
                      <li className='topListItems'>
                          <Link className="link"  to="/register">
                              Register
                              </Link> 
                              </li>
                        </ul>
                    )
                }
                <i class="topSearchIcon fas fa-search"></i>
            </div>
         </div>
    );
};

export default Topbar;
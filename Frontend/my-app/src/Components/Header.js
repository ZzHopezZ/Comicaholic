import React from "react";
import { FaSearch, FaHistory } from 'react-icons/fa';
import './css/Header.css'
import logo from '../Images/logo.png';
import avatar from '../Images/image.png'

function Header()
{
    return (
        <header className = "headercomic">
            <div className="comicinfo">
                <nav> 
                    <ul>
                        <li>
                            <div className="logo">
                                <img src={logo} alt="Logo"></img>
                            </div>
                        </li>
                        <li>Home</li>
                        <li>Novel</li>
                        <li>Comics</li>
                    </ul>
                    

                </nav>
            </div>
            <div className="userinfo">
                <ul>
                    <li><FaSearch/></li>
                    <li><FaHistory/></li>
                    <li><img src={avatar} alt="imguser"></img></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
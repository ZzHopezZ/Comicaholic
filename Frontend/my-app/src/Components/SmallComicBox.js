import React from 'react'
import { FaHeart } from "react-icons/fa6";
import '../Components/css/SmallComicBox.css'
import thumbnail from '../Images/thumbnail.jpg'
const SmallComicBox =(image, title, count, author, content) =>
{
    
    return (
        <div className="thumbnailContainer">
            <a className= "infoContainer"  href="">
                <div className="thumbnailTitle">
                    <div>Morgana and Oz</div>
                    <div><FaHeart  color="red"/> 7.9M</div>
                    <div>Miyuli</div>
                </div>
                <img className="thumbnailImage" src={thumbnail}/>
                <div className="hoverContent">
                    <div></div>
                    <div>parggggggggggggggfgowopworpwpf wfpodpfsddddddddddddddd ddddddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddd...</div>
                </div>
            </a>
        </div>
    )
}

export default SmallComicBox;
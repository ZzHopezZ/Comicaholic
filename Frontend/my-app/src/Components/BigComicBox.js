import React from 'react'
import { FaHeart } from "react-icons/fa6";
import '../Components/css/BigComicBox.css'
import thumbnail from '../Images/BigBanner.jpg'
const BigComicBox =(image, title, count, author, content) =>
{
    return (
        <div className="thumbnailContainerBigComic">
            <div className="thumbnailTitleBigComic">
                <div>Morgana and Oz</div>
                <div><FaHeart  color="red"/> 7.9M</div>
                <div>Miyuli</div>
            </div>
            <img className="thumbnailImageBigComic" src={thumbnail}/>
            <div className="hoverContentBigComic">
                <div></div>
                <div>parggggggggggggggfgowopworpwpf wfpodpfsddddddddddddddd ddddddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddd...</div>
            </div>
        </div>
    )
}

export default BigComicBox;
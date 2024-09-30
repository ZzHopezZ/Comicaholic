import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import './css/InfoSmallComicBox.css'

const InfoSmallComicBox = () => {
    return (
        <div className= "infoContainer" style ={{display: "flex", flexDirection: "column", backgroundColor: "purple", 
            width: "210px", height: "210px", padding: "15px", boxSizing: "border-box",  color: "white"}}>
            <a className="infoDirect" href="">
                <div style={{display:"flex", alignItems: "center", fontSize: "20px", fontWeight: "bold",}}>Supernatural<IoIosArrowForward style={{marginTop: "3px", marginLeft: "40px", fontSize: "20px"}} /></div >
                <div style= {{marginTop: "95px", textAlign:"left", fontsize: "15px"}}>
                Witches, werewolves and cryptids. Oh my!
                </div>
            </a>
        </div>
    )
}

export default InfoSmallComicBox;


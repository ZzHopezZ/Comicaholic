import React from 'react';
import thumbnail from '../Images/thumbnail.jpg'
import './css/ComicBoxList.css'
const ListComicBox = () => {
    return (
        <div>
            <div className="gridListBoxContainer">
                <img className="imgListBox" src={thumbnail}></img>
                <div style={{fontSize:"20px", fontWeight: "bold" , width:"20px", textAlign: "center",display: 'flex', alignItems:"center", justifyContent: "center"}}>1</div>
                <div className='gridListContent' style={{display:"flex", flexDirection: "column", justifyContent: "center"}}>
                    <div style= {{fontSize :"10px", color: "gray"}}>Romance</div>
                    <div style={{fontWeight: "bold"}}>In Between</div>
                    <div style={{fontSize: "14px"}}>HBCUL8ER</div>
                </div>
            </div>
        </div>
    )
}

export default ListComicBox;

import React, {useState, useRef, useEffect} from 'react'
import bg from '../Images/bg.png'
import './css/SlideNewBox.css'
import SmallBox from './SmallComicBox'
import BigBox from './BigComicBox'
import demo from '../Images/demo.png'
import mainImg2 from '../Images/9Big_Banner_PC_Flag.png'
import mainImgRight from '../Images/mainImgRight.png'
import mainImgRight2 from '../Images/5SmallBanner_B_us.png'

const SlideBox = () =>{
    const [currentIndex, setCurrentIndex] = useState('first');
    const goToSlide= (position)=>{
        setCurrentIndex(position);
        console.log('da chay');
    }
    return (
        <div className="example">
            <div className="slideContainer">
                < div className={`firstSlide ${'first' === currentIndex ? "active" : ""}`}>
                    <SmallBox ></SmallBox>
                    <SmallBox></SmallBox>
                    <SmallBox ></SmallBox>
                    <BigBox ></BigBox>
                </div>
                <div className={`secondSlide ${'second' === currentIndex ? "active" : ""}`}>
                    <SmallBox></SmallBox>
                    <BigBox></BigBox>
                    <SmallBox></SmallBox>
                    <SmallBox></SmallBox>
                    
                </div>
            </div>
            <div className="newdots">
                <span onClick={()=> goToSlide('first')} className={`newdot ${'first' === currentIndex ? "active" : ""}`}></span>
                <span onClick={()=> goToSlide('second')} className={`newdot ${'second' === currentIndex ? "active" : ""}`}></span>
            </div>
        </div>
            
    )
}

export default SlideBox;
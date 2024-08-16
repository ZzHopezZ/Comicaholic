import React, {useState, useRef} from 'react'
import bg from '../Images/bg.png'
import './css/SlideHome.css'
import mainImg from '../Images/image copy.png'
import mainImg2 from '../Images/9Big_Banner_PC_Flag.png'
import mainImgRight from '../Images/mainImgRight.png'
import mainImgRight2 from '../Images/5SmallBanner_B_us.png'

function SlideHome ()
{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [newIndex, setNewIndex] = useState(0);
    const ImgDemo = [mainImg2,mainImg2,mainImg2,mainImg2,mainImg2,mainImg2,mainImg2,mainImg2];
    const slideRefs = useRef([]);
    // const ImgDemo = useRef()
    const goToSlide = (index) =>{
        if (index != currentIndex)
        {
            const currentSlide = slideRefs.current[currentIndex];
            const newSlide = slideRefs.current[index];

            if (currentSlide && newSlide) {
                currentSlide.classList.add('slide--fade-out');
                currentSlide.classList.remove('slide--fade-in');
        
                newSlide.classList.add('slide--fade-in');
                newSlide.classList.remove('slide--fade-out');
              }
            
              setCurrentIndex(index);
        }
        // setNewIndex(index);
        // ImgDemo[currentIndex].classList.add("Slide--fade-out");
        // ImgDemo[currentIndex].classList.remove("Slide--fade-in");

        // ImgDemo[newIndex].classList.add("slide--fade-in");
        // ImgDemo[newIndex].classList.remove("slide--fade-out");
        // setCurrentIndex(newIndex);
    };
    
    return (
        <div className = "bgcontainer">
            <div className = "coverbg">
                <img className="backgroundimg" src={bg} alt ="background image"/>
                <div className = "colorbg"></div>
                {/* <img className="mainbg" src={mainImg} /> */}
                <div className="slidercontainer">
                    {ImgDemo.map((img, index)=>(
                    <div
                    // className={`slide ${index === currentIndex ? "active" : ""}`}
                    key={index}
                    ref={(el) => (slideRefs.current[index] = el)}
                    >
                        <img className = "mainimgleft" src = {img}/>
                    </div>
                    ))}

                </div>
                
                <img className = "mainimgright" src = {mainImgRight}/>
                <img className = "mainimgright2" src = {mainImgRight2}/>
                <div className="dots">
                    {ImgDemo.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                    ))}
                </div>
            </div>
        
            
        </div>
    )
}

export default SlideHome;

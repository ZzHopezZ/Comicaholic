import React, {useState, useRef, useEffect} from 'react'
import bg from '../Images/bg.png'
import './css/SlideHome.css'
import demo from '../Images/demo.png'
import mainImg2 from '../Images/9Big_Banner_PC_Flag.png'
import mainImgRight from '../Images/mainImgRight.png'
import mainImgRight2 from '../Images/5SmallBanner_B_us.png'
const delay = 5000;
function SlideHome ()
{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [newIndex, setNewIndex] = useState(0);
    const ImgDemo = [mainImg2,demo,mainImg2,mainImg2,mainImg2,mainImg2,mainImg2,mainImg2];

    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setCurrentIndex((prevIndex) =>
              prevIndex === ImgDemo.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
            resetTimeout();
        };
      }, [currentIndex]);

    const goToSlide = (index) =>{
        if (index != currentIndex)
        {
            setCurrentIndex(index);
        }
        
    };
    
    return (
        <div className = "bgcontainer">
            <div className = "coverbg">
                <img className="backgroundimg" src={bg} alt ="background image"/>
                <div className = "colorbg"></div>
                
                <div className="slidercontainer">
                    {ImgDemo.map((img, index)=>(
                    <div
                    className={`slide ${index === currentIndex ? "slide--fade-in" : "slide--fade-out"}`}
                    key={index}
                   
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


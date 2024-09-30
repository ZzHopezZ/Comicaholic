import React, {useState, useEffect} from 'react'
import Header from '../Components/Header'
import SlideHome from '../Components/SlideHome';
import '../Components/css/Home.css'
import SmallComicBox from '../Components/SmallComicBox';
import BigComicBox from '../Components/BigComicBox';
import SlideNewBox from '../Components/SlideNewBox';
import { IoIosArrowForward } from "react-icons/io";
import InfoSmallComicBox from '../Components/InfoSmallComicBox';
import ListComicBox from '../Components/ComicBoxList';
import { AiOutlineCheck } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Home()
{
    const [selectedDay, setSelectedDay] = useState('');
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const [hoverDay, setHoverDay] = useState('');
    useEffect(()=>{
        
    }, [selectedDay])
    return(
        <div>
            <Header/>
            <SlideHome/>
            <div className = "weekcontainer">
                <ul className = "weeklist">
                    {days.map((day) => (
                        <li key={day} 
                        className={(day === selectedDay) ? "weeklist-selected": (day===hoverDay ? "weeklist-hover": "weeklist-unselected")}
                            onClick={() => setSelectedDay(day)}
                            onMouseOver={() => setHoverDay(day)}
                        >{day}</li>
                    ))}
                </ul>
            </div>
            <div className="bodyContainer">
                <div className="smallComicBoxList">
                    <SmallComicBox></SmallComicBox>
                    <BigComicBox/>
                    <SmallComicBox></SmallComicBox>
                    <SmallComicBox></SmallComicBox>
                </div>
                <div className="smallComicBoxList">   
                    <SmallComicBox></SmallComicBox>
                    <SmallComicBox></SmallComicBox>
                    <SmallComicBox></SmallComicBox>
                    <SmallComicBox></SmallComicBox>
                    <SmallComicBox></SmallComicBox>
                </div>

                <div style = {{width: "100%", height: "1px", backgroundColor: "black"}}></div>
                <div style = {{marginBottom : "20px"}}>
                    <div style = {{fontSize: "x-large", marginTop: "20px", marginBottom: "20px"}}>New to WEBTOON</div>
                    <SlideNewBox/>
                </div>

                <div style = {{width: "100%", height: "1px", backgroundColor: "black"}}></div>

                <div>
                    <div style = {{fontSize: "x-large", marginTop: "20px", marginBottom: "20px", display: "flex", justifyContent: "center", alignItems: "center", justifyItems: "center"}} >
                        <span style={{ display: "flex", alignItems: "center"}}>
                        Genres </span>
                        <IoIosArrowForward style={{marginLeft: "8px", padding: "4px"}} />
                    </div>
                    <div className="smallComicBoxList">
                        <InfoSmallComicBox/>
                        <SmallComicBox/>
                        <SmallComicBox/>
                        <SmallComicBox/>
                        <SmallComicBox/>
                    </div>
                    <div className="smallComicBoxList" style={{marginBottom: "30px"}}>
                        <InfoSmallComicBox/>
                        <SmallComicBox/>
                        <SmallComicBox/>
                        <SmallComicBox/>
                        <SmallComicBox/>
                    </div>
    
                </div>
        
                </div>
                <div className="listContainer">
                    <div>
                        <div style={{textAlign: "left",display: "flex", alignItems: "center", fontWeight: "bold"}}>New & Trending <IoIosArrowForward/></div>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px" , marginTop: "5px"}}></div>                        
                        <ListComicBox/>

                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginTop: "5px" , marginTop: "5px"}}></div>
                        <ListComicBox/>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px" , marginTop: "5px"}}></div>

                        <ListComicBox/>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px", marginTop: "5px"}}></div>

                        <ListComicBox/>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px", marginTop: "5px"}}></div>

                        <ListComicBox/>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px", marginTop: "5px"}}></div>

                        <ListComicBox/>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px", marginTop: "5px"}}></div>


                    </div>
                    <div style={{marginBottom: "50px"}}>
                        <div style={{display: "flex", justifyContent:"space-between"}}>
                            <div style={{textAlign: "left", display: "flex", alignItems: "center", fontWeight: "bold"}}>ORIGINALS by Genres <IoIosArrowForward/></div>
                            <div style ={{display: "flex", alignItems: "center", color: "grey"}}>ALL<AiOutlineCheck style={{marginLeft: "3px"}}/></div>                     
                        </div>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px" , marginTop: "5px"}}></div>   
                        <ListComicBox/>

                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginTop: "5px" , marginTop: "5px"}}></div>
                        <ListComicBox/>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px" , marginTop: "5px"}}></div>

                        <ListComicBox/>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px", marginTop: "5px"}}></div>

                        <ListComicBox/>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px", marginTop: "5px"}}></div>

                        <ListComicBox/>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px", marginTop: "5px"}}></div>

                        <ListComicBox/>
                        <div style= {{backgroundColor: "black", width:"580px", height: "1px", marginBottom: "5px", marginTop: "5px"}}></div>

                    </div>
            </div>
            <footer style={{width:"100%", height:"600px", backgroundColor:"grey"}}>
                <div style={{display: "flex", flexDirection: "row", 
                    justifyContent:"center", paddingTop: "100px", alignItems:"center", gap: "50px", fontSize: "25px"}}>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaYoutube/>
                </div>
                <div style={{display: "flex", flexDirection: "row", 
                    justifyContent:"center", marginTop: "50px", alignItems:"center", gap: "50px", fontSize: "25px"}}>
                    <div>About</div>
                    <div>Feedback</div>
                    <div>Help</div>
                    <div>Terms</div>
                    <div>Privacy</div>
                    <div>Advertise</div>
                    <div>Contact</div>
                </div>
            </footer>
            
            
            
        </div>
    )
}

export default Home;
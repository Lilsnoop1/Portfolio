import React,{useRef, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion,useInView} from "framer-motion";
import '../webdev.css';
import information from "../constants.js"
import { useMediaQuery } from "react-responsive";
import picture from "../images/pp.png"


function CardComponent(props){

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    const [info,setinfo] = useState(props.levelname=="Beginner"?information.web.beginner[0]:props.levelname=="Amateur"?information.web.Amateur[0]:props.levelname=="Professional"?information.web.Professional[0]:"");
    const reference = useRef();
    const isInView = useInView(reference,{
        amount: isMobile?0.1:0.5,
        margin: isMobile?"-20% 0% 0% 0%":"0%",
    });
    var settings = {
        dots: true,
        infinite: false,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };    
    return <div className="mainframe">
    <div className="slidertitles">
            <hr className="line"/>
            <div className="levelnames" style={{backgroundColor:props.color}}>
                <p>{props.levelname}</p>
            </div>
    </div>
        <div className="details">
            <motion.img src={picture}
                    className="profilepic" id="mobprofpic" alt="myprofile" variants={{
                    hidden:{opacity:0,y:"-2vw",x:"5vw"},
                    visible:{opacity:1,y:"0vw",x:"0vw"}
                }} initial="hidden" animate={isInView?"visible":"hidden"} style={{width:"7.7vw",height:"8vw"}} transition={{duration:0.5}} 
                />
                <motion.div className="description" variants={{
                    hidden:{opacity:0,y:"5.2vw",x:"0vw"},
                    mobile:{opacity:1,y:0,x:0},
                    visible:{opacity:1,y:"5.5vw",x:"9.375vw"}
                }} initial="hidden" animate={isMobile?isInView?"mobile":"hidden":isInView?"visible":"hidden"} style={{gap:"0.5vw"}} transition={{duration:1}} >
                    {info.map((oneinfo,index)=>{
                        if(index==0){
                            return <motion.h3 variants={{
                    nothidden:{opacity:"0",y:"-5.2vw"},
                    animated:{opacity:"1",y:"0vw"}
                    }} transition={{duration:0.8,delay:0}} initial="nothidden" animate={isInView?"animated":"nothidden"} style={{alignSelf:"center"}}>{oneinfo}</motion.h3>
                    }else{
                        return <motion.p variants={{
                    nothidden:{opacity:"0vw",y:"-5.2vw"},
                    mobile:{opacity:1,y:0,x:0},
                    animated:{opacity:"1vw",y:"0vw"}
                    }} transition={{duration:0.8,delay:0}} initial="nothidden" animate={isInView?"animated":"nothidden"}>{oneinfo}</motion.p>
                    }
                }
                )
                }
                </motion.div>
        </div>
        <motion.div className="slider-div" ref={reference} var animate={isMobile?{y:0,x:0}:{y:isInView?"-5.5vw":0,x:isInView?"22.2vw":0}} 
            transition={{duration:1}}
        >
            <Slider {...settings} afterChange={(index)=>{
                if(props.levelname=="Beginner"){
                    setinfo(information.web.beginner[index]);
                }else if(props.levelname=="Amateur"){
                    setinfo(information.web.Amateur[index]);
                }else if(props.levelname=="Professional"){
                    if(index>=2){
                        setinfo(information.web.Professional[1]);
                    }
                    if(index>=6){
                        setinfo(information.web.Professional[2]);
                    }
                    if(index<=1){
                        setinfo(information.web.Professional[0]);
                    }
                }
            }}>
                {props.source.map((src)=>{
                    return <div className="sliderimage-wrapper">
                        <img src={src} alt="slidersite" className="slider-image"/>
                    </div>
                })}
            </Slider>
        </motion.div>
    </div>
}

export default CardComponent
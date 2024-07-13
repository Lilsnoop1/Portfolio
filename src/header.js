import React,{useState} from "react";
import Typewriter from "typewriter-effect";
import picture from "./images/pp.png"
import { motion} from "framer-motion";
import { useMediaQuery } from "react-responsive";
import menu from "./images/icons8-menu-ios-17-filled/icons8-menu-100.png";
import close from "./images/icons8-close-100.png"


function HeadSection(){
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    var [clicked,setClicked] = useState(false);

    function changeclick(){
        if(clicked==true){
            setClicked(false);
        }else{
            setClicked(true);
        }
    }
     return(
        <div className="Head">
            {isMobile?<img src={menu} className="menuicon" onClick={changeclick}/>:null}
            <motion.div className="sidebar" variants={
                {
                hidden:{display:"none",x:"-50vw"},
                visible:{display:"flex",x:"0vw"}
                }
            }
            animate={isMobile?clicked?"visible":"hidden":null} transition={{duration:0.5,delay:0.25}}
            >
            <img close className="menuicon close" src={close} onClick={changeclick} />
                <div className="sidediv">
                <a className="sideitem" href="/">Home</a>
                <a className="sideitem" href="/webdev">Web Development</a>
                <a className="sideitem" href="/mobdev">Mobile Development</a>
                </div>
            </motion.div>    
            {isMobile?null:<motion.div className="navsect">
                <a className="navitem" href="/">Home</a>
                <a className="navitem" href="/webdev">Web Development</a>
                <a className="navitem" href="/mobdev">Mobile Development</a>
            </motion.div>}
            <div className="headdiv">
                <motion.img src={picture}
                    className="profilepic" alt="myprofile" variants={{
                    hidden:{opacity:0,y:-75},
                    visible:{opacity:1,y:0}
                }} initial="hidden" animate="visible" transition={{duration:1,delay:0.5}} 
                />
                <div className="headchatbox">
                    <p className="chatText">
                    <Typewriter
                    options={{delay:60,loop:false}}
                        onInit={(typewriter) => {
                    typewriter
                        .typeString('HEY, I AM AMMAR ZULFIQAR')
                        .start()
                    }}
                    />
                    </p>
                    <p className="chatText">
                    <Typewriter
                    options={{delay:50,loop:false}}
                        onInit={(typewriter) => {
                    typewriter
                    .pauseFor(1000)
                        .typeString("A Full Stack Web/Mobile Developer")
                        .start()
                    }}
                    />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeadSection;
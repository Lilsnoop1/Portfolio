import React,{useEffect,useRef} from "react";
import { motion,useInView, useAnimation} from "framer-motion";
import "./homepage.css"


function MotionText(props){
    return <motion.p className="introtext" variants={{
        hidden: {opacity:0,y:75},
        visible:{opacity:1,y:0}
    }}
    initial="hidden"
    animate ="visible"
    transition={{duration:0.5,delay:props.delay}}>
    {props.text}
    </motion.p>;
}


function Home(){
    const target = useRef();
    const style = {width:"20vw",fontSize:"1.8vw",height:"6vw",marginTop:"0",padding:"0.2vw 4vw"};
    const isInView = useInView(target,{once:true});

    const mainControls = useAnimation();
    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView])


    return <motion.div className="introduction"
        variants={{
            hidden: {opacity:0,y:75},
            visible:{opacity:1,y:0}
        }}
        initial="hidden"
        animate ="visible"
        transition={{duration:0.5,delay:0.8}}
    >
        <motion.div className="introheader">
            <p>Introduction</p>
        </motion.div>
        <motion.div className="introbox">
            <MotionText delay={1} text={"As a seasoned Full Stack Web and Mobile Developer, I specialize in creating custom and visually appealing web applications, landing pages, and e-commerce websites. My proficiency extends to developing robust RESTful APIs, ensuring a solid backend infrastructure for software applications."}></MotionText>
            <MotionText delay={1.5} text={"I possess a strong command of CSS, HTML, and JavaScript, underpinned by a solid understanding of Object-Oriented Programming (OOP) principles. My expertise includes working with a variety of frameworks and libraries, such as Node.js, Express, React.js, Tailwind, and Next.js/Vue."}></MotionText> 
            <MotionText delay={2} text={"In the realm of mobile development, I excel at translating web applications into seamless mobile designs. I build applications for both iOS and Android using Flutter, integrating Firebase for streamlined authentication and comprehensive backend support."}></MotionText>
            <MotionText delay={2.5} text={"With a keen eye for detail and a commitment to delivering high-quality solutions, I am dedicated to transforming ideas into functional and beautiful digital experiences."}></MotionText>
        </motion.div>
        <motion.div className="colarrange" ref={target} variants={{
            hidden: {opacity:0,x:75},
            visible:{opacity:1,x:0}
        }}
        initial="hidden"
        animate ={mainControls}
        transition={{duration:1,delay:0.2}}>
            <div className="introheader" style={style} id="one">
                <p style={{color:"white"}}>Discover My Projects</p>
            </div>
            <div className="rowarrange">
                <a href='/webdev' className="introheader" id="two" style={style} ><p style={{color:"white"}}>Web Dev Journey</p></a>
                <a href="/mobdev" className="introheader" id="three" style={style}><p style={{color:"white"}}>Mobile Dev Journey</p></a>
            </div>
        </motion.div>
    </motion.div>
    }

export default Home;
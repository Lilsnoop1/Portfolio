import React,{useRef} from "react";
import './components/cardheader.js'
import "./webdev.css"
import blogsite from "./images/WebsiteImages/Blogsite.png"
import blogsite2 from "./images/WebsiteImages/blogsite(2).png"
import dripDextra from "./images/WebsiteImages/dripdextra.png"
import dripDextra1 from "./images/WebsiteImages/dripdextra(2).png"
import dripDextra2 from "./images/WebsiteImages/dripdextra(3).png"
import dripDextra3 from "./images/WebsiteImages/dripdextra(1).png"
import secret from "./images/WebsiteImages/secrets.png"
import secret1 from "./images/WebsiteImages/secrets(1).png"
import secret2 from "./images/WebsiteImages/secrets(2).png"
import secret3 from "./images/WebsiteImages/Secrets(3).png"
import capstone2 from "./images/WebsiteImages/Capstone2.png"
import jsonparse from "./images/WebsiteImages/jsonparsing.png"
import note from "./images/WebsiteImages/notekeeperapp.png"
import api from "./images/WebsiteImages/Api.png"
import band from "./images/WebsiteImages/bandgenerator.png"
import basic from "./images/WebsiteImages/Basic.png"
import rockpaper from "./images/WebsiteImages/rockpaper.png"
import todolist from "./images/todolist.png"
import HeaderTile from "./components/cardheader.js";
import "./components/webdevcardcomponent.js"
import CardComponent from "./components/webdevcardcomponent.js";

function WebDev(){

    var pictures = {
        beginner: [todolist,api,band,basic,rockpaper],
        amateur: [capstone2,jsonparse,note],
        professional: [blogsite,blogsite2,dripDextra,dripDextra1,dripDextra2,dripDextra3,secret,secret1,secret2,secret3]
    }

    return <div className="webdevpage">
        <HeaderTile text="Web Dev Journey"/>
        <CardComponent levelname="Beginner" color="#9E2525" source={pictures.beginner}/>
        <CardComponent levelname="Amateur" color="#0C6190" source={pictures.amateur} />
        <CardComponent levelname="Professional" color="#47280E" source={pictures.professional} />
    </div>
}

export default WebDev;
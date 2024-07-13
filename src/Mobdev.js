import React from "react";
import MobdevCard from "./components/Mobdevcardcomponent";
import HeaderTile from "./components/cardheader";
import bitcointicker from "./images/Mobdevimages/bitcointicker.png";
import profile from "./images/Mobdevimages/profile.png";
import flashchat from "./images/Mobdevimages/flashchat.png";
import flashchat1 from "./images/Mobdevimages/flashchat(1).png";
import flashchat2 from "./images/Mobdevimages/flashchat(2).png";
import bmical from "./images/Mobdevimages/Bmi calculator.png";
import destini from "./images/Mobdevimages/destini.png";
import dice from "./images/Mobdevimages/dice.png";
import quiz from "./images/Mobdevimages/quizzler.png";

function MobDev(){

    var pictures = {
        beginner: [destini,dice,quiz],
        amateur: [profile,bitcointicker],
        professional: [flashchat,flashchat1,flashchat2,bmical]
    }
    return <div className="webdevpage">
        <HeaderTile text="Mob Dev Journey" color="#314645"/>
        <MobdevCard levelname="Foundation" color="#9E2525" source={pictures.beginner}/>
        <MobdevCard levelname="Growth" color="#0C6190" source={pictures.amateur} />
        <MobdevCard levelname="Profeciency" color="#47280E" source={pictures.professional} />
    </div>
}

export default MobDev;
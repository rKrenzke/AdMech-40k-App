import React from 'react';
import {Card} from 'react-bootstrap';
import '../Styles/ForgeWorlds.css';
import MarsImg from '../assets/Mars_Forge_World.png';
import LuciusImg from '../assets/lucius.png';
import RyzaImg from '../assets/ryza.png';
import StygiesImg from '../assets/Stygies_VIII_Icon.png';
import MetalicaImg from '../assets/metalica.png';
import GraiaImg from '../assets/graia.png';
import AgripinnaImg from '../assets/agripinna.png';

const ForgeWorld = (props) => {
    console.log(props)
    return(
        <>
        <h1 className="forgeWorld">Select Your Forge World</h1>
        <div className="container">
            {props.array.map(selection => {
                let icon;
                switch(selection.name){
                    case 'Mars' :
                        icon = MarsImg;
                        break;
                    case 'Lucius':
                        icon = LuciusImg;
                        break;
                    case 'Stygies VIII':
                        icon = StygiesImg;
                        break;
                    case 'Graia':
                        icon = GraiaImg;
                        break;
                    case 'Metalica':
                        icon = MetalicaImg;
                        break;
                    case 'Agripinna':
                        icon = AgripinnaImg;
                        break;
                    case 'Ryza':
                        icon = RyzaImg;
                        break;
                    default:
                }
                return(
                    <Card style={{width: '16rem'}} className="fw" onClick={e => (props.select(selection))}>
                        {/* <Card.Img className="fwLogo"src={icon}></Card.Img> */}
                        <Card.Text className="name">{selection.name}</Card.Text>
                    </Card>
                )
            })}
        </div>
        </>
    )
}

export default ForgeWorld;
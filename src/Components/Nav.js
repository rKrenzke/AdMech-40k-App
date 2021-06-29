import React from 'react';
import {Button} from 'react-bootstrap';
import '../Styles/Navbar.css';

const NavBar = (props) => {
    return(
        <div className="navbar">
            <h1>CAWL.culator</h1>
            {props.forgeWorld ? <Button onClick={e => props.reset()}>New Game</Button> : null}
        </div>
    )
}

export default NavBar;
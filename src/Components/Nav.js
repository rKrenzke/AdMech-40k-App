import React from 'react';
import {Button} from 'react-bootstrap';
import '../Styles/Navbar.css';

const NavBar = (props) => {
    return(
        <div className="navbar">
            <h1>CAWL.culator</h1>
            <Button onClick={e => props.reset()}>New Game</Button>
        </div>
    )
}

export default NavBar;
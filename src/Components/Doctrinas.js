import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import '../Styles/Doctrina.css';
import imperativeArray from '../CodexArrays/Doctrina';

const Doctrinas = () => {

const [imperatives, setImperatives] = useState(imperativeArray);
const [active, setActive] = useState('doctrina');

const wasUsed = (doctrina) => {
    let copyArray = imperatives;
    copyArray.forEach(item => {
        if(item.name === doctrina.name){
            // setActive('active');
            item.isActive = true;
            item.wasUsed = true;
        }
    })
    setImperatives(copyArray);
}

const displayImperatives = 
    imperatives.map(doctrina => {
        return(
            <Card className="doctrina" onClick={e => wasUsed(doctrina)}>
                 <Card.Header>{doctrina.name}</Card.Header>
                 <Card.Subtitle className="optimization">OPTIMIZATION</Card.Subtitle>
                 <Card.Text className="ruleText">{doctrina.optimization}</Card.Text>
                 <Card.Subtitle className="deprecation">DEPRECATION</Card.Subtitle>
                 <Card.Text className="ruleText">{doctrina.deprecation}</Card.Text>   
            </Card>
        )
    })


const checkImpArray = () => {
    console.log(imperatives);
}
    return(
        <div className="container">
            <h2>Doctrina Imperatives</h2>
            {displayImperatives}
            <button onClick={checkImpArray}>Check array</button>
        </div>
    )
}

export default Doctrinas;
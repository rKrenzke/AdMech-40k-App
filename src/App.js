import './App.css';
import {useState} from 'react';
import Doctrinas from './Components/Doctrinas/Doctrinas';
import Canticles from './Components/Canticles/Canticles';
import Core from './Components/Core_Units/Core';
import forgeWorldArray from './CodexArrays/ForgeWorlds';
import ForgeWorld from './Components/ForgeWorld';
import NavBar from './Components/Nav';
import Legend from './Components/Legend/Legend';

function App() {

  const [forgeWorld, setForgeWorld] = useState(null);
  const [turnNumber, setTurnNumber] = useState(1)

  const selectForgeWorld = (selection) => {
    setForgeWorld(selection);
  }

  const reset = () => {
    setForgeWorld(null);
    setTurnNumber(1);
  }

  const turnHandler = () => {
    setTurnNumber(prevState => {
      return prevState + 1
    });
  }

  return (
    <div>
      <NavBar reset={reset} forgeWorld={forgeWorld} />
      {forgeWorld ?
      <div className="App">
        <section className="leftSide">
          <Doctrinas />
          <Canticles />
        </section>
        <section className="rightSide">
          <Core />
          <Legend turn={turnNumber} turnHandler={turnHandler}/>
        </section>
      </div> 
      :
      <ForgeWorld select={selectForgeWorld} array={forgeWorldArray} />
    }
    
    </div>
  );
}

export default App;

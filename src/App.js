import './App.css';
import {useState} from 'react';
import Doctrinas from './Components/Doctrinas';
import Canticles from './Components/Canticles';
import Core from './Components/Core';
import forgeWorldArray from './CodexArrays/ForgeWorlds';
import ForgeWorld from './Components/ForgeWorld';
import NavBar from './Components/Nav';
import Legend from './Components/Legend';

function App() {

  const [forgeWorld, setForgeWorld] = useState(null);

  const selectForgeWorld = (selection) => {
    setForgeWorld(selection);
  }

  const reset = () => {
    setForgeWorld(null);
  }

  return (
    <div>
      <NavBar reset={reset} />
      <div>
      {forgeWorld ?
      <div className="App">
        <section className="leftSide">
          <Doctrinas />
          <Canticles />
        </section>
        <section className="rightSide">
          <Core />
          <Legend />
        </section>
      </div> 
      :
      <ForgeWorld select={selectForgeWorld} array={forgeWorldArray} />
    }</div>
    
    </div>
  );
}

export default App;

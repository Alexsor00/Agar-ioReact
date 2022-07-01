import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import Player from './Components/Player';
import Minions from './Components/Minions';
import { useEffect, useState } from 'react';

function App() {

  const [PlayerPosition, setPlayerPosition] = useState([])
  const [minionEated, setMinionEated] = useState(null)
  const [size, setSize] = useState(170);

  
  return (
    <div className="App">

      <body  className="canvas">

        <Grid />
        <Minions PlayerPosition={PlayerPosition}  setMinionEated={setMinionEated} minionEated={minionEated} size={size}/>

        <Player setPlayerPosition={setPlayerPosition}  PlayerPosition={PlayerPosition} minionEated={minionEated} size={size} setSize={setSize}/>

      </body>
    </div>
  );
}

export default App;
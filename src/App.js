import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import Player from './Components/Player';
import Minions from './Components/Minions';
import { useEffect, useState } from 'react';

function App() {

  
  const [minionEated, setMinionEated] = useState(null)
  const [size, setSize] = useState(170);

  const [PlayerPosition, setPlayerPosition] = useState({
    x: window.innerWidth/2 - size / 2,
    y: window.innerHeight/2 - size / 2
  })
  const style = {
    left: -(PlayerPosition.x - window.innerWidth / 2) + 'px',
    top:  -(PlayerPosition.y - window.innerHeight / 2) + 'px',
    position: 'absolute',
    transition: 'all 1.5s'
  };
  return (
    <div className="App" style={style}>

      <body  className="canvas" >

        <Grid />
        <Minions PlayerPosition={PlayerPosition}  setMinionEated={setMinionEated} minionEated={minionEated} size={size}/>

        <Player setPlayerPosition={setPlayerPosition}  PlayerPosition={PlayerPosition} minionEated={minionEated} size={size} setSize={setSize}/>

      </body>
    </div>
  );
}

export default App;
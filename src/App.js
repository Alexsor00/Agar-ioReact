import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import Player from './Components/Player';
import Minions from './Components/Minions';
import { useEffect, useState } from 'react';

function App() {

  const [PlayerPosition, setPlayerPosition] = useState([])

    
  return (
    <div className="App">

      <body  className="canvas">

        <Grid />
        <Minions PlayerPosition={PlayerPosition} />

        <Player setPlayerPosition={setPlayerPosition} />

      </body>
    </div>
  );
}

export default App;
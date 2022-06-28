import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import Player from './Components/Player';
import Minions from './Components/Minions';

function App() {
  return (
    <div className="App">

      <body  className="canvas">

        <Grid />

        <Player />
        <Minions />

      </body>
    </div>
  );
}

export default App;

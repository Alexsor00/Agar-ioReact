import { useEffect, useState } from 'react';
import './Styles/Player.css'


export default function Player (){


  const [size, setSize] = useState(170)
   
  const [player_1, setPlayer_1] = useState(null)
  const [arrives, setArrives] = useState(false)
  const [direcctionX, setDirecctionX] = useState(null)
  const [direcctionY, setDirecctionY] = useState(null)
  const [position_X, setPosition_X] = useState(null)
  const [position_Y, setPosition_Y] = useState(null)

  useEffect(() => {

    setPosition()
  }, [])

 const onClickHandler = () => {
    player_1.style.width = size + 'px'
    player_1.style.height = size + 'px'
    setSize(size + 5)
    console.log(player_1.width)
  }
    

  

const updatePosition = (point) => {
  console.log(document.getElementById('player'))
  const player = document.getElementById('player');

    const position_playerX = player.getBoundingClientRect().left;
    const position_playerY = player.getBoundingClientRect().top;
    setPosition_X(position_playerX)
    setPosition_Y(position_playerY)
    const position_mouseX = point.x;
    const position_mouseY = point.y;

    const directionX = position_mouseX - position_playerX;
    const directionY = position_mouseY - position_playerY;
    setDirecctionX(directionX)
    setDirecctionY(directionY)
      if(directionX === 0 && directionY === 0) setArrives(true);

      player.style.left = (position_playerX+(directionX))+'px'
     // player.style.top = (position_playerY+(directionY*0.01))+'px'


} 

 const setPosition = () =>{
  var point = {
    x: 0,
    y: 0
  }
  onmousemove = function(e){
      point.x = e.clientX;
      point.y = e.clientY

  }
  
  setInterval(() => updatePosition(point), 20);

   }

  
   

    return(
        <canvas id='player' className='circle' onClick={onClickHandler}> </canvas>
    )
}
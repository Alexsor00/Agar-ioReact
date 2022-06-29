import { useEffect, useState } from 'react';
import './Styles/Player.css'


export default function Player ({setPlayerPosition}){
  var point = {
    x: 0,
    y: 0
  }
  var timer;
  var interval;
  const [size, setSize] = useState(170)
  

  const [playerX, setPlayerX] = useState(0)
  const [playerY, setPlayer] = useState(0)


  useEffect(() => {

    setPosition()
  }, [])

 const onClickHandler = () => {
    setSize(size + 5)
  }
    

  var position_playerX = 0;
  var position_playerY = 0;

const updatePosition = () => {
 
  const player = document.getElementById('player');


  const position_mouseX = point.x  - size/2;
  const position_mouseY = point.y - size/2;

  const directionX = (position_mouseX) - position_playerX ;
  const directionY = (position_mouseY) - position_playerY ;
  player.style.left = (position_mouseX) +'px';
  player.style.top =  position_mouseY + 'px'


    player.style.left = (position_playerX+(directionX*0.0003))+'px'
    player.style.top = (position_playerY+(directionY*0.0003))+'px'

    position_playerX = (position_playerX+(directionX*0.0003));
    position_playerY = position_playerY+(directionY*0.0003);
    setPlayerPosition({
      x: (position_playerX+size/2),
      y: (position_playerY+size/2)
    })



} 










 const setPosition = () =>{
 
  onmousemove = function(e){
    clearInterval(interval)
      point.x = e.clientX;
      point.y = e.clientY
     
      
        
      
         setInterval(() => updatePosition(), 20);

      }
  

   }

  
   

    return(
        <canvas id='player' className='circle' onClick={onClickHandler}> </canvas>
    )
}
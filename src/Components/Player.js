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
   



  useEffect(() => {

    setPosition()
  }, [])

 const onClickHandler = () => {
    setSize(size + 5)
  }
    

  

const updatePosition = () => {
 
  const player = document.getElementById('player');

  const position_playerX = player.getBoundingClientRect().left;
  const position_playerY = player.getBoundingClientRect().top;
  const position_mouseX = point.x;
  const position_mouseY = point.y;

  const directionX = position_mouseX - position_playerX - size/2;
  const directionY = position_mouseY - position_playerY - size/2;
  
    player.style.left = (position_playerX+(directionX*0.0003))+'px'
    player.style.top = (position_playerY+(directionY*0.0003))+'px'

    setPlayerPosition({
      x: (position_playerX+(directionX*0.0003)),
      y: (position_playerY+(directionY*0.0003))
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
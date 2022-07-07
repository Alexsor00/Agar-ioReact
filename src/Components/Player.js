import { useEffect, useState } from "react";
import "./Styles/Player.css";

export default function Player({
  setPlayerPosition,
  PlayerPosition,
  minionEated,
  size,
  setSize,
}) {
  
  var point = {
    x: window.innerWidth / 2 - size / 2,
    y: window.innerHeight / 2 - size / 2,
  };
  const [scaleAmount, setScaleAmount] = useState(1);
 
  var position_playerX = 3000 - size/2;
  var position_playerY = 3000 - size/2;

  useEffect(() => {
   
    setPosition(false);
  }, []);

  const onClickHandler = () => {
    setSize(size + 5);
  };

  useEffect(() => {
    if (minionEated) {
      setSize(size + 5);
    //  const ele = document.querySelector(".")
    }
  }, [minionEated]);


  
  const updatePosition = () => {
    const  app = document.querySelector(".App").getBoundingClientRect()
    const position_mouseX = point.x  - app.left;
    const position_mouseY = point.y - app.top;

    let directionX = position_mouseX - position_playerX;
    let directionY = position_mouseY - position_playerY;
   console.log(position_playerY + directionY * (size / Math.pow(size,1.56)) * 0.5)
    if(position_playerX + directionX * (size / Math.pow(size,1.56)) * 0.5 <= 0 || position_playerX + directionX * (size / Math.pow(size,1.56)) * 0.5 >= (6000 + size)){
      directionX = 0;
    }
     if(position_playerY + directionY * (size / Math.pow(size,1.56)) * 0.5 <= 0 || position_playerY + directionY * (size / Math.pow(size,1.56)) * 0.5 >= (6000 + size)){
      directionY = 0;
    }
    position_playerX = position_playerX + directionX * (size / Math.pow(size,1.56));
    position_playerY = position_playerY + directionY * (size / Math.pow(size,1.56) );
    setPlayerPosition({
      x: position_playerX,
      y: position_playerY,
    });
    
  };

  const setPosition = () => {
    onmousemove = function (e) {
      point.x = e.clientX;
      point.y = e.clientY ;
 
    };
    
    setInterval(() => updatePosition(), 20);
  };

  const style = {
    width: size + "px",
    height: size + "px",
    left: PlayerPosition.x,
    top: PlayerPosition.y,
    transition: "width 1s, height 1s",
  };
  const style2 = {
    width: 10 + "px",
    height: 10 + "px",
    left: (PlayerPosition.x + size / 2 - 10 / 2),
    top: PlayerPosition.y + size / 2 - 10 / 2,
    transition: "width 1s, height 1s",
    
  };
  return (
    <>
      <canvas
        id="player"
        className="circle"
        style={style}
        onClick={onClickHandler}
      ></canvas>
      <canvas id="player" className="player2" style={style2}></canvas>
    </>
  );
}

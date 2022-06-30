import { useEffect, useState } from "react";
import "./Styles/Player.css";

export default function Player({ setPlayerPosition, minionEated }) {
  var point = {
    x: 0,
    y: 0,
  };

  const [intervalID, setIntervalID] = useState(0);

  const [size, setSize] = useState(170);
  var position_playerX = window.innerWidth / 2 - size / 2;
  var position_playerY = window.innerHeight / 2 - size / 2;

  const [playerX, setPlayerX] = useState(0);
  const [playerY, setPlayer] = useState(0);

  useEffect(() => {
    setPosition(false);
  }, []);

  const onClickHandler = () => {
    setSize(size + 5);
  };

  useEffect(() => {
    if (minionEated) {
      setSize(size + 25);
    }
  }, [minionEated]);



  const updatePosition = () => {
    const player = document.getElementById("player");
   
    const position_mouseX = point.x - size / 2;
    const position_mouseY = point.y - size / 2;

    const directionX = position_mouseX - position_playerX;
    const directionY = position_mouseY - position_playerY;
    player.style.left = position_mouseX + "px";
    player.style.top = position_mouseY + "px";
    player.style.width = size + "px";
    player.style.height = size + "px";

    player.style.left = position_playerX + directionX * 0.01 + "px";
    player.style.top = position_playerY + directionY * 0.01 + "px";

    position_playerX = position_playerX + directionX * 0.01;
    position_playerY = position_playerY + directionY * 0.01;
    setPlayerPosition({
      x: position_playerX + size / 2,
      y: position_playerY + size / 2,
    });
  };

  const setPosition = (restart) => {
    if(restart){
      point.x = position_playerX
      point.y = position_playerY;
    }
    onmousemove = function (e) {
      point.x = e.clientX;
      point.y = e.clientY;
    };
    let myIntervalID = setInterval(() => updatePosition(), 20);
    setIntervalID(myIntervalID);
  };

  return (
    <canvas id="player" className="circle" onClick={onClickHandler}>
      {" "}
    </canvas>
  );
}

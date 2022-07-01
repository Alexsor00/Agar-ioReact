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
 
  var position_playerX = window.innerWidth / 2 - size / 2;
  var position_playerY = window.innerHeight / 2 - size / 2;

  useEffect(() => {
    setPosition(false);
  }, []);

  const onClickHandler = () => {
    setSize(size + 5);
  };

  useEffect(() => {
    if (minionEated) {
      setSize(size + 25);
      setScaleAmount(scaleAmount - 0.1)
    //  const ele = document.querySelector(".")
    }
  }, [minionEated]);

  const updatePosition = () => {
    const position_mouseX = point.x;
    const position_mouseY = point.y;

    const directionX = position_mouseX - position_playerX;
    const directionY = position_mouseY - position_playerY;

    position_playerX = position_playerX + directionX * 0.01;
    position_playerY = position_playerY + directionY * 0.01;
    setPlayerPosition({
      x: position_playerX,
      y: position_playerY,
    });
  };

  const setPosition = () => {
    onmousemove = function (e) {
      point.x = e.clientX;
      point.y = e.clientY;
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
    left: PlayerPosition.x + size / 2 - 10 / 2,
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

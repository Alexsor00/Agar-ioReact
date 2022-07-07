import { useEffect, useState } from "react";

import "./Styles/Minion.css";

export default function Minion({
  PlayerPosition,
  id,
  setMinionEated,
  minionEated,
  size,
}) {
  const [posx_minion, setPosx_minion] = useState(null);
  const [posy_minion, setPosy_minion] = useState(null);
  const [minionSize, setMinionSize] = useState(25);

  const [element, setElement] = useState(null);
  useEffect(() => {
    var a = posx_minion + minionSize / 2 - (PlayerPosition.x + size / 2);
    var b = posy_minion + minionSize / 2 - (PlayerPosition.y + size / 2);

    var c = Math.sqrt(a * a + b * b);
    if (c - size / 2 <= minionSize / 2 && element) {
      if (element) setMinionEated(true);
      element.remove();
      setElement(null);
    } else {
      if (element && minionEated) setMinionEated(false);
      if (element) element.style.backgroundColor = "rgb(173, 216, 230)";
    }
  }, [PlayerPosition.x, PlayerPosition.y]);

  useEffect(() => {
    var el = document.getElementById(`minion${id}`);

    const x_minion =
      Math.floor(Math.random() * (6000 - 50 - 0 + 1)) + 0;
    const y_minion =
      Math.floor(Math.random() * (6000 - 50 - 0 + 1)) + 0;
    const size = Math.floor(Math.random() * (35 - 25 + 1)) + 25;
    setPosx_minion(x_minion);
    setPosy_minion(y_minion);
    setMinionSize(size);

    setElement(el);

    el.style.position = "absolute";
    el.style.backgroundColor = "rgb(173, 216, 230)";
    el.style.left = x_minion + "px";
    el.style.top = y_minion + "px";
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.borderRadius = "50%";
  }, []);

  return (
    <>
      <canvas id={`minion${id}`} className="minion">
        {" "}
      </canvas>
    </>
  );
}

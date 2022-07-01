import { useEffect } from "react";
import Minion from "./Minion";

export default function Minions({
  PlayerPosition,
  setMinionEated,
  minionEated,
  size,
}) {
  var number = [];
  for (var i = 0; i < 750; i++) {
    number.push(
      <Minion
        PlayerPosition={PlayerPosition}
        id={i}
        setMinionEated={setMinionEated}
        minionEated={minionEated}
        size={size}
      />
    );
  }
  return (
    <>
      {number.map((minion, index) => {
        return <div key={index}>{minion}</div>;
      })}
    </>
  );
}

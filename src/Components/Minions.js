import { useEffect } from "react";
import Minion from "./Minion";


export default function Minions({PlayerPosition, setMinionEated, minionEated}){


   
    var number = [];
    for (var i = 0; i < 20; i++) {
        number.push(<Minion PlayerPosition = {PlayerPosition} id={i} setMinionEated={setMinionEated} minionEated={minionEated}/>)
    }
   return (
    <>

   {number.map((minion, index) => {
      return <div key={index}>{minion}</div>
   })}
    </>
   
    
   )
}
import { useEffect } from "react";
import Minion from "./Minion";


export default function Minions({PlayerPosition}){


   
    var number = [];
    for (var i = 0; i < 1; i++) {
        number.push(<Minion PlayerPosition = {PlayerPosition} />)
    }
   return (
    <>

   {number.map((minion, index) => {
      return <div key={index}>{minion}</div>
   })}
    </>
   
    
   )
}
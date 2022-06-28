import Minion from "./Minion";


export default function Minions(){


    var number = [];
    for (var i = 0; i < 20; i++) {
        const x_max = window.innerWidth;
        const y_max = window.innerHeight;
       const positionX =  Math.random() * (x_max - 0 + 1) + 0;
       const positionY = Math.random() * (y_max - 0 + 1) + 0;
    }
   return (
    <>


<Minion key={1} x={50} y={210} />
    <Minion key= {2} x={50} y={260} />
    </>
   
    
   )
}
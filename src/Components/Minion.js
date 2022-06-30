import { useEffect, useState } from "react";

import './Styles/Minion.css'

export default function Minion ({PlayerPosition, id, setMinionEated, minionEated}){
    
  

  const[posx_minion, setPosx_minion] = useState(null)
  const[posy_minion, setPosy_minion] = useState(null)
  const[element, setElement] = useState(null)
  useEffect(() => { 


    var a = posx_minion+(12.5) -(PlayerPosition.x)  ;
     var b = posy_minion+(12.5) - (PlayerPosition.y);

    var c = Math.sqrt( a*a + b*b );
   if((c-85.5) <= 10 && element) {
    if(element) setMinionEated(true);
    element.remove();
    setElement(null)
     } else {
    if(element && minionEated) setMinionEated(false);
   if(element) element.style.backgroundColor = "rgb(173, 216, 230)"
   }
   
  }, [PlayerPosition.x, PlayerPosition.y])
 


 
  

    useEffect(() => {
      var el = document.getElementById(`minion${id}`);
        
        const x_minion =  Math.floor(Math.random() * ((window.innerWidth-50) - 0 + 1)) + 0;
        const y_minion = Math.floor(Math.random() * ((window.innerHeight-50) - 0 + 1)) + 0;
      setPosx_minion(x_minion)
      setPosy_minion(y_minion)
        
          setElement(el)

          el.style.position = "absolute";
          el.style.backgroundColor = "rgb(173, 216, 230)";
          el.style.left = x_minion + 'px'
          el.style.top = y_minion + 'px'
          el.style.width = 25 + 'px'
          el.style.height = 25 + 'px'
          el.style.borderRadius = "50%"; 

         

    }, [])
  
    
    
    
  
      return(
        <>
          <canvas id={`minion${id}`} className='minion'> </canvas>
          </>
      )
  }
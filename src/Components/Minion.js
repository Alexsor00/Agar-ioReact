import { useEffect, useState } from "react";

import './Styles/Minion.css'

export default function Minion ({PlayerPosition}){
    

  const[posx_minion, setPosx_minion] = useState(null)
  const[posy_minion, setPosy_minion] = useState(null)
  const[element, setElement] = useState(null)
  useEffect(() => { 


    var a = PlayerPosition.x - posx_minion ;
     var b = PlayerPosition.y - posy_minion ;

    var c = Math.sqrt( a*a + b*b );
    console.log("Distance: " + (c-25))

  }, [PlayerPosition])
 

  


  

    useEffect(() => {
      var el = document.querySelectorAll('#minion');
      setElement(el)
      for (var i = 0; i < el.length; i++) {
        
        const x_minion =  Math.floor(Math.random() * ((window.innerWidth-50) - 0 + 1)) + 0;
        const y_minion = Math.floor(Math.random() * ((window.innerHeight-50) - 0 + 1)) + 0;
      setPosx_minion(x_minion)
      setPosy_minion(y_minion)
        
          var currentEl = el[i];
          currentEl.style.position = "absolute";
          currentEl.style.backgroundColor = "rgb(173, 216, 230)";
          currentEl.style.left = x_minion + 'px'
          currentEl.style.top = y_minion + 'px'
          currentEl.style.width = 25 + 'px'
          currentEl.style.height = 25 + 'px'
          currentEl.style.borderRadius = "50%"; 

         }

    }, [])
  
    
    
    
  
      return(
        <>
          <canvas id={`minion`} className='minion'> </canvas>
          </>
      )
  }
import { useEffect, useState } from "react";

import './Styles/Minion.css'

export default function Minion ({x, y}){
    
    

    const [size, setSize] = useState(50)
     
    const [minion, setMinion] = useState(null)
  
  
    useEffect(() => {
    console.log("aaaaa")
      const element = document.getElementById('minion');
   
       element.style.left = x + 'px'
       element.style.top = y + 'px'
       element.style.width = 50 + 'px'
       element.style.height = 50 + 'px'
       setMinion(element)
     console.log(element.style.height)
    }, [x,y])
  
   const onClickHandler = () => {
    minion.style.width = size + 'px'
    minion.style.height = size + 'px'
      setSize(size + 5)
      console.log(minion.width)
    }
    
  
    
  
      return(
          <canvas id='minion' className='minion'> </canvas>
      )
  }
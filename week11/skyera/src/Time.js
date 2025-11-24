import { useState, useEffect } from "react"; 

export default function Timer() { 
  console.log("Timer rendered!"); 
  const [count, setCount] = useState(0); 
  useEffect(() => { 
    setTimeout(() => { 
      setCount((count) => count + 1); 
    }, 1000); 
  }); 
  return <h1> {count} times!</h1>; 
}
 Timer.js
  useEffect(() => { 
    setTimeout(() => { 
      setCount((count) => count + 1); 
    }, 1000); 
  });
  useEffect(() => { 
    setTimeout(() => { 
      setCount((count) => count + 1); 
    }, 1000); 
  },[]);
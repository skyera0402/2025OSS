function btn(){ 
    const message = () => { 
      alert("Hello World!!!"); 
    } 
    return ( 
      <button onClick={message}>Click Me</button> 
    ); 
  } 
  export default btn;
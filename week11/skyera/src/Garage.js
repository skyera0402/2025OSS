function Car(props) { 
    return(
        <h2>I am a {props.brand.name}!</h2>
    );  
} 

function Garage(props){
    let carInfo = {name : "FORD", model : "MUSTANG"};
    
    return ( 
        <div>       
            <h1>Who lives in my garage?</h1> 
            <Car brand={ carInfo } /> 
        </div> 
    ); 
}

export default Garage;
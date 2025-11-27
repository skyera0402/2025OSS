
function Car(props) { 
    return(
        <li>I am a {props.brand}!</li>
    );  
} 

function Garage(props){
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'},
    ];
    
    return ( 
        <div>       
            <h1>Who lives in my garage?</h1> 
            <ul>
                {cars.map((car) => <Car key={cars.id} brand={cars.brand} />)}
            </ul>
        </div> 
    ); 
}

export default Garage;
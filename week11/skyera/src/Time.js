import { useState, useEffect } from "react";

export default function Time() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(c => c + 1);  
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);

    return <h1>{count} times!</h1>;
}

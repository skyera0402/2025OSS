import { useState, useEffect } from "react";

export default function Time() {
    const [seconds, setSeconds] = useState(0);     
    const [updateCount, setUpdateCount] = useState(0); 

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => {
                if (prev >= 59) {
                    setUpdateCount(c => c + 1); 
                    return 0;                   
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>{seconds} 초</h1>
            <h2>갱신 횟수: {updateCount} 회</h2>
        </div>
    );
}
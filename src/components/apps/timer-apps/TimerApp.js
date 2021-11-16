import React, {useState, useEffect} from 'react';

const TimerApp = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);//sets the timer at 0 as a starting point and names it
    
    useEffect(() => {
        let interval = setInterval(() => tick(), 1000);//sets the timer to increase by 1 every second
        console.log(interval);
        return () => clearInterval(interval);//clears the timer when the component is unmounted
    
    });
    const tick = () => setSecondsElapsed(secondsElapsed + 1);//sets the timer to increase by 1 every second/ side note this has to be outside of the useEffect function to work correctly
    return (
        <div>
            <h1 className="section-title">React Timer</h1>
            <div> Seconds Elapsed: {secondsElapsed}</div>
        </div>
    );
};


export default TimerApp;
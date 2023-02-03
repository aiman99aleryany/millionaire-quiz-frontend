import React, { useEffect, useState } from 'react';

function Timer(props) {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if (timer === 0) {
            props.setStop(true);
            return;
        }
        const interval = setInterval(() => {
            setTimer((state) => state - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [props, props.setStop, timer]);

    useEffect(() => {
        setTimer(30);
    }, [props.questionNr]);

    return <span>{timer}</span>;
}

export default Timer;

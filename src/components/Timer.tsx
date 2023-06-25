import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface TimerProps {
    currentPlayer: Player | null
}

const Timer: FC<TimerProps> = ({currentPlayer}) => {
    const [blackTime, setBlackTime] = useState(300)
    const [whiteTime, setWhiteTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE
            ? decrementWhiteTimer
            : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }

    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1)
    }
    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1)
    }

    // const handleRestart = () => {
    //     setWhiteTime(300)
    //     setBlackTime(300)
    // }

    return (
        <div>
            {/*<button onClick={handleRestart}>Restart game</button>*/}
            {/*<h4>Black - {blackTime}</h4>*/}
            {/*<h4>White - {whiteTime}</h4>*/}
            {currentPlayer?.color ? blackTime : whiteTime}
        </div>
    );
};

export default Timer;
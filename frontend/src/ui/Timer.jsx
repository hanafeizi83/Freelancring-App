import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Timer({ setTime, initialRemainingTime }) {
    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        if (remainingTime == 0) setTime(0)


        return <span className='text-secondary-800'>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
    }
    return (
        <CountdownCircleTimer
            isPlaying
            duration={initialRemainingTime}
            initialRemainingTime={initialRemainingTime}
            colors={'rgb(var(--color-primary-800))'}
            strokeWidth='20'
            trailColor='rgb(var(--color-primary-100))'
        >
            {({ remainingTime }) => children({ remainingTime })}
        </CountdownCircleTimer>
    )
}

export default Timer

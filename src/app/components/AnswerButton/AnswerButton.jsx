'use client';
import React, { useState } from 'react'
import styles from '@/app/components/AnswerButton/answerbutton.module.css'


const AnswerButton = ({countries}) => {
    const [revealAnswer, setRevealAnswer] = useState(false);
    const handleAnswer = () => {
        setRevealAnswer(!revealAnswer);
    }
  return (
    <div className={styles.container}>
        <button className={styles.answerbutton} onClick={handleAnswer}>
            Reveal Answer
        </button>
        <div style={{display: revealAnswer?"block":"none"}}>
            {countries.map(country=>(
                <p key={country}>{country}</p>
            ))}
        </div>
    </div>
  )
}

export default AnswerButton
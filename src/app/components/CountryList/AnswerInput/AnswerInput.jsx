'use client';
import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import styles from '@/app/components/CountryList/AnswerInput/answerinput.module.css'

const AnswerInput = ({ countries, country, index, answerlist, addAnswer, countryGuess, addGuess }) => {
    const [answer, checkAnswer] = useState(false);

    const handleAnswer = useDebouncedCallback((e, answerlist, addAnswer) => {
      const value = e.target.value;

      if (value) {
        if (value.length > 4 && countries.includes(value)) {
          checkAnswer(true);
          addGuess(value);
          addAnswer([
            ...answerlist, countryGuess
          ]);
        }
      } else if (!value) {
          checkAnswer(false);
      }
    }, 300);

  return (
    <input key={country} 
           id={`answer-${index}`}
           className={`${answer? styles.answercorrect : styles.answer}`}
           onChange={(e) => handleAnswer(e, answerlist, addAnswer)} >
    </input>
  )
}

export default AnswerInput
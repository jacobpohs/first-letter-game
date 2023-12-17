'use client';
import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import styles from '@/app/components/CountryList/countrylist.module.css'

const CountryList = ({countries, firstLetter}) => {
  const [answer, checkAnswer] = useState(false);

  const handleAnswer = useDebouncedCallback((e)=> {
    if (e.target.value) {
      if (e.target.value.length > 4 && countries.includes(e.target.value)) {
        checkAnswer(true);
      }
    } else if (!e.target.value) {
      checkAnswer(false);
    }
  }, 300);

  if (firstLetter == '' || firstLetter == ' '){
    return (
      <div className={styles.container}>
        
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.numbox}>
          <h3 className={styles.countrynum}>
            {`There are ${countries.length} countries that start with '${firstLetter.toUpperCase()}'`}
          </h3>
        </div>
        <div className={styles.answerbox}>
          {countries.map(country=>(
                <input key={country} className={styles.answer} onChange={handleAnswer} style={{backgroundColor: answer?"green":"gainsboro"}}></input>
          ))}
        </div>
      </div>
    )
  }
}

export default CountryList
'use client';
import React, { useState } from 'react'
import AnswerInput from './AnswerInput/AnswerInput';
import styles from '@/app/components/CountryList/countrylist.module.css'

const CountryList = ({countries, firstLetter}) => {

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
          {countries.map((country, index, thisValue) => (
            <AnswerInput key={country} countries={countries} country={country} index={index} />    
          ))}
        </div>
      </div>
    )
  }
}

export default CountryList
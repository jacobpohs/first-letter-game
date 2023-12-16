'use server';
import React from 'react'
import styles from '@/app/components/CountryList/countrylist.module.css'

const CountryList = async ({countries, firstLetter}) => {
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
            {`There are ${countries.length} countries that start with '${firstLetter}'`}
          </h3>
        </div>
        <div className={styles.answerbox}>
          {countries.map(country=>(
              <input className={styles.answer}></input>
          ))}
        </div>
      </div>
    )
  }
}

export default CountryList
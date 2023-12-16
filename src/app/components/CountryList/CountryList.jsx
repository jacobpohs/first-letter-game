'use server';
import React from 'react'



const CountryList = async ({countries, firstLetter}) => {
  if (firstLetter == '' || firstLetter == ' '){
    return (
      <div>
        
      </div>
    )
  } else {
    return (
      <div>
          <h3>{`There are ${countries.length} countries that start with '${firstLetter}'`}</h3>
          {countries.map(country=>(
              <input></input>
          ))}
      </div>
    )
  }
}

export default CountryList
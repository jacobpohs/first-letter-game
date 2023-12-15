import React from 'react'

async function getData() {
    const res = await fetch('https://restcountries.com/v3.1/all')

    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

const CountryList = async ({firstLetter}) => {
    const countries = await getData();
    const countryName = [];
    const searchTerm = firstLetter;

    countries.map((item) => (countryName.push(item.name.common)));

    const filteredCountry = countryName.filter(country => country.toLowerCase().startsWith(searchTerm.trim().toLowerCase()));

  return (
    <div>
        <h3>{`There are ${filteredCountry.length} Countries that start with ${firstLetter}`}</h3>
        {filteredCountry.map(country=>(
            <input></input>
        ))}
    </div>
  )
}

export default CountryList
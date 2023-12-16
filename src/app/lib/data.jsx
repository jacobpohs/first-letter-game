export const fetchCountries = async (q)=>{
    async function getData() {
        const res = await fetch('https://restcountries.com/v3.1/all');
      
        if (!res.ok) {
      
          throw new Error('Failed to fetch data')
        };
        return res.json()
    }
    const countries = await getData();
    const countryName = [];
    const searchTerm = q;

    countries.map((item) => (countryName.push(item.name.common)));

    const filteredCountry = countryName.filter(country => country.toLowerCase().startsWith(searchTerm.trim().toLowerCase()));
    return filteredCountry;
}
const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayData(data))
}
const displayData = (countries) => {
    console.log(countries)
    const countryContainer = document.getElementById('country-container')
    countries.map(country => {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
    <h2>Name : ${country.name.common}</h2>
    <h3>Capital : ${country.capital ? country.capital[0] : 'no capital'} </h3>
    <h4>Region: ${country.region} </h4>
    <h4>Population: ${country.population} </h4>  
    <button onclick="countryDetail('${country.cca2}')">Details </button>
    `
        countryContainer.appendChild(countryDiv)
    })
}
const countryDetail = (code) => {
    const url = 'https://restcountries.com/v2/alpha/{code}'
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetailsDisplay(data[0]))
}
const countryDetailsDisplay = (country) => {
    const detailsContainer = document.getElementById('country-details')
    detailsContainer.innerHTML = `
    <h3>Details : ${country.name.common} </h4>
    `

}
loadCountry()
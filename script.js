const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]
const EUR = {
  "rates": {
    "CAD": 1.5514,
    "HKD": 9.2005,
    "ISK": 161.5,
    "PHP": 57.267,
    "DKK": 7.4516,
    "HUF": 360.25,
    "CZK": 26.401,
    "AUD": 1.6226,
    "RON": 4.873,
    "SEK": 10.2135,
    "IDR": 16746.93,
    "INR": 88.011,
    "BRL": 6.2974,
    "RUB": 90.061,
    "HRK": 7.567,
    "JPY": 123.28,
    "THB": 35.984,
    "CHF": 1.0812,
    "SGD": 1.5917,
    "PLN": 4.4694,
    "BGN": 1.9558,
    "TRY": 9.156,
    "CNY": 7.782,
    "NOK": 10.7115,
    "NZD": 1.7145,
    "ZAR": 18.2814,
    "USD": 1.1868,
    "MXN": 24.0105,
    "ILS": 3.9742,
    "GBP": 0.89373,
    "KRW": 1310.55,
    "MYR": 4.851
  },
  "base": "EUR",
  "date": "2020-11-18"
}

console.log(currencies)

const converterDiv = document.createElement('div')
// converterDiv.innerHTML = `<ul{'Currency Converter'}</ul>`


document.querySelector('body').appendChild(converterDiv)

//FETCHES DATA
const url = 'https://api.exchangeratesapi.io/latest'

fetch(url).then(function(response) {
  return response.json()
  

})
  .then(function(data) { 
    console.log(data)
    const dropDownTwo = document.createElement('select')
  dropDownTwo.innerHTML = `<option>${'CAD' + EUR.rates.CAD}</option>`
  dropDownTwo.innerHTML += `<option>${EUR.rates.HKD}</option>`
  dropDownTwo.innerHTML += `<option>${EUR.rates.ISK[2]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR.rates.PHP}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[4]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[5]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[6]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[7]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[8]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[9]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[10]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[11]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[12]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[13]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[14]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[15]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[16]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[17]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[18]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[19]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[20]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[21]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[22]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[23]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[24]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[25]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[26]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[27]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[28]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[29]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[30]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[31]}</option>`
  dropDownTwo.innerHTML += `<option>${EUR[32]}</option>`

  document.querySelector('div').appendChild(dropDownTwo)
  })

  const dropDown = document.createElement('select')
  dropDown.innerHTML = `<option>${currencies[0]}</option>`
  dropDown.innerHTML += `<option>${currencies[1]}</option>`
  dropDown.innerHTML += `<option>${currencies[2]}</option>`
  dropDown.innerHTML += `<option>${currencies[3]}</option>`
  dropDown.innerHTML += `<option>${currencies[4]}</option>`
  dropDown.innerHTML += `<option>${currencies[5]}</option>`
  dropDown.innerHTML += `<option>${currencies[6]}</option>`
  dropDown.innerHTML += `<option>${currencies[7]}</option>`
  dropDown.innerHTML += `<option>${currencies[8]}</option>`
  dropDown.innerHTML += `<option>${currencies[9]}</option>`
  dropDown.innerHTML += `<option>${currencies[10]}</option>`
  dropDown.innerHTML += `<option>${currencies[11]}</option>`
  dropDown.innerHTML += `<option>${currencies[12]}</option>`
  dropDown.innerHTML += `<option>${currencies[13]}</option>`
  dropDown.innerHTML += `<option>${currencies[14]}</option>`
  dropDown.innerHTML += `<option>${currencies[15]}</option>`
  dropDown.innerHTML += `<option>${currencies[16]}</option>`
  dropDown.innerHTML += `<option>${currencies[17]}</option>`
  dropDown.innerHTML += `<option>${currencies[18]}</option>`
  dropDown.innerHTML += `<option>${currencies[19]}</option>`
  dropDown.innerHTML += `<option>${currencies[20]}</option>`
  dropDown.innerHTML += `<option>${currencies[21]}</option>`
  dropDown.innerHTML += `<option>${currencies[22]}</option>`
  dropDown.innerHTML += `<option>${currencies[23]}</option>`
  dropDown.innerHTML += `<option>${currencies[24]}</option>`
  dropDown.innerHTML += `<option>${currencies[25]}</option>`
  dropDown.innerHTML += `<option>${currencies[26]}</option>`
  dropDown.innerHTML += `<option>${currencies[27]}</option>`
  dropDown.innerHTML += `<option>${currencies[28]}</option>`
  dropDown.innerHTML += `<option>${currencies[29]}</option>`
  dropDown.innerHTML += `<option>${currencies[30]}</option>`
  dropDown.innerHTML += `<option>${currencies[31]}</option>`
  dropDown.innerHTML += `<option>${currencies[32]}</option>`

  document.querySelector('div').appendChild(dropDown)

  // const toSymbol = document.createElement('div')
  // toSymbol.innerHTML = `<p>${To}</p>`
  // document.querySelector('div').appendChild(toSymbol)

  // const dropDownTwo = document.createElement('select')
  // dropDownTwo.innerHTML = `<option1>${EUR[0]}</option1>`
  // dropDownTwo.innerHTML += `<option2>${EUR[1]}</option2>`
  // dropDownTwo.innerHTML += `<option>${EUR[2]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[3]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[4]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[5]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[6]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[7]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[8]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[9]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[10]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[11]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[12]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[13]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[14]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[15]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[16]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[17]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[18]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[19]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[20]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[21]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[22]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[23]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[24]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[25]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[26]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[27]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[28]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[29]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[30]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[31]}</option>`
  // dropDownTwo.innerHTML += `<option>${EUR[32]}</option>`

  // document.querySelector('div').appendChild(dropDownTwo)

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    let input = input.value
    let foreignCurrency = dropDownTwo.value
    let newAmmountinEUR = input.value*dropDownTwo.value
    const final = document.querySelector('#final')
    final.innerHTML = newAmmountinEUR
    
  })
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
  dropDownTwo.innerHTML = `<option>${data[0]}</option>`
  dropDownTwo.innerHTML += `<option>${data[1]}</option>`
  dropDownTwo.innerHTML += `<option>${data[2]}</option>`
  dropDownTwo.innerHTML += `<option>${data[3]}</option>`
  dropDownTwo.innerHTML += `<option>${data[4]}</option>`
  dropDownTwo.innerHTML += `<option>${data[5]}</option>`
  dropDownTwo.innerHTML += `<option>${data[6]}</option>`
  dropDownTwo.innerHTML += `<option>${data[7]}</option>`
  dropDownTwo.innerHTML += `<option>${data[8]}</option>`
  dropDownTwo.innerHTML += `<option>${data[9]}</option>`
  dropDownTwo.innerHTML += `<option>${data[10]}</option>`
  dropDownTwo.innerHTML += `<option>${data[11]}</option>`
  dropDownTwo.innerHTML += `<option>${data[12]}</option>`
  dropDownTwo.innerHTML += `<option>${data[13]}</option>`
  dropDownTwo.innerHTML += `<option>${data[14]}</option>`
  dropDownTwo.innerHTML += `<option>${data[15]}</option>`
  dropDownTwo.innerHTML += `<option>${data[16]}</option>`
  dropDownTwo.innerHTML += `<option>${data[17]}</option>`
  dropDownTwo.innerHTML += `<option>${data[18]}</option>`
  dropDownTwo.innerHTML += `<option>${data[19]}</option>`
  dropDownTwo.innerHTML += `<option>${data[20]}</option>`
  dropDownTwo.innerHTML += `<option>${data[21]}</option>`
  dropDownTwo.innerHTML += `<option>${data[22]}</option>`
  dropDownTwo.innerHTML += `<option>${data[23]}</option>`
  dropDownTwo.innerHTML += `<option>${data[24]}</option>`
  dropDownTwo.innerHTML += `<option>${data[25]}</option>`
  dropDownTwo.innerHTML += `<option>${data[26]}</option>`
  dropDownTwo.innerHTML += `<option>${data[27]}</option>`
  dropDownTwo.innerHTML += `<option>${data[28]}</option>`
  dropDownTwo.innerHTML += `<option>${data[29]}</option>`
  dropDownTwo.innerHTML += `<option>${data[30]}</option>`
  dropDownTwo.innerHTML += `<option>${data[31]}</option>`
  dropDownTwo.innerHTML += `<option>${data[32]}</option>`

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
  // dropDownTwo.innerHTML = `<option1>${currencies[0]}</option1>`
  // dropDownTwo.innerHTML += `<option2>${currencies[1]}</option2>`
  // dropDownTwo.innerHTML += `<option>${currencies[2]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[3]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[4]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[5]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[6]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[7]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[8]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[9]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[10]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[11]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[12]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[13]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[14]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[15]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[16]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[17]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[18]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[19]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[20]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[21]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[22]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[23]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[24]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[25]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[26]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[27]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[28]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[29]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[30]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[31]}</option>`
  // dropDownTwo.innerHTML += `<option>${currencies[32]}</option>`

  // document.querySelector('div').appendChild(dropDownTwo)

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    let foreignCurrency = dropDownTwo.value
    let newAmmountinEUR = input.value*dropDownTwo.value
    const final = document.querySelector('#final')
    final.innerHTML = newAmmountinEUR
    
  })
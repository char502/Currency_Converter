(function() {
  
 let rate;
 let date;
  
 let currencyFrom;
 let currencyTo; 
 let amount; 
  
 function apiCallBack(response) {
   return response.json();
 }
  
  function dataCallBack(data) {
    rate = data.rates;
    date = data.date;
    document.getElementById("current_date").innerHTML = date;
    readFromBrowser();
    let rateFrom = getRate(currencyFrom)
    console.log('rateFrom', rateFrom);
    let rateTo = getRate(currencyTo);
    console.log('rateTo', rateTo);
    let amountTo = converter(300, rateFrom, rateTo);
    console.log('converted amount', amountTo);
    
    
    
    
  }
  
  function getData() {
    fetch ('https://api.fixer.io/latest?base=GBP')
      .then(apiCallBack)
      .then(dataCallBack);
  }
  
  function converter(amount_given, rateFrom, rateTo) {
    //GBPto Euro
    return amount * rateFrom / rateTo;
  }
  
  function getRate(currency) {
    console.log('currency', currency);
    return rate[currency];
  }
  
  function readFromBrowser() {
    currencyFrom = "EUR";
    currencyTo = "AUD";
    amount = 670;
    // Make these values available to whole application
    // by putting in outer function variable
    // read using document.getElementById the CurrencyFrom from dom element 
    
    // read CurrencyTo from DOM
    
    // read amount from DOM
    
  }
  
  
  getData();
  
})()
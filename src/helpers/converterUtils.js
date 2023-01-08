export const getCurrencyPriceRelatedToAnotherCurrency = (
  firstCurrencyName,
  secondCurrencyName,
  currencies
) => {
  return currencies[secondCurrencyName].value / currencies[firstCurrencyName].value
}

export const getFormattedPrice = price => {
  let formattedPrice = price.toString()
  if (formattedPrice.includes('.') && !formattedPrice.includes('e')) {
    formattedPrice = formattedPrice.split('.')[0] + '.' + formattedPrice.split('.')[1].slice(0, 2)
  }
  return Number(formattedPrice)
}

export const checkValidatePrice = price => {
  return price.toString().match(/\d+(\.\d+)?$/)
}

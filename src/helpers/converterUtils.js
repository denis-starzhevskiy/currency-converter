export const getCurrencyPriceRelatedToAnotherCurrency = (
  firstCurrencyName,
  secondCurrencyName,
  currencies
) => {
  return currencies[secondCurrencyName].value / currencies[firstCurrencyName].value
}

export const getFormattedPrice = price => {
  return parseFloat(price.toFixed(2))
}

export const checkValidatePrice = price => {
  return price.toString().match(/\d+(\.\d+)?$/)
}

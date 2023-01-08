import React, { useEffect, useState } from 'react'
import { getCurrencyValues } from '../api/currencyAPI'
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import {
  getCurrencyPriceRelatedToAnotherCurrency,
  getFormattedPrice,
} from '../helpers/converterUtils'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  boxContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: '30px',
  },
  inputContainer: {
    display: 'flex',
    columnGap: '10px',
    flexWrap: 'nowrap',
  },
  centerLeveling: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const ConverterPage = () => {
  const classes = useStyles()
  const [currencyValues, setCurrencyValues] = useState(null)
  const [currenciesNames, setCurrenciesNames] = useState([])
  const mdUp = useMediaQuery('(min-width: 900px)')
  const [firstCurrency, setFirstCurrency] = useState(0)
  const [firstCurrencyName, setFirstCurrencyName] = useState('UAH')
  const [secondCurrency, setSecondCurrency] = useState(0)
  const [secondCurrencyName, setSecondCurrencyName] = useState('USD')
  const [isCalculating, setIsCalculating] = useState(false)

  const onChangeFirstCurrency = value => {
    setFirstCurrency(value)

    if (!isCalculating) {
      setIsCalculating(true)
      setSecondCurrency(
        getFormattedPrice(
          getCurrencyPriceRelatedToAnotherCurrency(
            secondCurrencyName,
            firstCurrencyName,
            currencyValues
          ) * value
        )
      )
      setIsCalculating(false)
    }
  }

  const onChangeSecondCurrency = value => {
    setSecondCurrency(value)

    if (!isCalculating) {
      setIsCalculating(true)
      setFirstCurrency(
        getFormattedPrice(
          getCurrencyPriceRelatedToAnotherCurrency(
            secondCurrencyName,
            firstCurrencyName,
            currencyValues
          ) * value
        )
      )
      setIsCalculating(false)
    }
  }

  const selectFirstCurrency = e => {
    const selectedCurrency = e.target.value

    setSecondCurrency(
      getFormattedPrice(
        getCurrencyPriceRelatedToAnotherCurrency(
          selectedCurrency,
          secondCurrencyName,
          currencyValues
        ) * firstCurrency
      )
    )
    setFirstCurrencyName(selectedCurrency)
  }

  const selectSecondCurrency = e => {
    const selectedCurrency = e.target.value
    setFirstCurrency(
      getFormattedPrice(
        getCurrencyPriceRelatedToAnotherCurrency(
          firstCurrencyName,
          selectedCurrency,
          currencyValues
        ) * secondCurrency
      )
    )
    setSecondCurrencyName(selectedCurrency)
  }
  useEffect(() => {
    getCurrencyValues()
      .then(result => {
        setCurrencyValues(result.data)

        let currenciesValues = []
        Object.keys(result.data).map(item => {
          currenciesValues.push(item)
        })

        setCurrenciesNames(currenciesValues)
      })
      .catch(() => {
        setCurrencyValues([])
      })
  }, [])

  const restoreInputData = () => {
    setFirstCurrencyName('UAH')
    setSecondCurrencyName('USD')
    setFirstCurrency(0)
    setSecondCurrency(0)
  }

  return (
    <>
      {currencyValues && (
        <Container maxWidth={'md'}>
          <Box mt={10} py={8} className={classes.boxContainer}>
            <Typography align={'center'} variant={'h4'}>
              Конвертер валют
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={mdUp ? 6 : 12}>
                <div className={classes.inputContainer}>
                  <TextField
                    style={{ width: '80%' }}
                    label={'Вкажіть суму'}
                    value={firstCurrency}
                    type={'number'}
                    onChange={e => onChangeFirstCurrency(e.target.value)}
                  />
                  <Select
                    style={{ minWidth: '90px' }}
                    value={firstCurrencyName}
                    onChange={selectFirstCurrency}
                  >
                    {currenciesNames.map(elem => {
                      return <MenuItem value={elem}>{elem}</MenuItem>
                    })}
                  </Select>
                </div>
              </Grid>
              <Grid item xs={mdUp ? 6 : 12}>
                <div className={classes.inputContainer}>
                  <TextField
                    style={{ width: '80%' }}
                    label={'Вкажіть суму'}
                    value={secondCurrency}
                    type={'number'}
                    onChange={e => onChangeSecondCurrency(e.target.value)}
                  />
                  <Select
                    style={{ minWidth: '90px' }}
                    value={secondCurrencyName}
                    onChange={selectSecondCurrency}
                  >
                    {currenciesNames.map(elem => {
                      return <MenuItem value={elem}>{elem}</MenuItem>
                    })}
                  </Select>
                </div>
              </Grid>
              <Grid item xs={12} className={classes.centerLeveling}>
                <Button
                  variant="contained"
                  style={{ background: '#7bbd4a', color: 'white', margin: 4 }}
                  onClick={restoreInputData}
                >
                  Оновити
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </>
  )
}

export default ConverterPage

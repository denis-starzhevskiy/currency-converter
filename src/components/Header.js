import React from 'react'
import { AppBar, Box, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import {
  getCurrencyPriceRelatedToAnotherCurrency,
  getFormattedPrice,
} from '../helpers/converterUtils'
import useCurrencies from '../context/useCurrencies'

const useStyles = makeStyles(() => ({
  headerContainer: {
    // position: 'absolute',
    top: 0,
    height: 70,
    // width: '100%',
    display: 'flex',
    columnGap: '50px',
    alignItems: 'center',
    '& > *': {
      userSelect: 'none',
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  const { isInitialized, currencies } = useCurrencies()

  return (
    <AppBar position={'absolute'}>
      <Box mx={3} className={classes.headerContainer}>
        <Typography variant={'h5'} style={{ textTransform: 'uppercase' }}>
          Currency converter
        </Typography>

        {isInitialized && (
          <Typography variant={'h5'}>{`UAH - EUR ${getFormattedPrice(
            getCurrencyPriceRelatedToAnotherCurrency('EUR', 'UAH', currencies)
          )}`}</Typography>
        )}

        {isInitialized && (
          <Typography variant={'h5'}>{`UAH - USD ${getFormattedPrice(
            getCurrencyPriceRelatedToAnotherCurrency('USD', 'UAH', currencies)
          )}`}</Typography>
        )}
      </Box>
    </AppBar>
  )
}

export default Header

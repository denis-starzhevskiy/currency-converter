import React, { createContext, useReducer } from 'react'
import { getCurrencyValues } from '../api/currencyAPI'

const initState = {
  isInitialized: false,
  currencies: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA': {
      const { data } = action.payload

      return {
        ...state,
        currencies: data,
        isInitialized: true,
      }
    }

    default: {
      return { ...state }
    }
  }
}

const CurrencyContext = createContext({
  ...initState,
  loadData: () => Promise.resolve(),
})

export const CurrencyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const loadData = async () => {
    const response = await getCurrencyValues()

    dispatch({
      type: 'LOAD_DATA',
      payload: {
        data: response.data ? response.data : [],
      },
    })
  }

  return (
    <CurrencyContext.Provider
      value={{
        ...state,
        loadData,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyContext

import React, { useEffect } from 'react'
import './App.css'
import MainLayout from './pages/layout/MainLayout'
import ConverterPage from './pages/ConverterPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import useCurrencies from './context/useCurrencies'

function App() {
  const { loadData } = useCurrencies()

  useEffect(() => {
    loadData()
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route path={'/'} render={() => <ConverterPage />} />
        </MainLayout>
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { OEM } from './OEM'
import { Deals } from './Deals'
import { MarketPlace } from './MarketPlace'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<OEM />} />
        <Route path='/deal' element={<Deals />} />
        <Route path='/market' element={<MarketPlace />} />
    </Routes>
  )
}

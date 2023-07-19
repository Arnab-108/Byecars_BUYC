import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { OEM } from './OEM'
import { Deals } from './Deals'
import { MarketPlace } from './MarketPlace'
import { SinglePage } from './SinglePage'
import { Market } from './Market'
import { MarketSingle } from './MarketSingle'
import { MainDeal } from './MainDeal'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<OEM />} />
        <Route path='/deal' element={<MainDeal />} />
        <Route path='/:id' element={<SinglePage />} />
        <Route path='/market' element={<Market />} />
        <Route path='/market/:id' element={<MarketSingle />} />
    </Routes>
  )
}

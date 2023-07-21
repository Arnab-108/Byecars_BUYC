import { Box, FormControl, Grid, GridItem, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MarketIndi } from './MarketIndi'
import { useDispatch, useSelector } from 'react-redux'
import { getcars } from '../Redux/marketplaceReducer/action'
import { useLocation, useSearchParams } from 'react-router-dom'

export const MarketPlace = () => {
    const [ searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const { products} = useSelector(state=>{
        console.log(state, "state")
        return {
            products: state.marketReducer.products
        }
    })

    let obj={
        params:{
          color: searchParams.getAll("color"),
          price: searchParams.getAll("price"),
          meilage: searchParams.getAll("meilage"),
          order: searchParams.get("order")
        },
      }
    useEffect(() => {
        dispatch(getcars(obj))
    }, [location.search])

    console.log(products)
    return (
        <div>
            <Grid ml={"2vw"} mt={"5vh"} gap={5} gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)"]}>
                {
                    products.length > 0 &&
                    products.map((el) => (
                        <GridItem cursor={"pointer"} _hover={{ shadow: "lg" }}>
                            <MarketIndi
                                key={el._id}
                                {...el}
                            />
                        </GridItem>
                    ))
                }
            </Grid>
        </div>
    )
}

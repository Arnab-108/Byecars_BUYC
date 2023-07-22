import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, FormControl, Grid, GridItem, Input , useToast } from '@chakra-ui/react'
import { DealIndi } from './DealIndi'
import { useLocation, useSearchParams } from 'react-router-dom'
export const Deals = () => {
    const [data, setData] = useState([])
    const [ searchParams] = useSearchParams()
    const toast = useToast()
    const token = localStorage.getItem("token")
    const location = useLocation()

    let obj={
        params:{
          color: searchParams.getAll("color"),
          price: searchParams.getAll("price"),
          meilage: searchParams.getAll("meilage"),
          order: searchParams.get("order")
        },
        token:token
      }
    console.log(token)
    useEffect(() => {
        getData()
    },[location.search])

    const getData = () => {
        axios.get(`https://puce-light-anemone.cyclic.app/deal`,{
            params:obj.params,
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
            .catch((err) => {
                alert("Something went wrong!")
            })
    }

    const handleDelete=(id)=>{
        console.log(id)
        axios.delete(`https://puce-light-anemone.cyclic.app/deal/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((res)=>{
            toast({
                title: 'Removed Successfully!',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position:"top"
              })
              getData()
        })
        .catch(()=>{
            toast({
                title: 'Something Went Wrong!',
                status:"error",
                duration: 3000,
                isClosable: true,
                position:"top"
              })
        })
    }
    console.log(token)
  return (
    <div>
                <Grid ml={"2vw"} mt={"5vh"} gap={5} gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)"]}>
                    {
                        data.length > 0 &&
                        data.map((el) => (
                            <GridItem cursor={"pointer"} _hover={{ shadow: "lg" }}>
                                <DealIndi
                                    key={el._id}
                                    {...el}
                                    handleDelete={handleDelete}
                                    getData={getData}
                                />
                            </GridItem>
                        ))
                    }
                </Grid>

    </div>
  )
}

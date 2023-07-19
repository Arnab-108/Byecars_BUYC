import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, FormControl, Grid, GridItem, Input , useToast } from '@chakra-ui/react'
import { DealIndi } from './DealIndi'
export const Deals = () => {
    const [data, setData] = useState([])
    const toast = useToast()
    const token = localStorage.getItem("token")
    console.log(token)
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get("http://localhost:8080/deal",{
            headers:{
                Authorization:`Brerer ${token}`
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
        axios.delete(`http://localhost:8080/deal/${id}`,{
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
  return (
    <div>
                <Grid ml={"2vw"} mt={"5vh"} gap={5} gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)"]}>
                    {
                        data.length > 0 &&
                        data.map((el) => (
                            <GridItem cursor={"pointer"} _hover={{ shadow: "sm" }}>
                                <DealIndi
                                    key={el._id}
                                    {...el}
                                    handleDelete={handleDelete}
                                />
                            </GridItem>
                        ))
                    }
                </Grid>

    </div>
  )
}

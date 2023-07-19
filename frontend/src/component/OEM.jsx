import { Box, FormControl, Grid, GridItem, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OEMCard from './OEMCard'



export const OEM = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get("http://localhost:8080/oem")
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
            .catch((err) => {
                alert("Something went wrong!")
            })
    }
    return (
        <>
            <div>
                <FormControl mt={"5vh"} textAlign={"center"}>
                    <Input placeholder='Search Here' size='lg' width={"50vw"} />
                </FormControl>
                
                <Grid ml={"2vw"} mt={"5vh"} gap={5} gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)"]}>
                    {
                        data.length > 0 &&
                        data.map((el) => (
                            <GridItem cursor={"pointer"} _hover={{ shadow: "sm" }}>
                                <OEMCard
                                    key={el._id}
                                    {...el}
                                />
                            </GridItem>
                        ))
                    }
                </Grid>

            </div>
        </>
    )
}

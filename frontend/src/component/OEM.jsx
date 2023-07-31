import { Box, Button, FormControl, Grid, GridItem, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OEMCard from './OEMCard'
import { Spinner } from '@chakra-ui/react'


export const OEM = () => {
    const [data, setData] = useState([])
    const [input, setInput] = useState("")
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get("https://puce-light-anemone.cyclic.app/oem")
            .then((res) => {
                console.log(res)
                setData(res.data)
                setLoader(false)
            })
            .catch((err) => {
                alert("Something went wrong!")
            })
    }

    const handleClick = () => {
        axios.get(`https://puce-light-anemone.cyclic.app/oem?q=${input}`).then((res) => {
            console.log(res)
            setData(res.data)
        }).catch((err) => {
            alert("SOmething went wrong!")
        })
    }

    // if(loader){
    //     return(
    //         <Spinner />
    //     )
    // }

    return (
        <>
            <div>
                <FormControl gap={2} mt={"5vh"} textAlign={"center"}>
                    <Input value={input} onChange={(e) => { setInput(e.target.value) }} placeholder='Search Here' size='lg' width={"50vw"} />
                    <Button pos={"relative"} left={"10px"} onClick={handleClick}>Search</Button>
                </FormControl>
                {
                    loader ? <Spinner
                        mt={"10vh"}
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    /> :
                        <Grid ml={"2vw"} mt={"5vh"} gap={5} gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)"]}>
                            {
                                data.length > 0 &&
                                data.map((el) => (
                                    <GridItem cursor={"pointer"} _hover={{ boxShadow: "0px 0px 8px #ddd" }}>
                                        <OEMCard
                                            key={el._id}
                                            {...el}
                                        />
                                    </GridItem>
                                ))
                            }
                        </Grid>
                }

            </div>
        </>
    )
}

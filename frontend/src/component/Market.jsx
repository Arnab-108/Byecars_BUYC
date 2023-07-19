import React from 'react'
import { MarketPlace } from './MarketPlace'
import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import { Sidebar } from './sidebarMarket'
export const Market = () => {
  return (
    <>
        <Heading mt={"5vh"} textAlign={"center"}>MarketPlace</Heading>
        <Stack pt={"5vh"} width={["100%","100%","100%","97%","97%"]} margin={"auto"} direction={"row"}>
            <Box display={["none","none","none","flex","flex"]} position={"absolute"} zIndex={1110} height={"100%"} width= {["60%","60%","60%","27%","20%"]} style={{borderRight:"2px solid lightgrey"}}>
                <Sidebar />
            </Box>
            <Box position={"relative"} left={["0px","0px","0px","294px","294px"]}   width= {["100%","100%","100%","80%","80%"]} >
              <MarketPlace  />
            </Box>
        </Stack>
    </>
  )
}

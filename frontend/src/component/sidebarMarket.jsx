import { Box, Checkbox, CheckboxGroup, FormControl, Grid, GridItem, HStack, Heading, Image, Stack, Text, VStack, background, styled } from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
export const Sidebar = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const initialColor = searchParams.getAll("color")
    const initialBrand = searchParams.getAll("brand")
    const initialSize =  searchParams.getAll("size")
    const [color,setColor] = useState(initialColor||[])
    const [price,setPrice] = useState(initialBrand||[])
    const [meilage,setMeilage] = useState(initialSize||[])


    //handleColor
    const handleColor=(e)=>{
        //console.log(e.target.value)
        let newColor = [...color]
        const value = e.target.value
        if(newColor.includes(value)){
            newColor = newColor.filter((el)=> el!==value)
        }
        else{
            newColor.push(value)
        }
        
        setColor(newColor)
    }


    //handleBrand
    const handlePrice=(e)=>{
        //console.log(e.target.value)
        let newBrand = [...price]
        const value = e.target.value
        if(newBrand.includes(value)){
            newBrand = newBrand.filter((el)=> el!==value)
        }
        else{
            newBrand.push(value)
        }
        setPrice(newBrand)
    }



    //handleSize
    const handleMeilage=(e)=>{
        let newSize = [...meilage]
        const value = e.target.value
        if(newSize.includes(value)){
            newSize = newSize.filter((el)=> el!==value)
        }
        else{
            newSize.push(value)
        }
        setMeilage(newSize)
    }
    //console.log(searchParams.getAll("brand"),"params")


    useEffect(()=>{
        const params={
            color,
            price,
            meilage,
        }
        console.log(params,"color")
        setSearchParams(params)
    },[color,price,meilage])
    return (
        <>
            <Stack align={"start"} spacing={7} direction="column">
               
                <VStack align={"start"} >
                    <Accordion width={["100%","100%","100%","18vw","18vw"]} defaultIndex={[0]} allowMultiple>

                        {/* First */}
                        <AccordionItem >
                            <Heading as={"h2"} size={"sm"} fontWeight={"bold"} color={"blackAlpha.700"}>
                                <AccordionButton height={"7vh"} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        COLOR
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4}>
                                <Stack gap={1} align={"start"} direction="column">
                                    <CheckboxGroup>
                                        <HStack>
                                            <input type="checkbox" value={"Black"} style={{width:"20px",height:"20px",color:"red",backgroundColor:"green"}} checked={color.includes("Black")} onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Black</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"Brown"} checked={color.includes("Brown")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>White</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"Blue"} checked={color.includes("Blue")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Blue</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"Green"} checked={color.includes("Green")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Green</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"Gold"} checked={color.includes("Gold")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Gold</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"Red"} checked={color.includes("Red")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Red</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" value={"Grey"} checked={color.includes("Grey")} style={{width:"20px",height:"20px"}}  onChange={handleColor}  />
                                            <Text fontSize={"sm"} color={"gray"}>Grey</Text>
                                        </HStack>
                                    </CheckboxGroup>

                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                        {/* Second */}
                        <AccordionItem>
                            <Heading as={"h2"} size={"sm"} fontWeight={"bold"} color={"blackAlpha.700"}>
                                <AccordionButton height={"7vh"} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        PRICE
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4}>
                            <Stack gap={2} align={"start"} direction="column">
                                    <CheckboxGroup>
                                        <HStack>
                                            <input type="checkbox" value={"500000"} checked={meilage.includes("500000")} onChange={handlePrice} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>500000</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handlePrice} value={"550000"} checked={price.includes("550000")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>550000</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handlePrice} value={"600000"} checked={price.includes("600000")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>600000</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handlePrice} value={"650000"} checked={price.includes("650000")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>650000</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handlePrice} value={"700000"} checked={price.includes("700000")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>700000</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handlePrice} value={"750000"} checked={price.includes("750000")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>750000</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handlePrice} value={"800000"} checked={price.includes("800000")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>800000</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handlePrice} value={"850000"} checked={price.includes("850000")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>850000</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handlePrice} value={"900000"} checked={price.includes("900000")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>900000</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handlePrice} value={"950000"} checked={price.includes("950000")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>950000</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handlePrice} value={"100000"} checked={price.includes("100000")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>100000</Text>
                                        </HStack>
                                    </CheckboxGroup>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                         {/* Third */}
                        <AccordionItem>
                            <Heading as={"h2"} size={"sm"} fontWeight={"bold"} color={"blackAlpha.700"}>
                                <AccordionButton height={"7vh"} >
                                    <Box as="span" flex='1' textAlign='left'>
                                        MEILAGE
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={4}>
                            <Stack gap={2} align={"start"} direction="column">
                                    <CheckboxGroup>
                                        <HStack>
                                            <input type="checkbox" value={"15"} checked={meilage.includes("15")} onChange={handleMeilage} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>15</Text>

                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleMeilage} value={"16"} checked={meilage.includes("16")} style={{width:"20px",height:"20px"}} />
                                            <Text fontSize={"sm"} color={"gray"}>16</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleMeilage} value={"17"} style={{width:"20px",height:"20px"}} checked={meilage.includes("17")}  />
                                            <Text fontSize={"sm"} color={"gray"}>17</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleMeilage} value={"18"} style={{width:"20px",height:"20px"}} checked={meilage.includes("18")}  />
                                            <Text fontSize={"sm"} color={"gray"}>18</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleMeilage} value={"19"} style={{width:"20px",height:"20px"}} checked={meilage.includes("19")}  />
                                            <Text fontSize={"sm"} color={"gray"}>19</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleMeilage} value={"20"} style={{width:"20px",height:"20px"}} checked={meilage.includes("20")}  />
                                            <Text fontSize={"sm"} color={"gray"}>20</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleMeilage} value={"21"} style={{width:"20px",height:"20px"}} checked={meilage.includes("21")}  />
                                            <Text fontSize={"sm"} color={"gray"}>21</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleMeilage} value={"22"} style={{width:"20px",height:"20px"}} checked={meilage.includes("22")}  />
                                            <Text fontSize={"sm"} color={"gray"}>22</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleMeilage} value={"23"} style={{width:"20px",height:"20px"}} checked={meilage.includes("23")}  />
                                            <Text fontSize={"sm"} color={"gray"}>23</Text>
                                        </HStack>
                                        <HStack>
                                            <input type="checkbox" onChange={handleMeilage} value={"24"} style={{width:"20px",height:"20px"}} checked={meilage.includes("24")}  />
                                            <Text fontSize={"sm"} color={"gray"}>24</Text>
                                        </HStack>
                                    </CheckboxGroup>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                       
                        
                    </Accordion>
                </VStack>
            </Stack>
        </>
    )
}

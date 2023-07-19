import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Spacer,
    useStatStyles,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    useToast,
} from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export const DealSinglePage = () => {
    const toast = useToast()
    const token = localStorage.getItem("token")
    const { id } = useParams()
    const [data, setData] = useState({})
    console.log(id, "id")
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(`http://localhost:8080/deal/${id}`, {
            headers: {
                Authorization: `Bearers ${token}`
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

    const handleClick=()=>{
        console.log(data)
        axios.post("http://localhost:8080/market/add",data)
        .then((res)=>{
                toast({
                    title: 'Car Added to the Market!',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position:"top"
                  })
        }).catch((err)=>{
            toast({
                title: 'This car is already added! Please add a new car!',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position:"top"
              })
        })
    }
    return (
        <Box width={"100%"}>
            <Flex
                margin={"auto"}
                width={"96%"}
                direction={["column", "column", "column", "row", "row"]}
                py={{ base: 18, md: 24 }}>
                <Flex position={"relative"} bottom={["1vh", "1vh", "1vh", "8vh", "8vh"]} width={["100%", "100%", "100%", "80vw", "80vw"]}>
                    <Image
                        border={"0.5px solid lightgrey"}
                        rounded={'md'}
                        alt={'product image'}
                        src={
                            data.image
                        }
                        fit={"contain"}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '80vh', sm: '80vh', lg: '100vh' }}
                    />
                </Flex>
                <Spacer />
                <Stack align={["center", "center", "center", "start", "start"]} width={["100%", "100%", "100%", "38vw", "38vw"]} ml={["0vw", "0vw", "0vw", "10vw", "10vw"]} position={"relative"} top={["8vh", "8vh", "8vh", "0vh", "0vh"]} bottom={["0vh", "0vh", "0vh", "8vh", "8vh"]} right={["0vh", "0vh", "0vh", "7vh", "7vw"]} spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Text
                            align={["center", "center", "center", "start", "start"]}
                            color={"#999"}

                            fontWeight={"semibold"}
                            pb={"2vh"}
                            fontSize={"14px"}>
                            {data.company}
                        </Text>
                        <Heading
                            lineHeight={1.1}
                            fontWeight="bold"
                            fontSize={{ base: 'sm', sm: 'sm', lg: 'md' }}>
                            Bye any second-hand car with us
                        </Heading>
                        <Text
                            align={"start"}
                            color={"#999"}
                            fontWeight={"semibold"}
                            pt={"1vh"}
                            fontSize={"19px"}>
                            Model:{data.car}
                        </Text>
                        <Text
                            align={"start"}
                            color={"teal"}
                            fontWeight={"semibold"}
                            pt={"1vh"}
                            fontSize={"25px"}>
                            ₹{data.price}
                        </Text>
                        <Text
                            align={"start"}
                            color={"blake"}
                            textTransform={'uppercase'}
                            fontWeight={"normal"}
                            fontSize={"12px"}>
                            {data.color}
                        </Text>
                    </Box>



                    <Accordion width={["100%", "100%", "100%", "28vw", "28vw"]} defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' fontSize={"15px"} fontWeight={"semibold"} textAlign='start'>
                                        Technical Information
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack align={"start"}>
                                    <Text fontSize={"13px"} color={"grey"}>Product id  <span style={{ position: "relative", left: "5vw", color: "black", textAlign: "start" }}>{data._id}</span></Text>
                                    <Text fontSize={"13px"} color={"grey"}>Kilometers Ran  <span style={{ position: "relative", left: "4vw", color: "black", textAlign: "start" }}>{data.kms_ran} km</span></Text>
                                    <Text fontSize={"13px"} color={"grey"}>Max Speed  <span style={{ position: "relative", left: "6vw", color: "black", textAlign: "start" }}>{data.max_speed} kmph</span></Text>
                                    <Text fontSize={"13px"} color={"grey"}>Mileage per liter  <span style={{ position: "relative", left: "4vw", color: "black", textAlign: "start" }}>{data.meilage} kmpl</span></Text>
                                    <Text fontSize={"13px"} color={"grey"}>Major Scratches<span style={{ position: "relative", left: "4vw", color: "black", textAlign: "start" }}>{data.major_scratches}</span></Text>
                                    <Text fontSize={"13px"} color={"grey"}>Original Paint<span style={{ position: "relative", left: "5vw", color: "black", textAlign: "start" }}>{data.org_paint}</span></Text>
                                    <Text fontSize={"13px"} color={"grey"}>Previous Byer<span style={{ position: "relative", left: "5vw", color: "black", textAlign: "start" }}>{data.prev_byer}</span></Text>
                                    <Text fontSize={"13px"} color={"grey"}>Registration Place<span style={{ position: "relative", left: "3vw", color: "black", textAlign: "start" }}>{data.rgst_place}</span></Text>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' fontSize={"15px"} fontWeight={"semibold"} textAlign='start'>
                                        Visit Nearby Store
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack>
                                    <Image src='https://static.lenskart.com/media/desktop/img/pdp/visit_store.png' />
                                    <VStack gap={0} align={"start"} >
                                        <Text align={"start"} fontSize={"13px"} color={"grey"}>Please Share Your Location To See Nearby Stores</Text>
                                        <Text fontSize={"14px"} color={"teal"} fontWeight={"semibold"}>Store Locator</Text>
                                    </VStack>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' fontSize={"15px"} fontWeight={"semibold"} textAlign='start'>
                                        Check Delivery Options
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack>
                                    <InputGroup size='md'>
                                        <Input
                                            pr='4.5rem'
                                            placeholder='Enter Pin Code'
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button variant={"ghost"} h='1.75rem' size='sm'>
                                                CHECK
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>

                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <Button
                        rounded={'5px'}
                        w={'full'}
                        size={'lg'}
                        py={'7'}
                        color={'white'}
                        onClick={handleClick}
                        bg={'#00bac6'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        <Text textAlign={"center"} fontWeight={"semibold"} fontSize={"14px"} >
                            Add to the Market
                        </Text>
                    </Button>
                </Stack>

            </Flex>

        </Box>

    )
}

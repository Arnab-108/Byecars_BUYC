import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs'
  import { MdOutlineTitle } from "react-icons/md";
import { AiTwotoneEdit } from 'react-icons/ai'
import axios from 'axios'
export const EditModal = ({id,getData }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState("")
    const toast = useToast();
    const token = localStorage.getItem("token")


    const handlechange = (e)=>{
        const {name,value} = e.target

        setData(prev=>{
            return {...prev , [name]:value}
        })
    }
    useEffect(() => {
        singleData()
    }, [])

    

    const singleData = () => {
        axios.get(`https://puce-light-anemone.cyclic.app/deal/${id}`, {
            headers: {
                Authorization: `Baerer ${token}`
            }
        }).then((res) => {
            console.log(res)
            setData(res.data)
        })
            .catch((err) => {
                alert(err)
            })
    }

    const options={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const handleSubmit=()=>{
        axios.patch(`https://puce-light-anemone.cyclic.app/deal/${id}`,data,options)
        .then((res)=>{
            console.log(res)
            if(res.data.msg==="Please Login First!"){
                toast({
                    title: `Something went wrong!`,
                    status: "error",
                    duration: 1000,
                    isClosable: true,
                  });
            }
            else if(res.data.msg===`${id} is updated`){
                toast({
                    title: `Edited Successfully!`,
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                  });
            }
              getData()
        }).catch(()=>{
            toast({
                title: `Something went wrong!`,
                status: "error",
                duration: 1000,
                isClosable: true,
              });
        })
    }
    console.log(data)
    
    return (
        <>
            <Button onClick={onOpen} bg={"transparent"} width={"100%"} color={"black"} _hover={{ backgroundColor: "transparent" }}>EDIT</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent width={"45vw"}>
                    <ModalHeader>Edit Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody width={"100%"}>
                        <Box
                            bg={useColorModeValue('white', 'gray.700')}
                            borderRadius="lg"
                            p={8}
                            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                            shadow="base"
                            width={"100%"}
                        >
                            <VStack spacing={5}>
                                <FormControl isRequired>
                                    <FormLabel>Name</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="text" name="company"
                                            value={data.company}
                                            placeholder="Company"
                                            onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Model</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<MdOutlineTitle />} />
                                        <Input
                                            type="text"
                                            name="car"
                                            placeholder="Model"
                                            onChange={handlechange}
                                            value={data.car}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Image</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="link" name="image" placeholder="Enter an Image if any"
                                            value={data.image}
                                            onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Color</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="text" name="color" placeholder="Color"
                                            value={data.color}
                                            onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Kilometers Ran</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="number" name="kms_ran" placeholder="Kilometers Ran"
                                            value={data.kms_ran}
                                            onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Major Scratches</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="number" name="major_scratches" placeholder="Major Scratches"
                                            value={data.major_scratches}
                                            onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Accidents</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="number" name="accidents" placeholder="Accidents if any"
                                            value={data.accidents}
                                            onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Max Speed</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="number" name="max_speed" placeholder="Maximum Speed"
                                            value={data.max_speed}
                                            onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Mileage</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="number" name="meilage" placeholder="Mileage"
                                            value={data.meilage}
                                            onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Original Paint</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="text" name="org_paint" placeholder="Original Paint"
                                            value={data.org_paint}
                                            onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Price</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="number" name="price" placeholder="Price"
                                            value={data.price}
                                            onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Previous Byer</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="text" name="prev_byer" placeholder="Previous Byer"
                                            value={data.prev_byer}
                                        onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Registered Place</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input type="text" name="rgst_place" placeholder="Registered Place"
                                            value={data.rgst_place}
                                            onChange={handlechange}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <Button
                                    colorScheme="red"
                                    bg="red.400"
                                    color="white"
                                    _hover={{
                                        bg: 'green.500',
                                    }}
                                    isFullWidth
                                    onClick={handleSubmit}
                                >
                                    Thank You
                                </Button>
                            </VStack>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

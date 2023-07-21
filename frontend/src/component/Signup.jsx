import React, { useState } from 'react'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios"
import { useToast } from '@chakra-ui/react'
import {
    Center,
    Heading,
    HStack,
    InputGroup,
    InputLeftAddon,
    useDisclosure,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Input,
    Checkbox,
    InputRightElement,
    Text,
    Link,
  } from "@chakra-ui/react";
export const Signup = () => {
    const toast = useToast()
    const [show, setShow] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name,setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [age,setAge] = useState("")

    const handleRegister=()=>{
        const obj={
            name,
            email,
            password,
            age
        }

        axios.post("https://puce-light-anemone.cyclic.app/user/signup",obj).then((res)=>{
            console.log(res)
            if(res.data.msg==="A New User is Added!"){
                toast({
                    title: 'Registration Successfull!',
                    description: "Please Login to access all the features. Thank You!",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position:"top"
                  })

            }
            else if(res.data.msg==="User already exists , Please Login !"){
                toast({
                    title: 'User already exists',
                    description: "Please Login to access all the features. Thank You!",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position:"top"
                  })
            }
        })
        .catch((err)=>{
            toast({
                title: 'Something went Wrong!',
                description: "Please try again!",
                status:"error",
                duration: 3000,
                isClosable: true,
                position:"top"
              })
        })
        console.log(obj)
    }
    return (
        <>
            <Center onClick={onOpen} fontWeight={"400"} fontSize="15px" w="60px">
                Sign Up
            </Center>

            <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
                <ModalOverlay />
                <ModalContent w="lg" pt="5" rounded="3xl">
                    <ModalCloseButton />

                    <ModalBody p={"0px 0px "}>
                        <Box m={"5px 45px 20px 45px"}>
                            <Heading
                                fontFamily={" Times, serif"}
                                fontWeight="100"
                                fontSize={"26px"}
                                mb="20px"
                                color={"#333368"}
                            >
                                Create an Account
                            </Heading>

                            <Input
                                type="text"
                                fontSize="16px"
                                onChange={(e)=>{setName(e.target.value)}}
                                focusBorderColor="rgb(206, 206, 223)"
                                name="name"
                                placeholder="Enter Your Full Name*"
                                h={"45px"}
                                borderColor={"rgb(206, 206, 223)"}
                                m={"8px 0px 15px 0px"}
                                rounded="2xl"
                                value={name}
                            />


                            <Input
                                onChange={(e)=>setEmail(e.target.value)}
                                fontSize="16px"
                                name="email"
                                placeholder="Email*"
                                h={"45px"}
                                focusBorderColor="rgb(206, 206, 223)"
                                borderColor={"rgb(206, 206, 223)"}
                                m={"8px 0px 18px 0px"}
                                rounded="2xl"
                                value={email}
                            />


                            <InputGroup mb="15px">
                                <Input
                                   onChange={(e)=>setPassword(e.target.value)}
                                    fontSize="16px"
                                    type={show ? "text" : "password"}
                                    name="password"
                                    placeholder="Password*"
                                    h={"45px"}
                                    focusBorderColor="rgb(206, 206, 223)"
                                    borderColor={"rgb(206, 206, 223)"}
                                    m={"8px 0px 8px 0px"}
                                    rounded="2xl"
                                    value={password}
                                />

                                <InputRightElement width="6.5rem" size="lg">
                                    <Button
                                        size="md"
                                        borderRadius="3xl"
                                        mt="20%"
                                        onClick={() => setShow(!show)}
                                        bg="white"
                                    >
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Input
                                onChange={(e)=>setAge(e.target.value)}
                                fontSize="16px"
                                name="number"
                                placeholder="Age"
                                h={"45px"}
                                focusBorderColor="rgb(206, 206, 223)"
                                borderColor={"rgb(206, 206, 223)"}
                                m={"8px 0px 18px 0px"}
                                rounded="2xl"
                                value={age}
                            />

                            <HStack>
                                <Box
                                    textDecoration={"underline"}
                                    fontFamily={" sans-serif"}
                                    color={"#333368"}
                                    fontSize="14px"
                                >
                                    Got a Referral code?
                                </Box>

                                <Box fontFamily={" sans-serif"} color={"#333368"}>
                                    (Optional)
                                </Box>
                            </HStack>

                            <HStack>
                                <Checkbox
                                    mb={"20px"}
                                    mt="20px"
                                    size="sm"
                                    fontFamily={" sans-serif"}
                                >
                                    Get Update on whatsapp
                                </Checkbox>
                                <Image
                                    src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                                    w={"22px"}
                                    h="22px"
                                />
                            </HStack>

                            <HStack spacing={"3px"} mb="10px">
                                <Box
                                    fontSize={"14px"}
                                    fontFamily={" sans-serif"}
                                    fontWeight="100"
                                    letterSpacing={"-0.4px"}
                                >
                                    By creating this account, you agree to our
                                </Box>
                                <Box fontSize={"15px"} textDecoration="underline">
                                    Privacy Policy
                                </Box>
                            </HStack>

                            <Button
                                //   isLoading={loading}
                                onClick={handleRegister}
                                bgColor={"#11daac"}
                                width="100%"
                                borderRadius={"35px/35px"}
                                h="50px"
                                _hover={{ backgroundColor: "#11daac" }}
                                fontFamily={" sans-serif"}
                                fontWeight="300"
                                fontSize="18px"
                            >
                                Create an Account
                            </Button>

                            <Center mt={"14px"} fontSize="15px" gap="2">
                                Have an account?{" "}
                                <Center fontWeight={"500"} textDecoration="underline">
                                    Sign In
                                </Center>
                            </Center>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

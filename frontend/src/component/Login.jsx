import React, { useState } from 'react'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Center,
    Checkbox,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useToast,
} from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Signup } from './Signup';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export const Login = () => {
    //const toast = useToast()
    const [show, setShow] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const showToastMessage = () => {
        toast.success('Login Successfull !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const showErrorMessage = () => {
        toast.error('Provide correct email and password!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const handleLogin = () => {
        try {
            const obj = {
                email,
                password
            }

            axios.post("http://localhost:8080/user/login", obj).then((res) => {
                console.log(res)
                if (res.data.msg === "Logged In") {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("user", JSON.stringify(res.data.user))
                    localStorage.setItem("auth", true)
                    showToastMessage()
                    setTimeout(() => {
                        navigate("/")
                    }, 1500)
                }
                else{
                    alert("error")
                }
            }).catch((err) => {
                // toast({
                //     title: 'Something went Wrong!',
                //     description: "Please try again!",
                //     status:"error",
                //     duration: 3000,
                //     isClosable: true,
                //     position:"top"
                //   })
                showErrorMessage()
            })
        } catch (error) {
            console.log(error)
        }

    }

    const handleSignin = () => {
        handleLogin()
    }
    return (
        <>
            <Center onClick={handleOpen} fontWeight={"400"} fontSize="15px" w="80px">
                Sign In
            </Center>

            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                isCentered
                size={{ xl: "md", lg: "md", md: "md", sm: "sm", base: "sm" }}
            >
                <ModalOverlay />
                <ModalContent rounded="3xl">
                    <ModalCloseButton
                        borderRadius={"50%"}
                        bg="white"
                        m={"10px 10px 0px 0px"}
                    />

                    <ModalBody p={"0px 0px "} borderRadius={"15px 15px 15px 15px "}>
                        <Image
                            src="https://images.hindustantimes.com/auto/img/2021/12/28/600x338/Indian_cars_1640662074513_1640662081298.jpg"
                            alt="pic"
                            borderRadius={"10px 10px 0px 0px "}
                        />
                        <Box m={"34px 45px 50px 45px"}>
                            <Heading
                                fontFamily={" Times, serif"}
                                fontWeight="100"
                                fontSize={"28px"}
                                mb="24px"
                                color={"#333368"}
                            >
                                Sign In
                            </Heading>
                            <Input
                                name="email"
                                placeholder="Email"
                                h={"50px"}
                                fontSize="16px"
                                focusBorderColor="rgb(206, 206, 223)"
                                borderColor={"rgb(206, 206, 223)"}
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                rounded="2xl"
                                mb={"5px"}
                            />
                            <InputGroup>
                                <Input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter password"
                                    h={"50px"}
                                    fontSize="16px"
                                    focusBorderColor="rgb(206, 206, 223)"
                                    borderColor={"rgb(206, 206, 223)"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    rounded="2xl"
                                />

                                <InputRightElement width="6.5rem" size="lg">
                                    <Button
                                        size="md"
                                        borderRadius="3xl"
                                        mt="10%"
                                        onClick={() => setShow(!show)}
                                        bg="white"
                                    >
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Box

                                m="15px 0px 0px 0px"
                                color="#000042"
                                fontSize="15px"
                            >
                                Forget Password ?
                            </Box>
                            <HStack fontSize="16px">
                                <Checkbox mb={"20px"} mt="20px" size="sm">
                                    Get Update on whatsapp
                                </Checkbox>
                                <Image
                                    src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                                    w={"22px"}
                                    h="22px"
                                />
                            </HStack>
                            <Button
                                //isLoading={loading}
                                onClick={handleSignin}
                                bgColor={"#11daac"}
                                width="100%"
                                borderRadius={"35px/35px"}
                                h="50px"
                                fontSize="18px"
                                _hover={{ backgroundColor: "#11daac" }}
                            >
                                Sign In
                                <ToastContainer />
                            </Button>

                            <HStack spacing={"0px"} mt="19px" gap="2">
                                <Box fontSize={"14px"}> New member?</Box>
                                <Link
                                    fontSize={"15px"}
                                    fontWeight="500"
                                    textDecoration={"underline"}
                                >
                                    <Signup />

                                </Link>
                                <Link fontSize={"15px"} fontWeight={"500"} textDecoration={"underline"} href="/adminlogin">Login as Admin?</Link>
                            </HStack>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

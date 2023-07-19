import React, { useState } from 'react'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
    const [show, setShow] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
  
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
                                //onChange={handleChange}
                                focusBorderColor="rgb(206, 206, 223)"
                                name="name"
                                placeholder="Enter Your Full Name*"
                                h={"45px"}
                                borderColor={"rgb(206, 206, 223)"}
                                m={"8px 0px 15px 0px"}
                                rounded="2xl"
                                //value={username}
                            />


                            <Input
                                //onChange={handleChange}
                                fontSize="16px"
                                name="email"
                                placeholder="Email*"
                                h={"45px"}
                                focusBorderColor="rgb(206, 206, 223)"
                                borderColor={"rgb(206, 206, 223)"}
                                m={"8px 0px 18px 0px"}
                                rounded="2xl"
                                //value={usermail}
                            />


                            <InputGroup mb="15px">
                                <Input
                                    //onChange={handleChange}
                                    fontSize="16px"
                                    type={show ? "text" : "password"}
                                    name="password"
                                    placeholder="Password*"
                                    h={"45px"}
                                    focusBorderColor="rgb(206, 206, 223)"
                                    borderColor={"rgb(206, 206, 223)"}
                                    m={"8px 0px 8px 0px"}
                                    rounded="2xl"
                                    //value={userpass}
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
                                //onClick={handleRegister}
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

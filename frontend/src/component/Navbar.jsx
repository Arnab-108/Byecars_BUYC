import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import { MdWifiCalling3 } from "react-icons/md";
import { TriangleDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Spacer,
    Flex,
    Text,
    Image,
    Input,
    Button,
    HStack,
    Center,
    Avatar,
    Heading,
    Grid,
    Menu,
    MenuButton,
    MenuList,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    useToast,
} from "@chakra-ui/react";
import { Login } from './Login';
import { Signup } from './Signup';
export const Navbar = () => {
    const isAuth = localStorage.getItem("auth") || false;
    const userdata = JSON.parse(localStorage.getItem("user")) || "";
    const navigate = useNavigate()
    //const toast = useToast()
    const showToastMessage = () => {
        toast.success('Login Successfull !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    console.log(userdata.name)
    console.log(isAuth)
    return (
        <>
            <Box  overflow="hidden" bg="white">
                <Box
                    cursor="pointer"
                    backgroundColor={"aliceblue"}
                //   onMouseEnter={() => setIsOpen(false)}
                >
                    <HStack m="auto">
                        <Box w="15%">
                            <Link to="/">
                                <Image
                                    pt={"30px"}
                                    pb={"10px"}
                                    pl={"20px"}
                                    pr={"20px"}
                                    src={"https://t3.ftcdn.net/jpg/02/56/94/74/360_F_256947432_mW9bJpGFdJo9kw9XovizaHcQI2NOVXc8.jpg"}
                                    alt="logo"
                                    w="100%"
                                />
                            </Link>
                        </Box>
                        <HStack gap={2} w="90%" m="auto">
                            <Box w="15%">
                                <HStack fontSize="18px" fontWeight="bold">
                                    <MdWifiCalling3 />
                                    <Text>1800-111-111</Text>
                                </HStack>
                            </Box>
                            <Spacer />
                            <HStack pos={"relative"} right={"3vw"} gap={3} w="40%">
                                <Link>
                                    <Button
                                        variant={"ghost"}
                                        size="lg"
                                        // bg="white"
                                        _hover={{ bg: "white" }}
                                        fontSize="16px"
                                        fontWeight="400"
                                    //   onClick={() => navigate("History Route")}  history route need to be added
                                    >
                                        Track Order
                                    </Button>
                                </Link>
                                {isAuth ? (
                                    <Popover trigger="hover">
                                        <PopoverTrigger>
                                            <Box
                                                fontWeight={"600"}
                                                fontSize="15px"
                                                m="auto"
                                                // mt="-2px"
                                                w="90px"
                                                textAlign="center"
                                            >
                                                {userdata.name}
                                                <TriangleDownIcon
                                                    ml="2px"
                                                    fontSize={"9px"}
                                                    _hover={{ transform: "rotate(180deg)" }}
                                                />
                                            </Box>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            w="120px"
                                            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                                        >
                                            <PopoverBody
                                                h={"100%"}
                                                pl="6"
                                                fontSize="15px"
                                                _hover={{ fontWeight: "bold" }}
                                            >
                                                <Box
                                                color="#333368"
                                                borderBottom={"1px solid black"}
                                                width={"100%"}
                                                height={"5vh"}
                                                >
                                                    Deals
                                                </Box>
                                                <Box
                                                    height={"5vh"}
                                                    color="#333368"
                                                    pt={"1vh"}
                                                    onClick={() => {
                                                        localStorage.removeItem("auth");
                                                        localStorage.removeItem("userData");
                                                        localStorage.removeItem("token");
                                                        showToastMessage()
                                                        setTimeout(() => {
                                                            navigate("/");
                                                        }, 1000);
                                                    }}
                                                >
                                                    <ToastContainer />
                                                    Sign Out
                                                </Box>
                                                
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                ) : (
                                    <Box display={"flex"}>
                                        <Login />
                                        <Signup />
                                    </Box>
                                )}

                                <Button
                                    leftIcon={<CiHeart />}
                                    size="lg"
                                    variant={"ghost"}
                                    fontSize="16px"
                                    _hover={{ bg: "white" }}
                                    fontWeight="400"
                                //   onClick={() => navigate("Wishlist Route")}
                                >
                                    Wishlist
                                </Button>
                                <Link to="/cart">     {/*  // Cart route */}
                                    <Button
                                        leftIcon={<CgShoppingCart />}
                                        size="lg"
                                        variant={"ghost"}
                                        _hover={{ bg: "white" }}
                                        fontSize="16px"
                                        fontWeight="400"
                                    >
                                        Cart
                                    </Button>
                                </Link>
                            </HStack>
                        </HStack>
                    </HStack>
                </Box>
            </Box>

        </>
    )
}

import React from 'react'
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsHeartFill,BsHeart } from "react-icons/bs"
import { NavLink } from 'react-router-dom';
export const MarketIndi = ({_id,company,car,image,color,kms_ran,major_scratches,accidents,max_speed,meilage,org_paint,prev_byer,price,rgst_place}) => {
    const [liked,setLiked] = useState(false)
    return (
        <>
            <Flex cursor={"pointer"} gap={10} w="full" alignItems="center" justifyContent="center">

                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    height={"55vh"}
                    width={"100%"}
                    borderWidth="1px"
                    rounded="lg"
                    position="relative">
                    <NavLink to={`/market/${_id}`} >
                        <Image
                            src={image}
                            alt={`Picture of ${company}`}
                            roundedTop="lg"
                        />
                    </NavLink>
                    <Box p="6">
                        <Flex mt="1" justifyContent="space-between" alignContent="center">
                            <Box
                                fontSize="md"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated>
                                {company}
                            </Box>
                            <Tooltip
                                bg="white"
                                placement={'top'}
                                color={'gray.800'}
                                fontSize={'1.2em'}>
                                <Box display={'flex'} onClick={() => { setLiked(!liked) }}>
                                    {
                                        liked ?
                                            <Icon as={BsHeartFill} fill={"red"} h={7} w={7} alignSelf={'center'} />
                                            :
                                            <Icon as={BsHeart} h={7} w={7} alignSelf={'center'} />
                                    }

                                </Box>
                            </Tooltip>
                        </Flex>

                        <Flex direction={"column"} align={"start"}>
                            <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
                                <Box as="span" color={'gray.600'} fontSize="sm">
                                    model:
                                </Box>
                                {car}
                            </Box>
                            <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
                                <Box as="span" color={'gray.600'} fontSize="sm">
                                    Color:
                                </Box>
                                {color}
                            </Box>
                            <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
                                <Box as="span" color={'gray.600'} fontSize="sm">
                                    Mileage:
                                </Box>
                                {meilage}
                            </Box>
                            <Box fontSize="md" fontWeight={"semibold"} color={useColorModeValue('gray.800', 'white')}>
                                <Box as="span" fontWeight={"semibold"} color={'gray.600'} fontSize="md">
                                    ₹
                                </Box>
                                {price}
                            </Box>
                            {/* <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
                           <Box as="span" color={'gray.600'} fontSize="sm">
                              color:
                           </Box>
                           {color}
                       </Box> */}
                        </Flex>
                    </Box>
                </Box>

            </Flex>
        </>
    )
}

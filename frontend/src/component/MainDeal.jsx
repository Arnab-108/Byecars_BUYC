import React from 'react'
import { Box, Grid, GridItem, Icon } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FaLightbulb } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { Deals } from './Deals';
import { Form } from './Form';
export const MainDeal = () => {
  return (
    <Box margin={"auto"} width={"65vw"} mt="10px">
        <Tabs isFitted>
          <TabList mb="1em">
            <Tab>
              <Icon as={GiCheckMark} h={4} w={6} pr={"5px"} /> Deals
            </Tab>
            <Tab>
              <Icon as={FaLightbulb} h={4} w={6} pr={"5px"} /> New
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Deals />
            </TabPanel>
            <TabPanel>
              <Form />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
  )
}

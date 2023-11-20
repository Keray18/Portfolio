import React from 'react'
import BgVid from '../scenes/BgVid'
import { Box, Flex, Image, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import logo from '../img/logo.png'
import RootPage from '../scenes/RootPage'
import Projects from './Projects'


const Home = () => {
  
  const boxStyle = {
    ":hover": {
      cursor: "pointer",
      // border: "5px inset"
    }
  }
  


  const showStyle = {
    bg: "white",
    textColor: "black",
  }

  return (
    <Box position="relative" height="100vh">
      <BgVid />

      {/* Navbar */}
      <Tabs variant="solid-rounded" size="lg" isLazy>
      <Flex direction={{ base: "column", md: "row" }} as="nav" alignItems="center" wrap="wrap" fontWeight="extrabold" textColor="ghostwhite">
        <Box width={{ base: "40vw", sm: "10vw" }}>
          <Image src={logo} alt='logo' />
        </Box>
        <Spacer />
        
          <TabList sx={boxStyle} mx="4rem" spacing="5rem">
            <Tab _selected={showStyle} _hover={{ cursor: "pointer", filter: "brightness(1)"}} fontWeight="bold" 
            >Home</Tab>

            <Tab _selected={showStyle} _hover={{ cursor: "pointer", filter: "brightness(1)"}} fontWeight="bold"
            >Projects</Tab>
          </TabList>
        
      </Flex>
      <TabPanels>
        <TabPanel>
          <RootPage />
        </TabPanel>
        <TabPanel>
          <Projects />
        </TabPanel>
      </TabPanels>

    </Tabs>
    </Box>
  )
}

export default Home
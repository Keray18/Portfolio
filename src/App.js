import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import { Box, Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react'; // Import Skeleton from Chakra UI
import './App.css';

const App = () => {
  const year = new Date().getFullYear();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false)
      setIsLoaded(true)
    }, 4000); // Show skeleton for 5 seconds

    return () => {
      clearTimeout(loadingTimeout)
    }
  }, [])

  return (
    <div>
      {isLoading ? (
        <Box w="100%" h="100vh">
          <Flex justify="space-between" px="5rem" py="2rem">
            <SkeletonText isLoaded={isLoaded} width="8vw" rounded="2xl" mt='4' noOfLines={1} spacing='4' skeletonHeight={{ base: "3", md: '8vh' }} />
            <SkeletonText isLoaded={isLoaded} width="10vw"  mt='4' noOfLines={1} spacing='4' skeletonHeight={{ base: "3", md: '10' }} />
          </Flex>
          <Box flexDirection="column" alignItems="center"  py="3rem" fontSize="3xl" width="fit-content" margin="auto">
            <Flex flexDirection="column" justify="center" alignItems="center">
              <SkeletonCircle isLoaded={isLoaded} mt={{md: "5rem"}} w={{base: "20vw", lg: "5vw"}} h={{ base: "11vh", lg: "10vh"}} size='10' />
              <Flex py="3rem">
                <SkeletonCircle isLoaded={isLoaded} mx="0.5rem" size='5'  />
                <SkeletonCircle isLoaded={isLoaded} mx="0.5rem" size='5'  />
                <SkeletonCircle isLoaded={isLoaded} mx="0.5rem" size='5'  />
                <SkeletonCircle isLoaded={isLoaded} mx="0.5rem" size='5'  />
              </Flex>
              <SkeletonText isLoaded={isLoaded} width={{base: "50vw", md: "30vw"}} mt='4' noOfLines={2} spacing='4' skeletonHeight={{ base: "3", md: '8' }} />
            </Flex>
          </Box>
        </Box>
      ) : (
        <>
          <Home />
          <Contact />
          <Flex justify="center" alignItems="center">
            <footer>@copyright {year}</footer>
          </Flex>
        </>
      )}
    </div>
  );
};

export default App;

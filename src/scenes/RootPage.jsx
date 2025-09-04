import { Avatar, Box, Flex, Heading, Icon, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { BsDashLg } from 'react-icons/bs'
import { FaLinkedinIn, FaSquareGithub, FaXTwitter, FaFileLines } from 'react-icons/fa6'
import photo from '../img/me.JPG'

const RootPage = () => {

  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <Box mt={{md: "3.5rem"}}>
      {/* Profile */}
      <Flex flexDirection="column" color="ghostwhite" alignItems="center"  py="1rem" fontSize="3xl" width="fit-content" margin="auto">
        <Avatar w={{base: "20vw", lg: "5vw"}} h={{ base: "11vh", lg: "10vh"}} src={photo} />
        <Box py="2.5rem">
          <Link target="_blank" href='https://drive.google.com/u/0/uc?id=1Ti_Q6qdweY1clKyoLQrgE3DXOHE-JIma&export=download'>
            <Icon mx="0.8rem" as={FaFileLines} />
          </Link>
          <Link target="_blank" href='https://twitter.com/Keray02'>
            <Icon mx="0.8rem" as={FaXTwitter} />
          </Link>
          <Link target="_blank" href='https://www.linkedin.com/in/keshavbahoray/'>
            <Icon mx="0.8rem" as={FaLinkedinIn} />
          </Link>
          <Link target="_blank" href='https://github.com/Keray18'>
            <Icon mx="0.8rem" as={FaSquareGithub} />
          </Link>
        </Box>
      </Flex>

      {/* Content */}
      <Flex flexDirection="column" width="fit-content" margin="auto" color="ghostwhite">
        <Heading fontSize={{ lg: "4xl", base: "2xl" }}>
          <Flex alignItems="center">
              { isLargeScreen ? (
                <>
                  <Box as="u">
                    Software Engineer
                  </Box> 
                  <Icon mt="1rem" fontSize="6xl" as={BsDashLg} />
                </>
              ) : (
                <Box as="u">
                  Software Engineer:
                </Box> 
              )} 
          </Flex>
        </Heading>
        <Box  fontSize={{lg: "2xl", md: "1xl"}}>
          <Text>
            I'm a Front-End Machine Learning Developer, 
          </Text>
          <Text>
            dedicated to crafting intelligent and engaging web experiences.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default RootPage
import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import image from '../img/contact.jpg'
import photo from '../img/white.jpg'
import ContactForm from '../scenes/ContactForm'
const Contact = () => {
  
  return (
    <Box>
      <Box position="relative">
        <Image h="120vh" w="100%" filter="brightness(0.4)" position="absolute" zIndex="-1" src={image} alt='img' />
        <Flex justify="center">
          <Image my="5rem" opacity="0.7"  width="90%" height="100%" position="absolute" zIndex="-1" src={photo} alt='img' />
        
        </Flex>
        <Stack my="3.5rem" flexDirection="column" alignItems="center" textAlign="center">
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            
          >
            <Box bg="#5555CB" 
              borderRadius="0.5rem"
              boxShadow="0 10px 10px rgba(0,0,0,0.5)"
              transform="perspective(1000px) rotateX(-10deg)" // Apply a 3D rotation effect
            >
              <Heading color="ghostwhite" mx="3rem">Contact Me</Heading>
            </Box>
          </Box>

          {/* Form */}
          <ContactForm />
          
        </Stack>
        
      </Box>
      
    </Box>
  )
}

export default Contact
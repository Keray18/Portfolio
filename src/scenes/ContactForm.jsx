import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'


const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    message: '',
  })
  // const nError = formData.name === ''

  const toast = useToast()
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('https://portfolio-backend-dnss.onrender.com/senEmail', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
      toast({
        title: 'Success!',
        description: 'Your mail has been sent',
        duration: 5000,
        isClosable: true,
        status: 'success',
        position: 'top',
      });
      setFormData({
        name: '',
        mail: '',
        message: '',
      });
    } else {
      // Handle the case where the server indicates a failure
      toast({
        title: 'Error',
        description: 'Failed to send mail. Please try again later.',
        duration: 5000,
        isClosable: true,
        status: 'error',
        position: 'top',
      });
    }
    } catch (error) {
      console.error('Error:', error)
    }
     
  }

  
  return (
    <Box my={{lg: "5rem", base: "2rem"}} w="40vw">
          <form onSubmit={handleSubmit}>
           <Box>
             <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input 
                value={formData.name} 
                type='text' 
                name='name' 
                onChange={handleInputChange}
                />
                <FormHelperText left="0" position="absolute">Enter your name.</FormHelperText>

              </FormControl>

              <FormControl isRequired my="5rem">
                <FormLabel>Email</FormLabel>
                <Input 
                value={formData.mail} 
                type='email' 
                name='mail' 
                onChange={handleInputChange} 
                />
                <FormHelperText left="0" position="absolute">Enter your mail id.</FormHelperText>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Your message</FormLabel>
                <Textarea 
                value={formData.message} 
                name='message' 
                placeholder='Kindly enter a message...' 
                onChange={handleInputChange}
                />
              </FormControl>

              <Button w="40vw" 
                my={{base: "1rem", lg: "3rem"}}
                type='submit'
                bgColor="#5555CB"
                color="ghostwhite"
                _hover={{bgColor: "#5555CB"}}
              >Submit</Button>
           </Box>
          </form>
    </Box>
  )
}

export default ContactForm
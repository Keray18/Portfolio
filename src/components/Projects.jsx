import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CardCarousel from '../scenes/CardCarousel'

const Projects = () => {
  

  return (
    <SimpleGrid justifyContent="center" pt={{md: "3rem", base: "0"}} px="10rem" spacing="10" minChildWidth={{base: "250px", md: "300px", lg: "400px"}}>
      <CardCarousel />
    </SimpleGrid>
  )
}

export default Projects
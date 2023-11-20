import React from 'react'
import { Box, Card, CardHeader, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'

const CardComp = (props) => {
  return (
    <Card bgColor="blackAlpha.100" textColor="ghostwhite" w="fit-content" h="md">
       <Flex direction="column" justify="center">
         <CardHeader h="25vh">
            <Image target="_blank" width="50vw" h="20vh" src={props.src} alt='image' borderRadius="lg" />
          </CardHeader>

          <Stack mx="1rem" mt='5' spacing='3'>
            <Box w="250px" h={{base: "30vh", md: "25vh"}}>
              <Heading size='md'>{props.head}</Heading>
              <Text py="0.5rem" h="fit-content">{props.body}</Text>
            </Box>
            <Box>
              <Link href={props.link}>
                <Flex alignItems="center">
                  <Box>See more</Box>
                  <BsArrowRight />
                </Flex>
              </Link>
            </Box>
          </Stack>
       </Flex>
      </Card>
  )
}

export default CardComp


import React from 'react'
import { Box, Card, CardHeader, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'

const CardComp = (props) => {
  return (
    <Card bgColor="blackAlpha.100" textColor="ghostwhite" w="sm" h="md">
       <Flex direction="column" justify="center">
         <CardHeader h="25vh">
            <Image target="_blank" width="50vw" h="20vh" src={props.src} alt='image' borderRadius="lg" />
          </CardHeader>

          <Stack px="1rem" mt='6' spacing='3'>
            <Heading size='md'>{props.head}</Heading>
            <Text h="18vh">{props.body}</Text>
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


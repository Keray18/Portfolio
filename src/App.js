import React from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import { Flex } from '@chakra-ui/react'
import './App.css'



const App = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <Home />
      <Contact />
      <Flex justify="center" alignItems="center">
        <footer>@copyright {year}</footer>
      </Flex>
    </>
  )
}

export default App
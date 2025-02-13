'use client'

import Navbar from "./components/navbar";
import Content from "./components/content";
import { Box, Container, Text } from "@chakra-ui/react";
import { useState } from "react";
import MainDisplay from "./components/Landing/mainDisplay";
import SecondDisplay from "./components/Landing/secondDisplay";

function HomeContent(){
  const [mainDisplay, setMainDisplay] = useState(true)
  const [secondDisplay, setSecondDisplay] = useState(false)

  return (
    <Box bg={"#222a38"}>
      <Container
        >
        { mainDisplay ? (

          <MainDisplay 
            currentValue={mainDisplay} 
            callback={setMainDisplay} 
          />
        
        ) : <SecondDisplay currentValue={mainDisplay} callback={setMainDisplay} />}
      </Container>
    </Box>
  )
}

export default function Home() {
  return (
    <>
      <Navbar /> 
      <Content content={HomeContent()} />
    </>
  )
}

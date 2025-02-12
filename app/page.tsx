'use client'

import Navbar from "./components/navbar";
import Content from "./components/content";
import { Box, Container, Heading, Stack, Text, Image, Center } from "@chakra-ui/react";

function HomeContent(){
  return (
    <Box bg={"#222a38"}>
      <Container>
        <Stack
          py={{base: 150, md:170}}
          textAlign={"center"}>
          
          <Center>
            <Image
              src={"./assets/Mahen.JPG"} 
              alt="MHEN007"
              borderRadius={"full"}
              boxSize={{base: 100, sm:130, md: 200}}/>
          </Center>

          <Heading 
            py={{base:5, sm: 10}}
            fontSize={{base: "2xl", sm: "3xl", md: "4xl"}}
            color={"gray.200"}>

            A smile is a universal welcome <br />
            <Text as={"i"}>
              - Max Eastman
            </Text>
          </Heading>

          <Text 
            color={"gray.200"}
            fontSize={{base:"l", sm:"xl"}}>
            Hi, my name is Matthew. Welcome to my portofolio! <br />
            
            I am an informatics student with interests in database technology, data management, data science, machine learning, and most importantly, software engineering.

            I have experiences in developing mobile apps, fullstack websites including backend services, machine learning models including NLP Models, CNN, and their frameworks such as PyTorch, and database design.
          </Text>
        </Stack>
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

'use client'

import { Box, Flex, Heading, List, ListIcon, ListItem, Stack, Text, UnorderedList, Image } from "@chakra-ui/react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Content from "../components/content"
import { CalendarIcon, ViewIcon } from "@chakra-ui/icons"

function AboutMe(){
    return(
        <Stack py={{base:100, sm:150}} px={{base:5, sm:10}} color={"gray.200"}>
            <Flex justify="flex-start" direction={{ base: "column", sm: "row" }}>
                <Box bgColor={"gray.300"} px={15} py={10} width={{base:"100%", sm:"50%"}} color="gray.600">
                    <Heading py={5}>A Brief Summary...</Heading>
                    <Text>I am a informatics engineering student with interest in machine learning and database management. I am experienced in programming languages such as Python, SQL, Java, Go, and basic bash programming. I have experience in creating machine learning models, developed databases, and currently developing a machine learning model to predict query workload performance in a DBMS. I have experiences in team work and coordination as the coordinator of teaching assistants in a college course.</Text>
                </Box>

                <Image
                ml={"15%"}
                src={"./assets/Mahen.JPG"} 
                alt="MHEN007"
                borderRadius={"full"}
                boxSize={{base: 150, sm:200, md: 300}}
                display={{base: "none", sm:"block"}}/>
            </Flex>

            <Flex justify="flex-end" direction={{base: "column", sm:"row"}}>
                <Image
                mr={"15%"}
                src={"./assets/work-illu.jpg"}
                alt={"Work Illustration"}
                boxSize={{base: 150, sm:200, md: 300}}
                display={{base: "none", sm:"block"}}/>

                <Box bgColor={"gray.600"} px={15} py={10} flex={"right"} width={{base:"100%", sm:"50%"}} color="gray.300">
                    <Heading py={5}>My Professional Experiences</Heading>
                    <List spacing={3}>

                        <ListItem>
                            <ListIcon as={CalendarIcon}/>
                            Part-Time Software Engineer at EduBeyond (Feb 2025 - Now)
                        </ListItem>

                        <ListItem>
                            <ListIcon as={CalendarIcon}/>
                            Bangkit Academy 2024 Machine Learning Cohort
                        </ListItem>

                        <ListItem>
                            <ListIcon as={ViewIcon}/>
                            Computer Vision Engineer Intern at Bank Central Asia (Jun - Aug 2024)
                        </ListItem>

                    </List>
                </Box>
            </Flex>

            <Flex justify="flex-start" direction={{base: "column", sm:"row"}}>
                <Box bgColor={"gray.300"} px={15} py={10} width={{base:"100%", sm:"50%"}} color="gray.600">
                    <Heading py={5}>Certifications</Heading>
                    <UnorderedList>
                        <ListItem>
                            Machine Learning Specialization by Deeplearning.AI (October 2024)
                        </ListItem>
                    </UnorderedList>
                </Box>

                <Image
                ml={"15%"}
                src={"./assets/certificate.jpeg"}
                alt={"Certificate"}
                boxSize={{base: 150, sm:200, md: 300}}
                display={{base: "none", sm:"block"}}/>
            </Flex>
        </Stack>
    )
}

export default function aboutPage(){
    return(
        <>
        <Navbar />
        <Content content={<AboutMe />} />
        <Footer />
        </>
    )
}
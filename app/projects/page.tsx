'use client'

import { Card, CardBody, CardHeader, Grid, GridItem, Heading, Stack, Text, Image, CardFooter, Button, Spacer, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Link, Center } from "@chakra-ui/react"
import Content from "../components/content"
import Navbar from "../components/navbar"
import projects from "./projects.json"
import Footer from "../components/footer"

function ProjectItem( { title, short_description, full_description, link, image } : { title: string, short_description: string, full_description: string, link: string, image: string }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <GridItem>
            <Card m={5} bg={"gray.900"} >
                <CardHeader>
                    <Center>
                        <Image src={`./assets/${image}`} alt={"project image"} boxSize={200}/>
                    </Center>
                </CardHeader>
                <CardBody color={"gray.100"}>
                    <Heading fontSize={"2xl"}>
                        {title}
                    </Heading>
                    <Text fontSize={"lg"}>
                        {short_description}
                    </Text>
                </CardBody>
                <CardFooter>
                    <Flex gap={2}>
                        <Button onClick={onOpen}>
                            View More
                        </Button>
                        <Spacer />
                        {
                            link === "" ? null : 
                            <Link href={link}>
                                <Button>
                                    View Project
                                </Button>
                            </Link>
                        }
                        
                    </Flex>
                </CardFooter>
            </Card>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"gray.800"} color={"gray.200"} minW={{base:"20em", sm:"30em", md:"45em"}}>
                    <ModalHeader>
                        <Heading mb={5}>
                            {title}
                        </Heading>
                        <Center>
                            <Image src={`./assets/${image}`} alt={"project image"} h="70%" w={"70%"}/>
                        </Center>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        {full_description}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='gray' mr={3} onClick={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </GridItem>
    )
}

function ProjectContent() {
    return (
        <Stack
            py={{base:100, sm:150}}
            px={{base:0, sm:10}}
            >
            <Heading
                textAlign={"center"}
                color={"gray.200"}>
                Projects
            </Heading>
            <Text textAlign={"center"} color={"gray.200"} fontSize={{base: "m", sm:"l"}}>
                I&#39;ve selected some of my many projects to showcase here. The complete list can be viewed on my <Link href={"https://github.com/MHEN007"}>Github</Link>.
            </Text>
            
            <Grid templateColumns={{base:'repeat(1, 1fr)', sm:'repeat(2, 1fr)', md: 'repeat(3, 1fr)'}}>
                {
                    projects.map((project: { title: string; short_description: string; full_description: string; link: string; image: string }) => {
                        return (
                            <ProjectItem
                                key={project.title}
                                title={project.title}
                                short_description={project.short_description}
                                full_description={project.full_description}
                                link={project.link}
                                image={project.image}
                            />
                        )
                    })  
                }
            </Grid>
        </Stack>
    )
}

export default function Projects() {
    return (
        <>
        <Navbar />
        <Content content={<ProjectContent />} />
        <Footer />
        </>
    )
}
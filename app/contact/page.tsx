'use client'

import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Content from "../components/content";
import Navbar from "../components/navbar";
import { Icon } from "@chakra-ui/icons";
import { SocialIcon } from "react-social-icons";
import Footer from "../components/footer";

function ContactContent(){
    return (
        <Stack py={{base:100, sm:150}} px={{base:5, sm:10}} color={"gray.200"}>
            <Heading textAlign={"center"}>
                Contact Me
            </Heading>
            
            <Text textAlign={"center"}>
                If you would like to contact me, feel free to reach out on these platforms
            </Text>

            <Center>
                <Box mb={4}>
                    <Flex gap='2' p={5}>
                        <Center>
                            <Icon as={SocialIcon} url="https://www.linkedin.com/in/matthew-mahendra-117845214/" />
                        </Center>
                        <Center>
                            <Icon as={SocialIcon} url="https://github.com/MHEN007" />
                        </Center>
                        <Center>
                            <Icon as={SocialIcon} url="https://www.instagram.com/matt_mahen/" />
                        </Center>
                    </Flex>
                </Box>
            </Center>

        </Stack>
    )
}

export default function Contact(){
    return (
        <>
        <Navbar />
        <Content content={<ContactContent />} />
        <Footer />
        </>
    )
}
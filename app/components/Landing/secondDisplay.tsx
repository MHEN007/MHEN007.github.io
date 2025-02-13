import { Text, Box, Heading, HStack, List, ListIcon, ListItem, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { FaBook } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"

const SecondDisplay = ({ currentValue, callback }: { currentValue: boolean, callback: (value: boolean) => void }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isHoveredNext, setIsHoveredNext] = useState(false)
    return (
        <Stack 
            py={{base: 150, md:170}} 
            display={"flex"} 
            flexDirection={"column"}
            color={"gray.200"}
            animation={"fadeIn 2s"}
            css={{
                "keyframes fadeIn": {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                }
            }}
        >
            <Heading 
                color={"gray.200"}
                fontSize={{base: "xl", sm: "2xl", md: "4xl"}}
            >
                Professional Experience
            </Heading>

            <Box 
                bg={"gray.500"} 
                height={{base:"1", sm:"1", md:"1"}}
                width={{base:"50%", sm:"40%", md:"50%"}}
            />

            <List spacing={3}>
                <ListItem>
                    <ListIcon as={FaGear}/>
                    Part-Time Software Engineer @ EduBeyond (NextJS, React, Drizzle, PostgreSQL, Python)
                </ListItem>

                <ListItem>
                    <ListIcon as={FaGear}/>
                    Data Science Intern @ BCA (Python, PyTorch)
                </ListItem>

                <ListItem>
                    <ListIcon as={FaBook}/>
                    Database System Course Teaching Assistant Coordinator @ ITB
                </ListItem>

                <ListItem>
                    <ListIcon as={FaBook}/>
                    Database Course Teaching Assistant @ ITB
                </ListItem>
            </List>

            <Heading 
                pt={20} 
                color={"gray.200"}
                fontSize={{base: "xl", sm: "2xl", md: "4xl"}}
            >
                Programming Languages
            </Heading>

            <Box 
                bg={"gray.500"} 
                height={{base:"1", sm:"1", md:"1"}}
                width={{base:"50%", sm:"40%", md:"50%"}}
            />

            <Text>Python, JavaScript, TypeScript, Java, SQL, C, C++, C#</Text>

            <HStack pt={10} display={"flex"} justifyContent={"space-between"}>
                <Heading 
                    fontSize={{base: "m", sm: "l", md: "xl"}}
                    color={isHovered ? "#9F2B68" : "gray.200"} 
                    onClick={() => {
                        callback(!currentValue)
                    }}
                    onMouseEnter={() => {
                        setIsHovered(true)
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false)
                    }}
                >
                    {"<<< Previous"}
                </Heading>
                <Heading 
                    fontSize={{base: "m", sm: "l", md: "xl"}} 
                    color={isHoveredNext ? "#9F2B68" : "gray.200"} 
                    onClick={() => window.location.href='/projects'}
                    onMouseEnter={() => {
                        setIsHoveredNext(true)
                    }}
                    onMouseLeave={() => {
                        setIsHoveredNext(false)
                    }}
                >
                    {"Projects >>>"}
                </Heading>
            </HStack>
        </Stack>
    )
}

export default SecondDisplay
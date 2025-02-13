import { Box, Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";

const MainDisplay = ( {currentValue, callback} : {currentValue: boolean, callback: (e: boolean) => void}) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <Stack
          py={{base: 150, md:170}}
          display={"flex"}
          flexDirection={"column"}
          animation={"fadeIn 2s"}
          css={{
            "@keyframes fadeIn": {
                from: { opacity: 0 },
                to: { opacity: 1 }
            }
            }}
        >
          <Heading 
            color={"gray.200"}
            fontSize={{base: "xl", sm: "2xl", md: "4xl"}}       
            >
            Hi, I am Mahen and Welcome to my Website
          </Heading>
          
          <Box 
            bg={"gray.500"} 
            height={{base:"1", sm:"1", md:"1"}}
            width={{base:"50%", sm:"40%", md:"50%"}}
          />

          <List spacing={3}>
            <ListItem 
              color={"gray.200"}
              fontSize={{base: "sm", sm: "md", md: "lg"}}
              fontFamily={"mono"}
            >
              <ListIcon as={FaCircle} color={"gray.200"}/>
              Fullname: Matthew <u>Mahen</u>dra
            </ListItem>


            <ListItem 
              color={"gray.200"}
              fontSize={{base: "sm", sm: "md", md: "lg"}}
              fontFamily={"mono"}
            >
              <ListIcon as={FaCircle} color={"gray.200"}/>
              Software Engineer; Database and ML Enthusiast
            </ListItem>

            <ListItem
              color={"gray.200"}
              fontSize={{base: "sm", sm: "md", md: "lg"}}
              fontFamily={"mono"}>
                <ListIcon as = {FaCircle} color={"gray.200"} />
                Pursuing a bachelor's degree for computer science at Bandung Institute of Technology (fourth year)
            </ListItem>

            <ListItem
              color={"gray.200"}
              fontSize={{base: "sm", sm: "md", md: "lg"}}
              fontFamily={"mono"}>
                <ListIcon as = {FaCircle} color={"gray.200"} />
                Based in Indonesia
            </ListItem>

            <ListItem
              color={"gray.200"}
              fontSize={{base: "sm", sm: "md", md: "lg"}}
              fontFamily={"mono"}>
                <ListIcon as = {FaCircle} color={"gray.200"} />
                I swim as a hobby
            </ListItem>
          </List>

          <Box display={"flex"} justifyContent={"flex-end"}>
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
              {"Next >>>"}
            </Heading>
          </Box>
        </Stack>
    );
}

export default MainDisplay;
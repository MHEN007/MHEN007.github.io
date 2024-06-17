import { Box, Text } from "@chakra-ui/react";

export default function Footer(){
    return(
        <Box bg={"gray.800"} textAlign={"center"} p={10}>
            <Text color={"gray.50"} fontSize={{base: "md", sm: "lg", "md": "lg"}}>
                Made using Next.JS and Chakra-UI by
                MHEN007
            </Text>
        </Box>
    )
}
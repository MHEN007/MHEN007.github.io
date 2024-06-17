import { Box } from "@chakra-ui/react";

export default function Content({ content } : { content: React.ReactNode } ){
    return (
        <Box bg={"#222a38"} minH={"100vh"}>
            {content}
        </Box>
    )
}
import NextLink from 'next/link'
import { Box, Flex, Link, Spacer, Text } from '@chakra-ui/react'

function NavItem({ text }: { text: string }) {
  return (
    <Box p={2}>
      <Text 
        color={"gray.50"} 
        fontSize={{"base": "sm", "sm": "md", "md": "2xl"}}>
        {text}
      </Text>
    </Box>
  )
}

export default function Navbar() {
  return (
    <Box 
      bg={"gray.700"} 
      p={{base: "0.5em", sm: "1em", md: "1em"}}
      position={"fixed"}
      top={0}
      right={0}
      left={0}
      zIndex={1000}
      boxShadow={"xl"}
      fontFamily={"mono"}>
      <Flex>
        <Link as={NextLink} href="/">
          <Text 
            color={"gray.50"} 
            fontSize={{"base": "xl", "sm": "2xl", "md": "3xl"}} 
            as="b" 
            p={1}>
            MHEN007
          </Text>
        </Link>

        <Spacer />

        {/* <Link as={NextLink} href="/about">
          <NavItem text={"About Me"} />
        </Link> */}

        <Link as={NextLink} href="/projects">
          <NavItem text={"Projects"} />
        </Link>

        <Link as={NextLink} href="/contact">
          <NavItem text={"Contact"} />
        </Link>
      </Flex>
    </Box>
  )
}
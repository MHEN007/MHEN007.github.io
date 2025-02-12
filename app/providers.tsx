'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const fonts = {
  heading: 'Open Sans, sans-serif',
  body: 'Open Sans, sans-serif',
  mono: 'ubuntu mono, monospace',
}

const theme = extendTheme({ fonts })

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
import { ChakraProvider } from '@chakra-ui/react'

import { AnimatePresence } from 'framer-motion'

import MainLayout from '@/components/Layout/MainLayout'

import theme from '@/lib/theme'
import Font from '@/font'

export default function App ({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <MainLayout router={router}>
        <AnimatePresence
          initial
          mode='wait'
        >
          <Component
            key={router.route}
            {...pageProps}
          />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  )
}

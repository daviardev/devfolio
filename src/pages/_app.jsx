import { ChakraProvider } from '@chakra-ui/react'

import MainLayout from '@/components/Layout/MainLayout'

import theme from '@/lib/theme'
import Font from '@/font'

export default function App ({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <MainLayout router={router}>
        <Component
          key={router.route}
          {...pageProps}
        />
      </MainLayout>
    </ChakraProvider>
  )
}

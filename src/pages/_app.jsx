import { ChakraProvider } from '@chakra-ui/react'

import MainLayout from '@/components/Layout/MainLayout'

export default function App ({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <MainLayout router={router}>
        <Component
          key={router.route}
          {...pageProps}
        />
      </MainLayout>
    </ChakraProvider>
  )
}

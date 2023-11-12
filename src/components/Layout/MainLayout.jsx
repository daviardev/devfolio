import Head from 'next/head'

import { Box, Container } from '@chakra-ui/react'

import Navbar from '../Navbar'
import Footer from '../Footer'

export default function MainLayout ({ children, router }) {
  return (
    <Box
      as='main'
      pb={8}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta name='description' content='Website portfolio by daviardev' />

        <meta name='author' content='Jerson David Silva Arjona' />
        <meta name='author' content='daviardev' />

        <link rel='icon' href='/favicon.png' />

        <title>Jerson Silva Arjona · Inicio</title>
      </Head>

      <Navbar
        path={router.asPath}
      />

      <Container
        pt={14}
        maxw='container.md'
      >
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

import Link from 'next/link'

import { Box, Heading, Container, Divider, Text, Button } from '@chakra-ui/react'

export default function NotFound () {
  return (
    <>
      <Container>
        <Heading
          as='h1'
        >
          Página no encontrada
        </Heading>
        <Text>La página que intenta acceder no fue encontrada</Text>

        <Divider my={6} />

        <Box
          my={6}
          align='center'
        >
          <Button
            as={Link}
            href='/'
            colorScheme='teal'
          >
            Regresar al inicio
          </Button>
        </Box>
      </Container>
    </>
  )
}

import { Box, Heading, Container } from '@chakra-ui/react'

export default function Home () {
  return (
    <>
      <Container>
        <Box
          p={3}
          mb={6}
          bg='blue.200'
          textAlign='center'
          borderRadius='lg'
        >
          Hola, soy Jerson David Silva Arjona, soy de Colombia
        </Box>

        <Box
          display={{ md: 'flex' }}
        >
          <Box
            flexGrow={1}
          >
            <Heading
              as='h2'
              variant='page-title'
            >
              Daviardev
            </Heading>
            <p>Un gran apasionado por la programación web.</p>
          </Box>
        </Box>
      </Container>
    </>
  )
}

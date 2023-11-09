import { Box, Heading, Container, Image, useColorModeValue } from '@chakra-ui/react'

export default function Home () {
  return (
    <>
      <Container>
        <Box
          p={3}
          mb={6}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
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
          <Box
            flexShrink={0}
            mt={{
              base: 4,
              md: 0
            }}
            ml={{
              md: 6
            }}
            align='center'
          >
            <Image
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100%'
              display='inline-block'
              borderRadius='100%'
              width={100}
              height={100}
              src='https://avatars.githubusercontent.com/u/65743790?v=4'
              alt='Jerson David Silva Arjona (daviardev)'
            />
          </Box>
        </Box>
      </Container>
    </>
  )
}

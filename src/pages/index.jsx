import Link from 'next/link'

import { Box, Heading, Container, Image, Button, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Section from '@/components/Section'
import Paragraph from '@/components/Paragrahp'
import { BioSection, BioYear } from '@/components/Bio'

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
        <Section
          delay={0.1}
        >
          <Heading
            as='h3'
            variant='section-title'
          >
            Sobre mi
          </Heading>
          <Paragraph>
            Soy un Programador Web, me apasiona la programación en todos sus aspectos, pero me especializo en el lado del cliente.
            Por lo general uso Framework y librerías de JavaScript como Next.js y React.js para crear mis proyectos. Me gusta ayudar a los demás, seguir aprendiendo y no parar de aprender.
          </Paragraph>
          <Box
            align='center'
            my={4}
          >
            <Link href='/proyectos'>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme='teal'
              >
                Mis proyectos
              </Button>
            </Link>
          </Box>
        </Section>
        <Section
          delay={0.2}
        >
          <Heading
            as='h3'
            variant='section-title'
          >
            Biografía
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Nací en Santa Marta / Colombia
          </BioSection>
          <BioSection>
            <BioYear>2020 / 2022</BioYear>
            Estudié programación web por mi cuenta
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Me gradué como técnico profesional en sistemas informáticos en la universidad unibarranquilla (ITSA)
          </BioSection>
          <BioYear>2023</BioYear>
          Estudié programación de software en el SENA
          <BioSection>
            <BioYear>2023 / 2024</BioYear>
            Hice mis prácticas en la empresa Trading Group en el área TI
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading
            as='h3'
            variant='section-title'
          >
            Me ♥
          </Heading>
          <Paragraph>
            Programación web, música, JS, ReactJS, Astro
          </Paragraph>
        </Section>
      </Container>
    </>
  )
}

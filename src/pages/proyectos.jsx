import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Section from '../components/Section'

import { WorkGridItem } from '../components/GridItem'

export default function Proyectos () {
  return (
    <>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Proyectos
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id='finderdev' title='Finderdev' thumbnail='https://midu.dev/images/wallpapers/una-taza-de-javascript.png'>
              Aplicacion que busca entre los perfiles de usuario de GitHub
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id='finderdev' title='Finderdev' thumbnail='https://midu.dev/images/wallpapers/una-taza-de-javascript.png'>
              Aplicacion que busca entre los perfiles de usuario de GitHub
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id='finderdev' title='Finderdev' thumbnail='https://midu.dev/images/wallpapers/una-taza-de-javascript.png'>
              Aplicacion que busca entre los perfiles de usuario de GitHub
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id='finderdev' title='Finderdev' thumbnail='https://midu.dev/images/wallpapers/una-taza-de-javascript.png'>
              Aplicacion que busca entre los perfiles de usuario de GitHub
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id='finderdev' title='Finderdev' thumbnail='https://midu.dev/images/wallpapers/una-taza-de-javascript.png'>
              Aplicacion que busca entre los perfiles de usuario de GitHub
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </>
  )
}

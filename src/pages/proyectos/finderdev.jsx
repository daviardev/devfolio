import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'

import ArticleLayout from '@/components/Layout/Article'
import P from '@/components/Paragrahp'

import { Title, WorkImage, Meta } from '@/components/Work'

export default function Work () {
  return (
    <ArticleLayout title='finderdev'>
      <Container>
        <Title>
          finderdev <Badge>2022</Badge>
        </Title>
        <P>
          Aplicacion para buscar perfiles de GitHub.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Deploy</Meta>
            <Link href='https://finderdev.vercel.app/'>
              https://finderdev.vercel.app/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Plataformas</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Herramientas</Meta>
            <span>HTML5, CSS3, JS, API Github</span>
          </ListItem>
        </List>

        <WorkImage
          src='https://preview.redd.it/6y5ejsagfbr51.png?auto=webp&s=e90ed8dd7019e55945e8f639c40c15f7a1d8255b'
          alt='Inkdrop'
        />
        <AspectRatio
          maxW='640px'
          ratio={1.7}
          my={4}
        >
          <iframe
            src=''
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </AspectRatio>
      </Container>
    </ArticleLayout>
  )
}

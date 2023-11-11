import NextLink from 'next/link'

import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Link
      as={NextLink}
      href='/proyectos'
    >
      Proyectos
    </Link>
    <span>
      {' '}
      <ChevronRightIcon /> {' '}
    </span>
    <Heading
      as='h3'
      mb={4}
      display='inline-block'
      fontSize={20}
    >
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image
    w='full'
    mb={4}
    src={src}
    alt={alt}
    borderRadius='lg'
  />
)

export const Meta = ({ children }) => (
  <Badge
    colorScheme='green'
    mr={2}
  >
    {children}
  </Badge>
)

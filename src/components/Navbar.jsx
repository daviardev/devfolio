import NextLink from 'next/link'

import {
  Box,
  Link,
  Flex,
  Menu,
  Stack,
  Heading,
  MenuList,
  MenuItem,
  Container,
  IconButton,
  MenuButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import Logo from './Logo'

export const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      w='100%'
      as='nav'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{
        backdropFilter: 'blur(10px)'
      }}
      zIndex={1}
      position='fixed'
      {...props}
    >
      <Container
        p={2}
        wrap='wrap'
        maxW='container.md'
        display='flex'
        align='center'
        justifyContent='space-between'
      >
        <Flex
          mr={5}
          align='center'
        >
          <Heading
            as='h1'
            size='lg'
            letterSpacing='tighter'
          >
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{
            base: 'column',
            md: 'row'
          }}
          display={{
            base: 'none',
            md: 'flex'
          }}
          width={{
            base: 'full',
            md: 'auto'
          }}
          alignItems='center'
          mt={{
            base: 4,
            md: 0
          }}
        >
          <LinkItem
            href='/proyectos'
            path={path}
          >
            Proyectos
          </LinkItem>
          <LinkItem
            href='/recursos'
            path={path}
          >
            Recursos
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar

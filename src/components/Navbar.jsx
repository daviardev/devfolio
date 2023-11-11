import NextLink from 'next/link'
import { forwardRef } from 'react'

import Logo from './Logo'

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import ThemeToggleButton from './theme-toggle-button'

import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

export default function Navbar (props) {
  const { path } = props

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        wrap='wrap'
        align='center'
        justify='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing='tighter'>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href='/proyectos' path={path}>
            Proyectos
          </LinkItem>
          <LinkItem href='/recursos' path={path}>
            Recursos
          </LinkItem>
          <LinkItem
            target='_blank'
            href='https://github.com/daviardev'
            path={path}
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Mi perfil
          </LinkItem>
        </Stack>

        <Box flex={1} align='right'>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <MenuItem as={MenuLink} href='/'>
                  Inicio
                </MenuItem>
                <MenuItem as={MenuLink} href='/proyectos'>
                  Proyectos
                </MenuItem>
                <MenuItem as={MenuLink} href='/recursos'>
                  Recursos
                </MenuItem>
                <MenuItem
                  as={Link}
                  href='https://github.com/daviardev'
                  display='inline-flex'
                  alignItems='center'
                  style={{ gap: 4 }}
                  pl={2}
                >
                  <IoLogoGithub />
                  Mi perfil
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

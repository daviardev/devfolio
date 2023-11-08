import Link from 'next/link'

import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'
import Dev from './Icons/Dev'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    & > svg {
        transition: transform 200ms ease;
    }

    &:hover svg {
        transform: rotate(20deg);
    }
`

export default function Logo () {
  return (
    <>
      <Link href='/'>
        <LogoBox>
          <Dev />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight='bold'
            fontFamily='M PLUS Rounded 1c'
          >
            Jerson Silva Arjona
          </Text>
        </LogoBox>
      </Link>
    </>
  )
}

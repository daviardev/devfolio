import Link from 'next/link'

import Dev from '../assets/images/icons8-desarrollador-60.png'

import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    & > img {
        transition: transform 200ms ease;
    }

    &:hover img {
        transform: rotate(20deg);
    }
`

export default function Logo () {
  return (
    <>
      <Link href='/'>
        <LogoBox>
          <img
            src='../assets/images/icons8-desarrollador-60.png'
            alt=''
            width={20}
            height={20}
          />
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

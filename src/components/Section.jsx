import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StylesDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export default function Section ({ children, delay = 0 }) {
  return (
    <StylesDiv
      initial={{
        y: 10,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.8,
        delay
      }}
      mb={6}
    >
      {children}
    </StylesDiv>
  )
}

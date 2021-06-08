import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from '@becoswap-libs/uikit'
import Container from 'components/layout/Container'
import { useTranslation } from 'contexts/Localization'

const getGradient = (isDark: boolean) => {
  if (isDark) {
    return 'repeating-linear-gradient(to right, #332453, #332453 40px, #281D44 40px, #281D44 80px)'
  }

  return 'linear-gradient(139.73deg, rgb(255 255 255) 0%, rgb(27 152 94) 100%)'
}

const StyledHero = styled.div`
  background: ${({ theme }) => getGradient(theme.isDark)};
  padding-bottom: 40px;
  padding-top: 40px;
`

const CurtainBottom = styled.div``

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box mb="32px">
      <StyledHero>
        <Container>
          <Heading as="h1" size="xl" mb="24px">
            {t('Launchpad')}
          </Heading>
          <Text bold fontSize="20px">
            {t('Buy new tokens with BECO-LP.')}
          </Text>
        </Container>
      </StyledHero>
      <CurtainBottom />
    </Box>
  )
}

export default Hero

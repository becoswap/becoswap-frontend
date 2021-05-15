import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from '@becoswap-libs/uikit'
import Container from 'components/layout/Container'
import { useTranslation } from 'contexts/Localization'

const getGradient = (isDark: boolean) => {
  if (isDark) {
    return 'repeating-linear-gradient(to right, #332453, #332453 40px, #281D44 40px, #281D44 80px)'
  }

  return 'repeating-linear-gradient(to right, #21d4e2, #21d4e2 40px, #53dee9 40px, #53dee9 80px)'
}

const StyledHero = styled.div`
  background: ${({ theme }) => getGradient(theme.isDark)};
  padding-bottom: 40px;
  padding-top: 40px;
`

const CurtainBottom = styled.div`
  background-image: url('/images/curtain-bottom-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.png');
  background-repeat: repeat-x;
  background-size: contain;
  height: 20px;
`

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
            {t('Launchpad will be start soon')}
          </Text>
        </Container>
      </StyledHero>
      <CurtainBottom />
    </Box>
  )
}

export default Hero

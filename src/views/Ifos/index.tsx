import { ButtonMenu, ButtonMenuItem, Flex } from '@becoswap-libs/uikit'
import Container from 'components/layout/Container'
import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import { ifosConfig } from 'config/constants'
import Hero from './components/Hero'
import PastIfo from './PastIfo'
import CurrentIfo from './CurrentIfo'
import ApplyIfo from './ApplyIfo'

const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const Ifos = () => {
  const { path, url, isExact } = useRouteMatch()
  return (
    <>
      <Hero />
      <Container>
        <Flex justifyContent="center" alignItems="center" mb="32px">
          <ButtonMenu activeIndex={!isExact ? 1 : 0} scale="sm" variant="subtle">
            <ButtonMenuItem as={Link} to={`${url}`}>
              Next IFO
            </ButtonMenuItem>
            <ButtonMenuItem as={Link} to={`${url}/history`}>
              Past IFOs
            </ButtonMenuItem>
          </ButtonMenu>
        </Flex>
        <Route exact path={`${path}`}>
          {activeIfo !== undefined ? <CurrentIfo /> : <ApplyIfo />}
        </Route>
        <Route path={`${path}/history`}>
          <PastIfo />
        </Route>
      </Container>
    </>
  )
}

export default Ifos

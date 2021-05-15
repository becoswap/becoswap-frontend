import React from 'react'

import Hero from './components/Hero'


const Ifos = () => {

  return (
    <>
      <Hero />
      {/* <Container>
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
          <CurrentIfo />
        </Route>
        <Route path={`${path}/history`}>
          <PastIfo />
        </Route>
      </Container> */}
    </>
  )
}

export default Ifos

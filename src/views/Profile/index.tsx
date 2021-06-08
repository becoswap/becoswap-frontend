import React from 'react'
import { useWeb3React } from '@web3-react/core'
import Page from 'components/layout/Page'
import PageLoader from 'components/PageLoader'
import { useFetchAchievements, useProfile } from 'state/hooks'

const Profile = () => {
  const { isInitialized, isLoading, hasProfile } = useProfile()
  const { account } = useWeb3React()

  useFetchAchievements()

  if (!isInitialized || isLoading) {
    return <PageLoader />
  }

  if (account && !hasProfile) {
    return <Page>Come back soon!{/* <ProfileCreation /> */}</Page>
  }

  return (
    <Page>
      Come back soon!
      {/* <Header />
      <Route exact path="/profile">
        <PublicProfile />
      </Route>
      <Route path="/profile/tasks">
        <TaskCenter />
      </Route> */}
    </Page>
  )
}

export default Profile

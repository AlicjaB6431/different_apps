import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from './Navigation/SideBar'
import Page from './Page'
import { useState, useEffect } from 'react'
import axios from 'axios'

import styled from 'styled-components'

const App = () => {
 

  return (
    <Router>
      <MainWrapper>
        <NavigationContainer>
          <SideBar />
        </NavigationContainer>
        <PageContainer>
        
          <Page />
        </PageContainer>
      </MainWrapper>
    </Router>
  )
}

export default App
const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`
const NavigationContainer = styled.div``
const PageContainer = styled.section``
// miejsce, gdzie wyświetlam tylko wszystkie swtorzone elementy

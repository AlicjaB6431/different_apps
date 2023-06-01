import styled from 'styled-components'
import Header from './Header'
import Home from './Home'


const QuizApp = () => {
  return (
    <MainWrapper>
      <Header />
      <Home />
    </MainWrapper>
  )
}

export default QuizApp

const MainWrapper = styled.div`
  width: 100vh;
  height: 100vh;
  background-color: #8f8fbb;
`

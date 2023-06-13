import styled from 'styled-components'
import Header from './Header'
import Home from './Home'

const QuizApp = () => {
  return (
    <MainWrapper>
      <BackgroundImage
        alt=''
        imgOpacity={'0.4'}
      />
      <Header />
      <Home />
    </MainWrapper>
  )
}

export default QuizApp

const MainWrapper = styled.div`
display: flex;
height: 90%;
width: 100%;
justify-content: center;
`

const BackgroundImage = styled.img<{ imgOpacity: string }>`

`

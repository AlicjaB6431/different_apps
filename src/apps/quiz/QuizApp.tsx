import styled from 'styled-components'
import Header from './Header'
import Home from './Home'
import backgroundImage from '../quiz/img/background.jpg'

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
  width: 100vh;
  height: 100vh;
`

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  opacity: ${(props) => props.imgOpacity};
  z-index: -10;
  background-size: cover;
`



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
display: flex;
height: 90vh;
align-items: center;
justify-content: center;
`

const BackgroundImage = styled.img<{ imgOpacity: string }>`
  /* position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  opacity: ${(props) => props.imgOpacity};
  z-index: -10;
  background-size: cover; */
`

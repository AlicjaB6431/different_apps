import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ResultImage from '../quiz/img/results.png'

const QuizResult = () => {
  const location = useLocation()
  const { name, score } = location.state

  return (
    <ResultWrapper>
      <ImageContainer
        src={ResultImage}
        alt='wykres przedstawiający wyniki'
      />
      <ResultContainer>{name}</ResultContainer>
      <ResultContainer>twój wynik: {score}</ResultContainer>

      <LinkContainer to='/quiz-app'>Strona początkowa</LinkContainer>
    </ResultWrapper>
  )
}

export default QuizResult

const ResultWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
`
const ImageContainer = styled.img`
  width: 40%;
  height: auto;
`
const ResultContainer = styled.h2`
  text-transform: uppercase;
  margin-top: 10px;
`
const LinkContainer = styled(Link)`
  padding: 20px;
  margin-top: 20px;
  text-decoration: none;
  color: black;
  font-size: 1.6rem;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 255, 0.2);
`

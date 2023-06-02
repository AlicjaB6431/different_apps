import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Question from './Question'
import styled from 'styled-components'
import backgroundImage from '../quiz/img/watercolor.jpg'

type UpdatedQuestionsType = {
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

const QuizzQuestions = () => {
  const [updatedQuestions, setUpdatedQuestions] = useState([])
  const [options, setOptions] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const location = useLocation()
  const { name, questions } = location.state

  useEffect(() => {
    setUpdatedQuestions(questions)
    setOptions(updatedQuestions && handleShuffle())
  }, [updatedQuestions, currentQuestion])

  const handleShuffle = () => {
    const shuffledOptions = [questions[currentQuestion]?.correct_answer, ...questions[currentQuestion]?.incorrect_answers]
    return shuffledOptions.sort(() => Math.random() - 0.5)
  }

  return (
    <MainWrapper>
      <BackgroundImage
        alt=''
        imgOpacity={'0.4'}
      />
      <NameContainer>Gra: {name}</NameContainer>
      {updatedQuestions ? (
        <QuestionCOntainer>
          <CategAndScoreContainer>
            <CategoryContainer>Kategoria: {updatedQuestions[currentQuestion]?.category}</CategoryContainer>
            <ScorreContainer>Wynik: {score}</ScorreContainer>
          </CategAndScoreContainer>

          {{ updatedQuestions } && (
            <Question
              options={options}
              setOptions={setOptions}
              score={score}
              setScore={setScore}
              correct={questions[currentQuestion]?.correct_answer}
              setCorrect={setCorrect}
              updatedQuestions={updatedQuestions}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              name={name}
            />
          )}
        </QuestionCOntainer>
      ) : null}
    </MainWrapper>
  )
}

export default QuizzQuestions

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  opacity: ${(props) => props.imgOpacity};
  z-index: -10;
  background-size: cover;
  margin-top: -20px;
`
const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  margin: 15px;
`
const NameContainer = styled.p`
  margin-top: 20px;
  font-weight: 800;
`
const CategAndScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
`
const CategoryContainer = styled.p``

const ScorreContainer = styled.p``
const QuestionCOntainer = styled.div``

import { useState } from 'react'
import styled, { css } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { UpdatedQuestionProps } from './types'



type QuestionProps = {
  options: string[]
  updatedQuestions: UpdatedQuestionProps[]
  score: number
  correct: string
  setOptions: (options: string[]) => void
  setScore: (score: number) => void
  setCurrentQuestion: (currentQuestion: number) => void
  currentQuestion: number
  name: string
}

type SingleButtonProps = {
  onClick: () => void
  disabled: boolean
  selectedState: string | undefined
  children: string
}

const Question = ({ options, updatedQuestions, score, setScore, correct, currentQuestion, setCurrentQuestion, name }: QuestionProps) => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('')
  const [error, setError] = useState(false)
  console.log({ updatedQuestions })

  const handleSelect = (opt: string) => {
    if (selected === opt && selected === correct) return 'select'
    else if (selected === opt && selected !== correct) return 'wrong'
  }

  const handleCheck = (opt: string) => {
    setSelected(opt)
    if (opt === correct) {
      setScore(score + 1)
    }
    setError(false)
    // handleSelect(opt)
  }

  function navigateToResults() {
    navigate('/quiz-app-results', { state: { name, score } })
  }

  const handleNextQuestion = () => {
    if (currentQuestion > 8) {
      navigateToResults()
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1)
      setSelected('')
    } else {
      setError(true)
    }
  }

  return (
    <QuestionWrapper>
      <h3>Pytanie {currentQuestion + 1}</h3>
      <div>
        <h4> {updatedQuestions[currentQuestion]?.question}</h4>
        {error && <p>{error}</p>}

        <ButtonContainer>
          {options &&
            options.map((opt) => (
              <SingleButton
                key={opt}
                onClick={() => {
                  handleCheck(opt)
                }}
                disabled={!!selected}
                selectedState={handleSelect(opt)}
              >
                {opt}
              </SingleButton>
            ))}
        </ButtonContainer>
      </div>
      <NextQuesButton onClick={handleNextQuestion}>Następne pytanie</NextQuesButton>
    </QuestionWrapper>
  )
}

export default Question

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SingleButton = styled.button<SingleButtonProps>`
  margin-top: 10px;
  padding: 10px;
  ${({ selectedState }) =>
    selectedState === 'select' &&
    css`
      background-color: green;
    `}

  ${({ selectedState }) =>
    selectedState === 'wrong' &&
    css`
      background-color: red;
    `}
`
const NextQuesButton = styled.button`
  margin-top: 10px;
  width: 30%;
  height: 40px;
`

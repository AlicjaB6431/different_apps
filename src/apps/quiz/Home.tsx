import HomeImage from './img/idea.png'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

type QuizType = {
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string
}

const Home = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [questions, setQuestions] = useState<QuizType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    handleDataFetch()
  }, [])

  function navigateToQuestions() {
    navigate('/quiz-app-questions', { state: { name, questions } })
  }

  const handleDataFetch = async () => {
    try {
      const URL = `https://opentdb.com/api.php?amount=10`
      const response = await fetch(URL)
      const data = await response.json()
      const quizQuestions = data.results
      setQuestions(quizQuestions)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(true)
      alert(err)
    }
  }

  const handleSubmit = () => {
    if (name === '') {
      setError(true)
    } else {
      setError(false)
      navigateToQuestions()
    }
  }

  return (
    <MainWrapper>
      <ImageContainer
        src={HomeImage}
        alt='rysunek, kobieta stojąca na drabinie przy dużej żarówce wypełnionej chmurami '
      />
      <ErrorContainer> {error ? <ErrTextContainer>Musisz wpisac imię</ErrTextContainer> : null}</ErrorContainer>
      <InputContainer>
        <NameContainer>Imię:</NameContainer>
        <UserNameContainer
          required
          type='text'
          name='userName'
          placeholder='Twoje imie...'
          onChange={(e) => setName(e.target.value)}
        />
        <NextPageButton
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'ładowanie' : 'Przejdź do quizu'}
        </NextPageButton>
      </InputContainer>
    </MainWrapper>
  )
}

export default Home

const MainWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
`

const ImageContainer = styled.img`
  width: 400px;
  border-radius: 10px;
  margin-top: 140px;
  border: 5px solid black;
`

const ErrorContainer = styled.span`
  position: absolute;
  width: 80%;
  max-width: 400px;
  margin-top: 460px;
`

const ErrTextContainer = styled.p`
  background-color: #f13b3b;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

const InputContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;
  margin-top: 580px;
`

const NameContainer = styled.label``

const UserNameContainer = styled.input`
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
`
const NextPageButton = styled.button`
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
`

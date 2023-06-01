import HomeImage from './img/quizTime.png'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export type QuizType = {
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
    navigate('/quiz-app-questions', { state: { name, questions, setQuestions } })
  }

  const handleDataFetch = async () => {
    try {
      const URL = `https://opentdb.com/api.php?amount=10`
      const response = await fetch(URL)
      const data = await response.json()
      const quizQuestions = data.results
      setQuestions(quizQuestions)
      console.log(questions)
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
      <div>Witamyw quizie, głowna strona, możesz wpisać swoje imie</div>
      <ImageContainer
        src={HomeImage}
        alt='obraz'
      />
      {error ? <p>Musisz wpisac imię</p> : null}
      <label>Imię:</label>
      <input
        type='text'
        name='userName'
        placeholder='Twoje imie...'
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'ładowanie' : 'Przejdź do quizu'}
      </button>
    </MainWrapper>
  )
}

export default Home

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ImageContainer = styled.img`
  width: 200px;
  height: 200px;
`

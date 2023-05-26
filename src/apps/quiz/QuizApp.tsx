import { useEffect, useState } from 'react'
import QuizQuestion from './QuizQuestions'

const QuizApp = () => {
  const [quiz, setQuiz] = useState([])

  const handleDataFetch = async () => {
    try {
      const URL = 'https://opentdb.com/api.php?amount=10'
      const response = await fetch(URL)
      const data = await response.json()
      const questions = data.results
      setQuiz(questions)
    } catch (err) {
      alert(err)
    }
  }
  return (
    <>
      <QuizQuestion
        quiz={quiz}
        handleDataFetch={handleDataFetch}
      />
    </>
  )
}

export default QuizApp

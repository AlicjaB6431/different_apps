import { useState } from 'react'
import QuizQuestion from './QuizQuestions'

const QuizApp = () => {
  const [quiz, setQuiz] = useState([])

  const URL = 'https://opentdb.com/api.php?amount=10'

  const handleDataFetch = () => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res
        }
      })
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results
        setQuiz(questions)
        console.log(quiz)
      })
  }
  return (
    <>
      <button onClick={handleDataFetch}>Zagraj</button>
      <QuizQuestion quiz={quiz} />
    </>
  )
}

export default QuizApp

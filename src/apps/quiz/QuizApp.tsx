import { useEffect, useState } from 'react'
import QuizQuestion from './QuizQuestions'

const QuizApp = () => {
  const [quiz, setQuiz] = useState([])

  async function handleDataFetch() {
    const response = await fetch('https://opentdb.com/api.php?amount=10')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const questions = data.results
    setQuiz(questions)
    console.log(quiz)
  }
  return (
    <>
      <button onClick={handleDataFetch}>Zagraj</button>
      <QuizQuestion quiz={quiz} />
    </>
  )
}

export default QuizApp

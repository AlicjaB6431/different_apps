import { useLocation } from 'react-router-dom'
import { QuizType } from './Home'

const QuizzQuestions = () => {
  const location = useLocation()
  const { name, questions, setQuestions } = location.state
  //   console.log(questions)

  const random = questions[Math.floor(Math.random() * questions.length)]
  const handleNextQuestion = () => {}
  return (
    <div>
      <div>Witaj : {name}</div>
      <div>
        <div>Category: {random.category}</div>
        <div>Question: {random.question}</div>
        <div>Correct Answer: {random.correct_answer}</div>
        <div>Incorrect Answers: {random.incorrect_answers}</div>
      </div>
      <button onClick={handleNextQuestion}>Kolejne pytanie</button>
    </div>
  )
}

export default QuizzQuestions

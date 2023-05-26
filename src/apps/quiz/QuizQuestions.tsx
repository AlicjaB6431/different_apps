
import Buttons from '../../components/Buttons'

interface QuizProps {
  quiz: string[]
  handleDataFetch: () => void
}

const QuizQuestion = ({ quiz, handleDataFetch }: QuizProps) => {
  
  const handleCLick = () => {
    handleDataFetch()
    
    const newQuiz = [...quiz]
    console.log(newQuiz)
    const random = newQuiz[Math.floor(Math.random() * newQuiz.length)]
    console.log(random)

  }

  return (
    <>
      <Buttons onClick={handleCLick}>Zagraj</Buttons>
    </>
  )
}

export default QuizQuestion

import { useState } from 'react'

const QuizQuestion = ({ quiz }) => {
  const handleCLick = () => {
    const newQuiz = { ...quiz }
    const random = newQuiz(Math.floor(Math.random() * newQuiz.length))
    console.log(random)
  }

  return (
    <>
      <button onClick={handleCLick}></button>
    </>
  )
}

export default QuizQuestion

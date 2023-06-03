import { Route, Router, Routes } from 'react-router-dom'

import RockPaperScisorsApp from '../apps/rock-paper/RockPaperScisorsApp'
import CreateTask from '../apps/to-do-list/CreateTask'
import QuizApp from '../apps/quiz/QuizApp'
import QuizzQuestions from '../apps/quiz/QuizzQuestions'
import QuizResult from '../apps/quiz/QuizResult'
import Blog from '../apps/blog/Blog'

const Page = () => {
  return (
    <Routes>
      <Route
        path='/rock-paper-scisors'
        element={<RockPaperScisorsApp />}
      ></Route>
      <Route
        path='/to-do-list'
        element={<CreateTask />}
      ></Route>
      <Route
        path='/quiz-app'
        element={<QuizApp />}
      ></Route>

      <Route
        path='/quiz-app-questions'
        element={<QuizzQuestions />}
      ></Route>
      <Route
        path='/quiz-app-results'
        element={<QuizResult />}
      ></Route>
      <Route
        path='/blog'
        element={<Blog />}
      ></Route>
    </Routes>
  )
}

export default Page


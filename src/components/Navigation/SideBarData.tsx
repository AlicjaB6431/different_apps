import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'

export const SideBarData = [
  { name: 'start', path: '/', exact: true, icon: <AiIcons.AiFillHome /> },
  { name: 'kamień-papier-nożyce', path: '/rock-paper-scisors', icon: <FaIcons.FaRegHandRock /> },
  { name: 'to-do-list', path: '/to-do-list', icon: <RiIcons.RiTodoFill /> },
  { name: 'quiz', path: '/quiz-app', icon: <MdIcons.MdQuiz /> },
  { name: 'blog', path: '/blog', icon: <FaIcons.FaBloggerB /> },
]

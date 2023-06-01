import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <Link to='/quiz-app'>
      <MainText>Quiz wielokrotnego wyboru</MainText>
    </Link>
  )
}

export default Header

const MainText = styled.h3`
  font-size: 40px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-family: "Monserrat", sans-serif;
  cursor: pointer;
  font-weight: 100;
`

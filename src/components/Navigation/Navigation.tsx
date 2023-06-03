import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const list = [
  { name: 'start', path: '/', exact: true },
  { name: 'kamień-papier-nożyce', path: '/rock-paper-scisors' },
  { name: 'to-do-list', path: '/to-do-list' },
  { name: 'quiz', path: '/quiz-app' },
  { name: 'blog', path: '/blog' },
]

const Navigation = () => {
  const menu = list.map((item) => (
    <NavLinkContainer key={item.name}>
      <StylednavLink to={item.path}>{item.name}</StylednavLink>
    </NavLinkContainer>
  ))

  return (
    <MainNavigationContainer>
      <NavigationContainer>{menu}</NavigationContainer>
    </MainNavigationContainer>
  )
}

export default Navigation

const MainNavigationContainer = styled.nav`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #3c5473;
  min-width: 90vh;
  font-family: Arial, Helvetica, sans-serif;
`
const NavigationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  text-align: center;
`
const NavLinkContainer = styled.li`
  flex-grow: 1;
  text-decoration: none;
`
const StylednavLink = styled(NavLink)`
  display: block;
  padding: 15px 25px;
  color: white;
  text-decoration: none;
  &:hover {
    color: #f7d6d2;
  }

 
`

// tworze nawigację i dodaję do nich odpowiednie ścieżki

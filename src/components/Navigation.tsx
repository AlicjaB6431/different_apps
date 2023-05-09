import styled from 'styled-components'
import { NavLink } from "react-router-dom"




const list = [
    {name:'start', path: '/', exact: true},
    {name:'kamień-papier-nożyce', path: '/rock-paper-scisors'},
    {name:'to-do-list', path: '/to-do-list'}
   
]

const Navigation = () => {

    const menu = list.map(item => <NavigationLi key={item.name}><NavLinkStyle to ={item.path}>{item.name}</NavLinkStyle></NavigationLi>)
    console.log({menu})


return (
    <NavigationStyles>
        <NavigationUl>
 {menu}
        </NavigationUl>
    </NavigationStyles>
)
}

export default Navigation

const NavigationStyles = styled.nav `

    font-size: 20px;
    text-transform: uppercase;
    background-color: #4b0c0c;
    min-width: 90vh;
    font-family: Arial, Helvetica, sans-serif;
 
    
`
const NavigationUl = styled.ul `
    display: flex;
    list-style-type: none;
    text-align: center;
`
const NavigationLi = styled.li `
flex-grow: 1;
    text-decoration: none;
   
    `
    const NavLinkStyle = styled(NavLink)`
    display: block;
    padding: 15px 25px;
        color: white;
        text-decoration: none;
        
    `

// tworze nawigację i dodaję do nich odpowiednie ścieżki
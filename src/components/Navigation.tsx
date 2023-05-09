import React from "react"
import { NavLink } from "react-router-dom"



const list = [
    {name:'start', path: '/', exact: true},
    {name:'kamień-papier-nożyce', path: '/rock-paper-scisors'},
    {name:'to-do-list', path: '/to-do-list'}
   
]

const Navigation = () => {

    const menu = list.map(item => <li key={item.name}><NavLink to ={item.path}>{item.name}</NavLink></li>)
    console.log({menu})


return (
    <nav>
        <ul>
 {menu}
        </ul>
    </nav>
)
}

export default Navigation

// tworze nawigację i dodaję do nich odpowiednie ścieżki
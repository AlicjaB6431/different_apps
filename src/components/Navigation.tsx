import React from "react"
import { NavLink } from "react-router-dom"



const list = [
    {name:'start', path: '/', exact: true},
    {name:'kamień-papier-nożyce', path: '/rock-paper-scisors'},
    {name:'to-do-list', path: '/to-do-list'}
   
]

const Navigation = () => {



    const menu = list.map(item => <li key={item.name}><NavLink to ={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink></li>)
    console.log({menu})


return (
    <nav>
        <ul>
       {menu}
        </ul>
    </nav>
)}

export default Navigation
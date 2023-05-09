import React, {Component} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation'
import Page from './Page'
import './App.css'


const App = () => {
    return (
        <Router>
            <main>
                <aside><Navigation/></aside>
                <section><Page/></section>
            </main>
        </Router>
    )
}

export default App

// miejsce, gdzie wyświetlam tylko wszystkie swtorzone elementy
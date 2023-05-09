import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation'
import Page from './Page'




const App = () => {
    return (
        <Router>
            <MainStyle>
                <aside><Navigation/></aside>
                <section><Page/></section>
              
            </MainStyle>
        </Router>
    )
}

export default App

// miejsce, gdzie wyświetlam tylko wszystkie swtorzone elementy

const MainStyle = styled.main `
margin: 0;


`

import React, {Component} from 'react'
import './App.css'


interface ButtonUserChoice {
  options: string[];
  click: Event
}


const ButtonUserChoice: React.FC<ButtonUserChoice> = (props) => {
  const options = props.options
return (options.map((option )=> <button key={option} onClick={props.click}>{option}</button>))
}

interface App {
  computersOption: string;
  userOption: string;
  options: string[];
  computersVictory: number;
  usersVictory: number
}

class App extends React.Component {

state = {
  computersOption: '',
  userOption: '',
  options: ['kamień', 'papier', 'nożyce'],
  computersVictory: 0,
  usersVictory: 0

}

handleUserClick = (event:Event) => {
  const clickedButton = event.target
const computersChoice: string[] = this.state.options
const number = Math.floor(Math.random()*computersChoice.length)

this.setState({
  userOption: clickedButton.textContent,
  computersOption: computersChoice[number]
})

this.handleResult()
}

handleResult = () => {
  const {computersOption, computersVictory, userOption, usersVictory} = this.state
  if (computersOption === 'kamień' && userOption === 'kamień') {
    console.log('remis')}
    else if (computersOption === 'papier' && userOption === 'papier'){
      console.log('remis')
    }
    else if (computersOption === 'nożyce' && userOption === 'nożyce'){
      console.log('remis')
    }
    else if (computersOption === 'kamień' && userOption === 'papier'){
      this.setState ({
        usersVictory: usersVictory +1
      })
    }
    else if (computersOption === 'kamień' && userOption === 'nożyce'){
      this.setState (({
        computersVictory:computersVictory +1
      }))
    }
    else if (computersOption === 'papier' && userOption === 'nożyce'){
      this.setState (({
        usersVictory: usersVictory +1
      }))
    }
    else if (computersOption === 'papier' && userOption === 'kamień'){
      this.setState (({
        computersVictory:computersVictory +1
      }))
    }
    else if (computersOption === 'nożyce' && userOption === 'kamień'){
      this.setState (({
        usersVictory: usersVictory +1
      }))
    }
    else if (computersOption === 'nożyce' && userOption === 'papier'){
      this.setState (({
        computersVictory: computersVictory +1
      }))
    }
}


render() {
  
  return(
    <div>
      <ButtonUserChoice click={this.handleUserClick} options={this.state.options}/>
    <h1>Wybór użytkownika: {this.state.userOption}</h1>
    <h2>Wybór komputera: {this.state.computersOption}</h2>
    <p>Zwycięstwa użytkownika: {this.state.usersVictory}</p>
    <p>Zwycięstwa komputera: {this.state.computersVictory}</p>
    </div>

  )
  }
}
export default App



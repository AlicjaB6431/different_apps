
import {useState} from 'react'
import './RockPaperScisorsApp.css'



const RockPaperScisorsApp = () => {

const [userChoice, setUserChoice] = useState('')
const [computerChoice, setComputerChoice] = useState ('')
const [userScoreCounter, setUserScoreCounter] = useState (0)
const [computerScoreCounter, setComputerScoreCounter] = useState (0)

const options = ['kamień', 'papier', 'nożyce']



const handleUserClick = (event) => {
  const clickedButton = event.target
  
  const computerOption = options[Math.floor(Math.random()*options.length)]
  
  setUserChoice(clickedButton.textContent);
  setComputerChoice(computerOption); 
    
    handleResult()
  
}

const handleResult = () => {
  
  if (userChoice === computerChoice){
    console.log('remis')
  }
  else if (
    (userChoice === 'papier' && computerChoice === 'kamień') ||
    (userChoice === 'kamień' && computerChoice === 'nożyce') ||
    (userChoice === 'nożyce' && computerChoice === 'papier')
  ) {
    setUserScoreCounter(userScoreCounter + 1)
  }
  else (
  setComputerScoreCounter(computerScoreCounter + 1)
  )
  }

  const handleReset = () => {
    setUserChoice('');
    setComputerChoice('');
    setComputerScoreCounter(0);
    setUserScoreCounter(0)

  }
 
  return(
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={handleUserClick}>{option}</button>
      ))}
    <h1>Wybór użytkownika: {userChoice}</h1>
    <h1>Wybór komputera:{computerChoice}</h1>
    <h1>Zwycięstwa gracz: {userScoreCounter}</h1>
    <h1>Zwycięstwa komputer: {computerScoreCounter}</h1>
    <button onClick = {handleReset}>Resetuj</button>

   
    </div>

  )
      }

export default RockPaperScisorsApp



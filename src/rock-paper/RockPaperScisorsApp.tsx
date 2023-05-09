import styled from 'styled-components'
import {useState} from 'react'

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
    <MainDiv>
      <UserButtonDivStyle>
      {options.map((option, index) => (
        <UserButtonStyle key={index} onClick={handleUserClick}>{option}</UserButtonStyle>
      ))}
      </UserButtonDivStyle>
      <ChoiceDivStyle>
    <ChoiceHStyle>Wybór użytkownika: <strong>{userChoice}</strong></ChoiceHStyle>
    <ChoiceHStyle>Wybór komputera: <strong>{computerChoice}</strong> </ChoiceHStyle>
      </ChoiceDivStyle>
      <VictoryStyle>
    <VictoryParagraphStyle>Zwycięstwa gracz: <strong>{userScoreCounter}</strong></VictoryParagraphStyle>
    <VictoryParagraphStyle>Zwycięstwa komputer: <strong>{computerScoreCounter}</strong></VictoryParagraphStyle>
      </VictoryStyle>
    <ResetButtonStyle onClick = {handleReset}>Zacznij od nowa</ResetButtonStyle>

    </MainDiv>

  )
      }

export default RockPaperScisorsApp


const MainDiv = styled.div `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #094274;
  max-width: 1000px;
  transition: scale 4s;
  font-family: Arial, Helvetica, sans-serif;
`

const UserButtonStyle = styled.button `
margin: 40px;
padding: 40px 30px;
font-size: 25px;
background-color: black;
color: white;
border-radius: 15px;
border: none;

`
const UserButtonDivStyle = styled.div `
  display: flex;
flex-direction: row;
justify-content: space-evenly;

`
const ChoiceDivStyle = styled.div `
  color: white;
  margin-left: 40px;
`
const ChoiceHStyle = styled.p `
  background-color: green;
  padding: 7px;
  width: 30%;
  border-radius: 25px;
  padding: 10px 15px;
`

const VictoryStyle = styled.div `  
position: relative;
  color: white;


`
const VictoryParagraphStyle = styled.p `
  background-color: red;
  padding: 7px;
  width: 30%;
  border-radius: 25px;
  padding: 10px 15px;
  margin-left: 60%;
`

const ResetButtonStyle = styled.button `
  background-color: gold;
  width: 200px;
  padding: 15px 20px;
  border-radius: 25px;
  margin-bottom: 10vh;
  margin-left: 10vh;
  &:hover {
    transform: scale(1.1);
  }

`
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import imgRock from './img/rock.png'
import imgPaper from './img/paper.png'
import imgScissors from './img/scissors.png'
import { keyframes } from 'styled-components'
import { device } from '../../components/device'

const RockPaperScisorsApp = () => {
  const [userChoice, setUserChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [userScoreCounter, setUserScoreCounter] = useState(0)
  const [computerScoreCounter, setComputerScoreCounter] = useState(0)
  const [refreshCounter, setRefreshCounter] = useState(0)
  const [userWon, setUserWon] = useState(false)

  const computerOptions = ['kamień', 'papier', 'nożyce']

  useEffect(() => {
    handleResult()
  }, [refreshCounter])

  const handleUserClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const clickedImage = event.target as HTMLImageElement
    const computerOption = computerOptions[Math.floor(Math.random() * computerOptions.length)]

    setUserChoice(clickedImage.alt || '')
    setComputerChoice(computerOption)
    setRefreshCounter(refreshCounter + 1)
  }

  const handleResult = () => {
    if (userChoice === computerChoice) {
      return null
    } else if (
      (userChoice === 'papier' && computerChoice === 'kamień') ||
      (userChoice === 'kamień' && computerChoice === 'nożyce') ||
      (userChoice === 'nożyce' && computerChoice === 'papier')
    ) {
      setUserScoreCounter(userScoreCounter + 1)
      setUserWon(true)
    } else {
      setComputerScoreCounter(computerScoreCounter + 1)
      setUserWon(false)
    }
  }

  const handleReset = () => {
    setUserChoice('')
    setComputerChoice('')
    setComputerScoreCounter(0)
    setUserScoreCounter(0)
    setRefreshCounter(0)
    setUserWon(false)
  }

  return (
    <MainWrapper>
      <ResetButtonContainer onClick={handleReset}>Zacznij od nowa</ResetButtonContainer>
      <ImagesContainer>
        <ImageRock
          id='rock'
          src={imgRock}
          alt='kamień'
          onClick={handleUserClick}
        />

        <ImagePaper
          id='paper'
          src={imgPaper}
          alt='papier'
          onClick={handleUserClick}
        />

        <ImageScissors
          id='scissors'
          src={imgScissors}
          alt='nożyce'
          onClick={handleUserClick}
        />
      </ImagesContainer>
      {userWon === true && <MessageContainer>Wygrana</MessageContainer>}
      <OutputContainer>
        <SelectionContainer>
          <SelectionDisplay>
            Twój wybór: <strong>{userChoice}</strong>
          </SelectionDisplay>
          <SelectionDisplay>
            Wybór komputera: <strong>{computerChoice}</strong>{' '}
          </SelectionDisplay>
        </SelectionContainer>
        <ScoreContainer>
          <ScoreDisplay>
            Zwycięstwa gracz: <strong>{userScoreCounter}</strong>
          </ScoreDisplay>
          <ScoreDisplay>
            Zwycięstwa komputer: <strong>{computerScoreCounter}</strong>
          </ScoreDisplay>
          <ScoreDisplay>
            Liczba wszystkich gier: <strong>{refreshCounter}</strong>{' '}
          </ScoreDisplay>
        </ScoreContainer>
      </OutputContainer>
    </MainWrapper>
  )
}

export default RockPaperScisorsApp

const MainWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  margin-top: 100px;
  height: 100%;
  @media ${device.mobileM} {
   width: 70vh;

  }
  @media ${device.tablet} {
    width: 90vh;
    max-width: 980px;
  }
`
const ImagesContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media ${device.mobileM} {
    height: 400px;
  }
  @media ${device.tablet} {
    height: 500px;
  }
`
const jumpAnimation = keyframes`
 0% { height: 250px; width: 200px; }
 30% { height: 280px; width: 220px; opacity: 1 }
 40% { height: 280px; width: 220px; opacity: 0.5; }
 100% { height: 250px; width: 200px; opacity: 0.9; }
`
const smallJumpAnimation = keyframes`
 0% { height: 150px; width: 120px; }
 30% { height: 180px; width: 160px; opacity: 1 }
 40% { height: 180px; width: 160px; opacity: 0.5; }
 100% { height: 150px; width: 120px; opacity: 0.9; }
`

const Image = styled.img`
  position: absolute;
  padding: 10px;
  cursor: pointer;
  @media ${device.mobileM} {
    width: 120px;
    height: 150px;
    &:hover {
      animation-name: ${smallJumpAnimation};
      animation-duration: 1s;
    }
  }
  @media ${device.tablet} {
    width: 200px;
    height: 250px;
    &:hover {
      animation-name: ${jumpAnimation};
      animation-duration: 1s;
    }
  }
`
const ImageRock = styled(Image)`

@media ${device.mobileM} {
 
  left: 5%;
  }
  @media ${device.tablet} {
   left: -10%
  }
`
const ImagePaper = styled(Image)`

@media ${device.mobileM} {
   
  left: 33%;
  }

`
const ImageScissors = styled(Image)`

@media ${device.mobileM} {
  left: 60%;
   
  }
  @media ${device.tablet} {
  left: 75%
  }
`

const OutputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
`
const SelectionContainer = styled.div`
  color: #3c5473;
`

const SelectionDisplay = styled.p``

const ScoreContainer = styled.div`
  color: #3c5473;
`
const ScoreDisplay = styled.p``
const MessageContainer = styled.p`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%);
  font-size: 20px;
  color: #3c5473;
  font-weight: bold;
`

const ResetButtonContainer = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  border: none;
  box-shadow: 5px 5px 10px 2px rgba(1, 1, 43, 0.5);
  background-color: #3c5473;
  color: white;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #2b3d53;
  }
  @media ${device.mobileM} {
    height: 50px;
    width: 200px;
    font-size: 20px;
  }
  @media ${device.tablet} {
    height: 60px;
    width: 300px;
    font-size: 23px;
  }
`

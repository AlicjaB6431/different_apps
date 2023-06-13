import styled from 'styled-components'
import { useEffect, useState } from 'react'
import imgRock from './img/rock.png'
import imgPaper from './img/paper.png'
import imgScissors from './img/scissors.png'
import { keyframes } from 'styled-components'
import { device } from '../../components/device'
import Message from './Message'

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
      {userWon === true && <Message setUserWon={setUserWon}></Message>}
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
  height: 100%;
  width: 100%;
  max-width: 1000px;
  font-family: 'Montserrat', sans-serif;
  margin: 20px 5px 50px 10px;

  z-index: -1;
`
const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const jumpAnimation = keyframes`
 0% { height: 150px; width: 130px; }
 30% { height: 160px; width: 140px; opacity: 1 }
 40% { height: 160px; width: 140px; opacity: 0.5; }
 100% { height: 150px; width: 130px; opacity: 0.9; }
`
const smallJumpAnimation = keyframes`
 0% { height: 120px; width: 100px; }
 30% { height: 130px; width: 110px; opacity: 1 }
 40% { height: 130px; width: 110px; opacity: 0.5; }
 100% { height: 120px; width: 100px; opacity: 0.9; }
`

const Image = styled.img`
  position: absolute;
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  width: 100px;
  height: 120px;
  &:hover {
    animation-name: ${smallJumpAnimation};
    animation-duration: 1s;
  }
  @media ${device.tablet} {
    width: 130px;
    height: 150px;
    &:hover {
      animation-name: ${jumpAnimation};
      animation-duration: 1s;
    }
  }
`
const ImageRock = styled(Image)`
  top: 20%;
`
const ImagePaper = styled(Image)`
  top: 35%;
  @media ${device.tablet} {
    top: 40%;
  }
`
const ImageScissors = styled(Image)`
  top: 50%;

  @media ${device.tablet} {
    top: 60%;
  }
`

const OutputContainer = styled.div`
  position: absolute;
  width: 90%;
  max-width: 1200px;
  bottom: 10%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobileM} {
    font-size: 12px;
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

const ResetButtonContainer = styled.button`
  position: relative;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  border: none;
  box-shadow: 5px 5px 10px 2px rgba(1, 1, 43, 0.5);
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: white;
  height: 50px;
  width: 200px;
  font-size: 20px;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #2b3d53;
  }

  @media ${device.tablet} {
    height: 60px;
    width: 300px;
    font-size: 23px;
  }
`

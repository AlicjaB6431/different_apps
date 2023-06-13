import styled from 'styled-components'
import Emoji from './img/emoji.png'
import React, { useRef, useEffect } from 'react'
import { device } from '../../components/device'

interface MessageProps {
  setUserWon: (data: boolean) => void
  //   handleExit: () => void
}

const Message: React.FC<MessageProps> = ({ setUserWon }) => {
  useEffect(() => {
    document.addEventListener('click', handleExit)
  }, [])

  const refOne = useRef<HTMLDivElement>(null)

  const handleExit = (e: MouseEvent) => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setUserWon(false)
    }
  }

  return (
    <MainContainer ref={refOne}>
      <EmojiImage
        src={Emoji}
        alt='emotka w okularach'
      />
      <TextItem>Wygrana</TextItem>
    </MainContainer>
  )
}

export default Message

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 60%;
  background-color: white;
  border: 1px solid grey;
  border-radius: 30px;
  z-index: 10;
  @media ${device.tablet} {
    width: 40%;
    height: 60%;
  }
`

const EmojiImage = styled.img`
  width: 50%;
  height: auto;
`

const TextItem = styled.p`
  font-size: 60px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`

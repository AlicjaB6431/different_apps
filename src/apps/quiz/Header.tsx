import styled from 'styled-components'

const Header = () => {
  return (
    <MainWrapper>
      <MainText>quiz</MainText>
      <TextContainer>sprawdź swoją wiedzę</TextContainer>
    </MainWrapper>
  )
}

export default Header

const MainWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
`
const MainText = styled.h3`
  font-size: 4rem;
  color: white;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Rubik Puddles', cursive;
  color: black;
  font-weight: 800;
  margin-top: 20px;
`
const TextContainer = styled.p`
  text-align: center;
  font-family: 'Playfair', serif;
  text-transform: capitalize;
  color: #276ba7;
  font-weight: 800;
`

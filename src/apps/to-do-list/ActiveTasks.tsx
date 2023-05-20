import styled from 'styled-components'

interface Task {
  title: string
  index: number
  confirmed: boolean
}

function ActiveTask({ title, index, removeClick, confirmClick, confirmed }: Task) {
  return title.length > 0 && confirmed === false ? (
    <ListContainer>
      <TitleContainer>{title}</TitleContainer>
      <DeleteAndSubmitButtons onClick={() => removeClick(index)}>Usuń</DeleteAndSubmitButtons>
      <DeleteAndSubmitButtons onClick={() => confirmClick()}>Zatwierdź</DeleteAndSubmitButtons>
    </ListContainer>
  ) : null
}
export default ActiveTask

const ListContainer = styled.li`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  margin: 10px;
  background-color: #e1e3e4;
`
const TitleContainer = styled.p`
  width: 60%;
  margin: 10px;
`
const DeleteAndSubmitButtons = styled.button`
  padding: 8px;
  height: 30px;
  margin: 0px 5px;
  background-color: #276ba7;
  color: white;
  border: none;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #14426b;
  }
`

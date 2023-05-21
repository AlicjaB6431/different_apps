import styled from 'styled-components'

interface Task {
  title: string
  confirmed: boolean
  id: number
  handleRemoveTaskButton: (id: number) => void
  handleConfirmTaskButton: (id: number) => void
}

function ActiveTask({ title, handleRemoveTaskButton, handleConfirmTaskButton, confirmed, id }: Task) {
  return title.length > 0 && confirmed === false ? (
    <SingleTask>
      <TitleContainer>{title}</TitleContainer>
      {/* tu dopiero uzywamy tzw callback czyli () => nazwaFunkcji(argumentFunkcji) */}
      <DeleteAndSubmitButtons onClick={() => handleRemoveTaskButton(id)}>Usuń</DeleteAndSubmitButtons>
      <DeleteAndSubmitButtons onClick={() => handleConfirmTaskButton(id)}>Zatwierdź</DeleteAndSubmitButtons>
    </SingleTask>
  ) : null
}
export default ActiveTask

const SingleTask = styled.li`
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

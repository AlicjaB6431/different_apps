import styled from 'styled-components'
import Button from '../../components/Button'

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
      <Button onClick={() => handleRemoveTaskButton(id)}>Usuń</Button>
      <Button onClick={() => handleConfirmTaskButton(id)}>Zatwierdź</Button>
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

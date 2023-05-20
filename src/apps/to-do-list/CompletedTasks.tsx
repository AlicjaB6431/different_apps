import styled from 'styled-components'

function CompletedTasks({ allTasks, currentDate }) {
  let updatedTasks = [...allTasks]

  updatedTasks = updatedTasks.filter((task) => task.confirmed === true)
  const completed = updatedTasks.map((task) => (
    <ListContainer key={task.id}>
      {task.title}
      <DateContainer>{currentDate}</DateContainer>
    </ListContainer>
  ))

  return (
    <MainWrapper>
      <CompletedTasksCount>Zadania ukończone: {completed.length}</CompletedTasksCount>
      <AllTasksContainer>{completed.reverse().slice(0, 5)}</AllTasksContainer>
    </MainWrapper>
  )
}
export default CompletedTasks

const MainWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`

const AllTasksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
`
const ListContainer = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`
const CompletedTasksCount = styled.p`
  text-align: center;
`

const DateContainer = styled.div`
  margin-left: 10px;
  font-size: 12px;
`

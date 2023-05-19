import styled from 'styled-components'
import ToDoListHeader from './HeaderToDo'
import CreateTask from './CreateTask'

//miejsce, gdzie wyświetlam tylko wszytskie komponenty

function ToDoList() {
  return (
    <MainWrapper>
      <ToDoListHeader />
      <CreateTask />
    </MainWrapper>
  )
}

export default ToDoList

const MainWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 60vh;
  border: 2px solid #547bad;
  box-shadow: 5px 5px 10px;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
`

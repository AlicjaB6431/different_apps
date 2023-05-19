import styled from 'styled-components'

function ToDoListHeader() {
  return (
    <HeaderContainer>
      <h2>ToDo List</h2>
    </HeaderContainer>
  )
}

export default ToDoListHeader

const HeaderContainer = styled.header`
  text-align: center;
  color: #276ba7;
  font-family: Arial, Helvetica, sans-serif;
`

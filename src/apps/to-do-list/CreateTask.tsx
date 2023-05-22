import styled from 'styled-components'
import { FieldValues, useForm } from 'react-hook-form'
import { useState } from 'react'
import ActiveTask from './ActiveTasks'
import CompletedTasks from './CompletedTasks'

export type TodoType = {
  id: number
  toDoInput: string
  confirmed: boolean
  confirmedDate: number
}

function getCurrentDate() {
  const newDate = new Date().getTime()
  return newDate
}

const CreateTask = () => {
  const { register, handleSubmit, reset } = useForm()
  const [allTasks, setAllTasks] = useState<TodoType[]>([])

  const onSubmit = (data: FieldValues) => {
    const newTodo: TodoType = {
      id: Math.random(),
      toDoInput: data.toDoInput,
      confirmed: false,
      confirmedDate: 0,
    }
    setAllTasks((prevTodos) => [...prevTodos, newTodo])
    reset()
  }

  const handleRemoveTaskButton = (id: number) => {
    setAllTasks((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const handleConfirmTaskButton = (id: number) => {
    setAllTasks((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            confirmed: true,
            confirmedDate: getCurrentDate(),
          }
        }
        return todo
      })

      return updatedTodos
    })
  }

  return (
    <MainWrapper>
      <HeaderContainer>
        <HeaderTitle>ToDo List</HeaderTitle>
      </HeaderContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          placeholder='Wpisz zadanie...'
          {...register('toDoInput', { required: true })}
        />
        <ButtonAddTask type='submit'>Dodaj</ButtonAddTask>
      </FormContainer>

      <ActiveTaskContainer>
        <ActiveTaskListContainer>
          {allTasks.map((task) => (
            <ActiveTask
              confirmed={task.confirmed}
              key={task.id}
              title={task.toDoInput}
              id={task.id}
              handleRemoveTaskButton={handleRemoveTaskButton}
              handleConfirmTaskButton={handleConfirmTaskButton}
            />
          ))}
        </ActiveTaskListContainer>
      </ActiveTaskContainer>
      <CompletedTaskContainer>
        <CompletedTasks allTasks={allTasks} />
      </CompletedTaskContainer>
    </MainWrapper>
  )
}

export default CreateTask

const MainWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  max-width: 600px;
  height: 75%;
  min-height: 400px;
  border: 3px solid #547bad;
  box-shadow: 5px 5px 20px;
  border-radius: 10px;
`

const HeaderContainer = styled.header`
  text-align: center;
  color: #276ba7;
  font-family: 'Permanent Marker', cursive;
  font-size: 22px;
`
const HeaderTitle = styled.h2``

const FormContainer = styled.form`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  width: 100%;
`

const InputContainer = styled.input`
  width: 65%;
  font-family: 'Montserrat', sans-serif;
`

const ButtonAddTask = styled.button`
  margin-right: 15px;
  padding: 10px 20px;
  background-color: #276ba7;
  color: white;
  border: none;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #14426b;
  }
`

const ActiveTaskContainer = styled.div`
  height: 40%;
  width: 100%;
  overflow: scroll;
`

const ActiveTaskListContainer = styled.ul``

const CompletedTaskContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 40%;
  overflow: hidden;
`

import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import ActiveTask from './ActiveTasks'
import CompletedTasks from './CompletedTasks'

type Inputs = {
  toDoInput: string
}

function getCurrentDate() {
  const date = new Date().getDate()
  const month = new Date().getMonth() + 1
  const year = new Date().getFullYear()
  const hours = new Date().getHours()
  const min = new Date().getMinutes()

  const newDate = date + '/' + month + '/' + year + '    ' + hours + ':' + min
  return newDate
}

function CreateTask() {
  const [toDoInput, setToDoInput] = useState('')
  const [currentDate, setCurrentDate] = useState(getCurrentDate())

  const [allTasks, setAllTasks] = useState([
    {
      id: 0,
      title: '',
      confirmed: false,
    },
  ])
  const { register, getValues, handleSubmit } = useForm<Inputs>()

  const handleButtonClick: SubmitHandler<Inputs> = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const inputValue = getValues('toDoInput')
    if (inputValue) {
      setAllTasks((allTasks) => [...allTasks, { title: inputValue, confirmed: false }])
    }
    setToDoInput('')
  }

  const handleRemoveTaskButton = (index: number) => {
    setAllTasks((allTasks) => allTasks.filter((_, i) => i !== index))
  }

  const handleConfirmTaskButton = (index: number) => {
    setAllTasks((allTasks) => {
      const newTasks = [...allTasks]
      newTasks[index] = { ...newTasks[index], confirmed: true }
      return newTasks
    })
    setCurrentDate(getCurrentDate())
  }
  return (
    <MainWrapper>
      <HeaderContainer>
        <h2>ToDo List</h2>
      </HeaderContainer>
      <FormContainer onSubmit={handleSubmit(handleButtonClick)}>
        <InputContainer
          type='text'
          placeholder='Wpisz zadanie...'
          value={toDoInput}
          {...register('toDoInput', { required: true })}
          onChange={(e) => setToDoInput(e.target.value)}
        />
        <ButtonAddTask onClick={handleButtonClick}>Dodaj</ButtonAddTask>
      </FormContainer>

      <ActiveTaskContainer>
        <ul>
          {allTasks.map((task, index) => (
            <ActiveTask
              confirmed={task.confirmed}
              key={index}
              index={index}
              title={task.title}
              removeClick={() => handleRemoveTaskButton(index)}
              confirmClick={() => handleConfirmTaskButton(index)}
            />
          ))}
        </ul>
      </ActiveTaskContainer>
      <CompletedTaskContainer>
        <CompletedTasks
          allTasks={allTasks}
          currentDate={currentDate}
        />
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

const CompletedTaskContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 40%;
  /* background-color: #a1a11e; */
  overflow: hidden;
`

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
      <FormContainer onSubmit={handleSubmit(handleButtonClick)}>
        <label>Nowe zadanie: </label>
        <input
          type='text'
          placeholder='Wpisz zadanie...'
          value={toDoInput}
          {...register('toDoInput', { required: true })}
          onChange={(e) => setToDoInput(e.target.value)}
        />
        <button onClick={handleButtonClick}>Dodaj</button>
      </FormContainer>

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

      <CompletedTasks
        allTasks={allTasks}
        currentDate={currentDate}
      />
    </MainWrapper>
  )
}

export default CreateTask

const MainWrapper = styled.div`
  position: relative;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
`

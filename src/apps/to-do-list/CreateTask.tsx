import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import Task from './Task'
import CompletedTasks from './CompletedTasks'

type Inputs = {
  toDoInput: string
}

function CreateTask() {
  const [toDoInput, setToDoInput] = useState('')

  const [allTasks, setAllTasks] = useState([
    {
      id: 0,
      title: 'Zadanie 1',
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

    // tutaj usuwam element, który ma index równy przekazanemu
  }

  const handleConfirmTaskButton = (index: number) => {
    setAllTasks((allTasks) => {
      const newTasks = [...allTasks]
      newTasks[index] = { ...newTasks[index], confirmed: true }
      return newTasks
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleButtonClick)}>
        <label>Nowe zadanie: </label>
        <input
          type='text'
          placeholder='Wpisz zadanie...'
          value={toDoInput}
          {...register('toDoInput', { required: true })}
          onChange={(e) => setToDoInput(e.target.value)}
        />
        <button onClick={handleButtonClick}>Dodaj</button>
      </form>

      <ul>
        {allTasks.map((task, index) => (
          <Task
            confirmed={task.confirmed}
            key={index}
            index={index}
            data={task.title}
            removeClick={() => handleRemoveTaskButton(index)}
            confirmClick={() => handleConfirmTaskButton(index)}
          />
        ))}
      </ul>
      <p>Zadania ukończone:</p>
      <ul>
        <CompletedTasks allTasks={allTasks} />
      </ul>
    </div>
  )
}

export default CreateTask

import styled from 'styled-components'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import Task from './Task'

type Inputs = {
  toDoInput: string
}

function CreateTask() {
  const [toDoInput, setToDoInput] = useState('')

  const [allTasks, setAllTasks] = useState([
    {
      id: 0,
      title: 'Zadanie 1',
      confirmed: true,
    },
  ])
  const { register, getValues, handleSubmit } = useForm<Inputs>()

  const handleButtonClick: SubmitHandler<Inputs> = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const inputValue = getValues('toDoInput')
    if (inputValue) {
      setAllTasks((allTasks) => [...allTasks, { title: inputValue, completed: false }])
    }
    setToDoInput('')
  }

  const handleRemoveTaskButton = (index: number) => {
    setAllTasks((allTasks) => allTasks.filter((_, i) => i !== index))

    // tutaj usuwam element, który ma index równy przekazanemu
  }

  const handleFinishTaskButton = () => {}

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
            key={index}
            index={index}
            data={task.title}
            removeClick={() => handleRemoveTaskButton(index)}
          />
        ))}
      </ul>
    </div>
  )
}

export default CreateTask

import styled from 'styled-components'
import { FieldValues, useForm } from 'react-hook-form'
import { useState } from 'react'
import ActiveTask from './ActiveTasks'
import CompletedTasks from './CompletedTasks'

export type TodoType = {
  id: number
  toDoInput: string
  confirmed: boolean
}

function getCurrentDate() {
  const date = new Date().getDate()
  const month = new Date().getMonth() + 1
  const year = new Date().getFullYear()
  const hours = new Date().getHours()
  const min = new Date().getMinutes()
  // odkąd istnieją tzw template stringi nie dodajemy zmiennych za pomocą znaku +
  const newDate = `${date}/${month}/${year} || ${hours} : ${min}`
  return newDate
}

const CreateTask = () => {
  const [currentDate, setCurrentDate] = useState(getCurrentDate())
  const { register, handleSubmit, reset } = useForm()
  const [allTasks, setAllTasks] = useState<TodoType[]>([]) // zapis TodoType[] tzn tablica elementów danego typu
  // pisząc 'tradycyjnie' formularz, uzywalibyśmy todoInput zeby przeczytac treść z inputa, w hook form nie potrzebujemy
  // on sam zbierze dane z elementów znajdujących się pomiędzy tagiem <form> a w tym przypadku <FormContainer>, za pomocą {...register}


  // ta funkcja odpowiada za stworzenie newTodo i wepchnięcie go do tablicy,
  // reset odpowiada za czyszczenie inputa, to funkcja wbudowana w hook form
  // w tym przypadku nie potrzebujemy preventDefault bo nic nie wysyłamy
  // to jest wyjątkowy przypadek, gdzie wstawiamy parametr data, ale później przy wywołaniu go ju nie podajemy
  const onSubmit = (data: FieldValues) => {
    const newTodo: TodoType = {
      id: Math.random(),
      toDoInput: data.toDoInput,
      confirmed: false,
    }
    setAllTasks((prevTodos) => [...prevTodos, newTodo])
    reset()
  }

  const handleRemoveTaskButton = (id: number) => {
    // zostawiamy tablicę z id innymi niz kliknięty todo
    setAllTasks((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const handleConfirmTaskButton = (id: number) => {
    // to szczerze mówiąc mógłbym napisać lepiej ale nie chce mi się ju przepisywać:D
    setAllTasks((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            confirmed: true,
          }
        }
        return todo
      })
      setCurrentDate(getCurrentDate())
      return updatedTodos
    })
  }

  return (
    <MainWrapper>
      <HeaderContainer>
        {/* nie uzywamy zwykłych tagów mając styled components */}
        <h2>ToDo List</h2>
      </HeaderContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          placeholder='Wpisz zadanie...'
          {...register('toDoInput', { required: true })}
        />
        {/* onclick na buttonie w typ przypadku był niepotrzebny */}
        <ButtonAddTask type='submit'>Dodaj</ButtonAddTask>
      </FormContainer>

      <ActiveTaskContainer>
        {/* nie uzywamy zwykłych tagów mając styled components */}
        <ul>
          {allTasks.map((task) => (
            <ActiveTask
              confirmed={task.confirmed}
              key={task.id}
              title={task.toDoInput}
              id={task.id}
              // dobra praktyka: nazwa propsa === props
              // tu jedynie podajemy funckję nizej, więc nie przekazuję () => nazwaFunkcji, tylko samą funkcję
              handleRemoveTaskButton={handleRemoveTaskButton}
              handleConfirmTaskButton={handleConfirmTaskButton}
            />
          ))}
        </ul>
      </ActiveTaskContainer>
      <CompletedTaskContainer>
        <CompletedTasks
          allTasks={allTasks}
          // tu jest ten błąd z datą, bo data zawsze będzie taka jak dla ostatniego taska
          // najlepiej jakby task miał pole confirmedDate
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
  overflow: hidden;
`

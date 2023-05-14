import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import ToDoListHeader from './HeaderToDo'
import CreateTask from './CreateTask'
import { useState } from 'react'

//miejsce, gdzie wyświetlam tylko wszytskie komponenty

function ToDoList() {
  return (
    <>
      <ToDoListHeader />
      <CreateTask />
    </>
  )
}

export default ToDoList

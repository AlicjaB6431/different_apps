interface Task {
  data: string
  index: number
}

function Task({ data, index, removeClick }: Task) {
  return (
    <li>
      <p>{data}</p>
      <button onClick={() => removeClick(index)}>Usuń</button>
      <button>Zatwierdź</button>
    </li>
  )
}
export default Task

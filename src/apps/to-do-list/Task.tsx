interface Task {
  data: string
  index: number
}

function Task({ data, index, removeClick, confirmClick, confirmed }: Task) {
  return confirmed === false ? (
    <li>
      <p>{data}</p>
      <button onClick={() => removeClick(index)}>Usuń</button>
      <button onClick={() => confirmClick()}>Zatwierdź</button>
    </li>
  ) : null
}
export default Task

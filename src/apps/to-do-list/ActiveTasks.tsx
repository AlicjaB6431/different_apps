interface Task {
  title: string
  index: number
  confirmed: boolean
}

function ActiveTask({ title, index, removeClick, confirmClick, confirmed }: Task) {
  return confirmed === false && title.length > 0 ? (
    <li>
      <p>{title}</p>
      <button onClick={() => removeClick(index)}>Usuń</button>
      <button onClick={() => confirmClick()}>Zatwierdź</button>
    </li>
  ) : null
}
export default ActiveTask

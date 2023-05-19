function CompletedTasks({ allTasks, currentDate }) {
  let updatedTasks = [...allTasks]

  updatedTasks = updatedTasks.filter((task) => task.confirmed === true)
  const completed = updatedTasks.map((task) => (
    <li key={task.id}>
      {task.title}
      <div>Data zakończenia zadania: {currentDate}</div>
    </li>
  ))

  return (
    <>
      <p>Zadania ukończone {completed.length}</p>
      <ul>{completed.reverse()}</ul>
    </>
  )
}
export default CompletedTasks

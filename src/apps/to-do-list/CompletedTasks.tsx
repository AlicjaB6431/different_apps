function CompletedTasks({ allTasks }) {
  let updatedTasks = [...allTasks]
  updatedTasks = updatedTasks.filter((task) => task.confirmed === true)
  const completed = updatedTasks.map((task) => <li key={task.id}>{task.title}</li>)
  return <ul>{completed.reverse()}</ul>
}
export default CompletedTasks

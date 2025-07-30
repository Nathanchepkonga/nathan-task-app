import TodoItem from './TodoItem'

export default function TodoList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p style={{ textAlign: 'center', color: 'var(--muted)' }}>No tasks here — add one above!</p>
  }

  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          index={index}   
        />
      ))}
    </div>
  )
}

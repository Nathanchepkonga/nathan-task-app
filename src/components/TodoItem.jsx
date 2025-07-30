export default function TodoItem({ task, toggleTask, deleteTask, index }) {
  return (
    <div 
      className={`todo-item ${task.completed ? 'completed' : ''}`} 
      style={{ animationDelay: `${index * 0.15}s` }}  
    >
      <div className="left">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleTask(task.id)} 
        />
        <div>
          <p className="task-title">{task.title}</p>
          <span className="task-meta">
            {task.category} {task.reminder && `   ${new Date(task.reminder).toLocaleString()}`}
          </span>
        </div>
      </div>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>✕</button>
    </div>
  )
}

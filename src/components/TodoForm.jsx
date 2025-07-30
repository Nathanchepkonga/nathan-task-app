import { useState } from 'react'

export default function TodoForm({ addTask }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Work')
  const [reminder, setReminder] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title) return
    addTask({ 
      id: Date.now(), 
      title, 
      category, 
      completed: false, 
      reminder 
    })
    setTitle('')
    setReminder('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="What do you need to do?" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Work</option>
        <option>Personal</option>
        <option>Study</option>
      </select>
      <input 
        type="datetime-local"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
      />
      <button type="submit">+ Add Task</button>
    </form>
  )
}

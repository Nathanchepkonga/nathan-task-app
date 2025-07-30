import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import CategoryFilter from './components/CategoryFilter'
import TodoList from './components/TodoList'
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || [])
  const [filter, setFilter] = useState('All')

  // ✅ Save tasks in LocalStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // ✅ Ask for notification permission on load
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission()
    }
  }, [])

  // ✅ Schedule notifications
  useEffect(() => {
    const timers = []

    tasks.forEach(task => {
      if (task.reminder && !task.completed) {
        const reminderTime = new Date(task.reminder).getTime()
        const now = Date.now()

        if (reminderTime > now) {
          // First reminder
          timers.push(setTimeout(() => sendNotification(task.title), reminderTime - now))
          // Second reminder after 1 min
          timers.push(setTimeout(() => sendNotification(task.title + ' (Second Reminder)'), (reminderTime - now) + 60000))
        }
      }
    })

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [tasks])

  const sendNotification = (title) => {
    if (Notification.permission === 'granted') {
      new Notification(' Nathan Task Reminder', { body: title })
    }
  }

  const addTask = (task) => setTasks([...tasks, task])
  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id))

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.category === filter)

  return (
    <div className="app-container">
      <h1 className="app-title">Nathan Task App</h1>
      <TodoForm addTask={addTask} />
      <CategoryFilter setFilter={setFilter} />
      <TodoList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  )
}

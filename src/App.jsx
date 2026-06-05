import { useState, useEffect } from 'react'
import './App.css'

const STORAGE_KEY = 'task-board-tasks'

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function nextIdFromTasks(tasks) {
  return tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [inputValue, setInputValue] = useState('')
  const [nextId, setNextId] = useState(() => nextIdFromTasks(loadTasks()))

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addTask() {
    const text = inputValue.trim()
    if (!text) return
    setTasks([...tasks, { id: nextId, text, completed: false }])
    setNextId(nextId + 1)
    setInputValue('')
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addTask()
  }

  const remaining = tasks.filter(t => !t.completed).length

  return (
    <div className="board">
      <h1 className="board__title">タスクボード</h1>

      <div className="board__input-row">
        <input
          className="board__input"
          type="text"
          placeholder="タスクを入力..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="board__add-btn" onClick={addTask}>
          追加
        </button>
      </div>

      {tasks.length > 0 && (
        <p className="board__summary">
          {remaining} / {tasks.length} 件が未完了
        </p>
      )}

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'task-item--done' : ''}`}>
            <input
              className="task-item__checkbox"
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className="task-item__text">{task.text}</span>
            <button
              className="task-item__delete"
              onClick={() => deleteTask(task.id)}
              aria-label="削除"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="board__empty">タスクはまだありません</p>
      )}
    </div>
  )
}

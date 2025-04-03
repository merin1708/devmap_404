import { useState } from 'react';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="task-input"
        />
        <button type="submit" className="submit-button">Add Task</button>
      </form>
      <ul className="tasks-list">
        {tasks.map(task => (
          <li 
            key={task.id} 
            className={`task-item ${task.completed ? 'completed' : ''}`}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList; 
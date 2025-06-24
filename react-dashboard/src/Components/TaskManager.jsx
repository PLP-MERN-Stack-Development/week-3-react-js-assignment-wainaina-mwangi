// src/components/TaskManager.jsx
import { useState } from 'react';
import Button from './Button';
import { useLocalStorage } from '../Hooks/useLocalStorage';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (id) =>
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const filtered = tasks.filter((task) =>
    filter === 'all' ? true :
    filter === 'active' ? !task.completed :
    task.completed
  );

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <input
          className="border p-2 flex-grow"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        {['all', 'active', 'completed'].map(f => (
          <Button
            key={f}
            variant={filter === f ? 'primary' : 'secondary'}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>
      <ul className="space-y-2">
        {filtered.map(task => (
          <li key={task.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <span
              onClick={() => toggleTask(task.id)}
              className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>X</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}


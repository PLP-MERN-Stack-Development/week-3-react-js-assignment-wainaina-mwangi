// src/components/Navbar.jsx
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">PLP Task Manager</h1>
      <Button variant="secondary" onClick={toggleTheme}>
        Toggle {dark ? 'Light' : 'Dark'} Mode
      </Button>
    </nav>
  );
}

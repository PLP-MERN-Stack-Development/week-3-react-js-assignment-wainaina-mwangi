// src/components/Button.jsx
export  function Button({ variant = 'primary', children, ...props }) {
  const styles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  return (
    <button
      className={`px-4 py-2 rounded transition-colors ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} PLP Task Manager. All rights reserved.</p>
        
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://plp.africa/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            PLP Website
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

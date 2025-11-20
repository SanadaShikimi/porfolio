import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-scroll'; // Thư viện hỗ trợ scroll mượt (FR-7.2)
// Lưu ý: Nếu ở trang Blog, cần dùng Link của react-router-dom để quay về Home

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
    { name: 'Blog', to: 'blog' }, // <--- Đã thêm mục Blog ở đây

  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold dark:text-white">MyPortfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true} // FR-7.2
              duration={500}
              className="cursor-pointer hover:text-blue-500 dark:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
          {/* Dark Mode Toggle (FR-7.4) */}
          <button onClick={toggleTheme} className="p-2 rounded border">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile Menu Button (FR-7.3) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4">
            {/* Render menu items here vertically */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects'; // Nhớ import file Projects bạn tạo ở bước trước
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import About from './sections/About';
import Blog from './sections/Blog';

function App() {
  return (
    <ThemeProvider>
      <div className="font-sans transition-colors duration-300 w-full min-h-screen bg-slate-200 dark:bg-gray-900">
        <Navbar />
        
        <main>
          {/* Trang chủ dạng Single Page - Cuộn xuống từng phần */}
          <Hero />
          <About/>
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Blog />
        </main>
        
        <footer className="py-6 text-center bg-gray-100 dark:bg-gray-900 dark:text-gray-400">
          <p>© 2024 My Portfolio. Built with React & Vite.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
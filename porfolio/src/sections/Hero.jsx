import { motion } from 'framer-motion'; // Thêm hiệu ứng chuyển động nhẹ

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        
        {/* Phần Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm <span className="text-blue-600">Shikimi</span>
          </motion.h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Fullstack Web Developer
          </h2>
          <p className="text-lg mb-8 text-gray-500 dark:text-gray-400 max-w-lg">
            Tôi xây dựng các trang web hiệu suất cao và trải nghiệm người dùng tuyệt vời. 
            Chuyên về React, Node.js và thiết kế UI/UX hiện đại.
          </p>
          
          {/* Nút bấm & CV (FR-1.3) */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a 
              href="/my-resume.pdf" // Nhớ bỏ file pdf vào thư mục public hoặc assets
              download 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
            >
              Download CV
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Phần Ảnh đại diện (FR-1.1) */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
            {/* Thay đường dẫn ảnh của bạn vào đây */}
            <img src="/About.svg" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

// Data mẫu
const projectsData = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    category: "Web App", // Dùng cho FR-3.3
    img: "/website3.webp", // FR-3.1: Hình demo
    desc: "Hệ thống quản lý bán hàng toàn diện.",
    tech: ["React", "Redux", "Firebase"], // FR-3.1: Công nghệ
    // FR-3.2: Thông tin chi tiết cho Modal
    role: "Frontend Lead",
    goal: "Tối ưu hóa quy trình xử lý đơn hàng giảm 50% thời gian.",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 2,
    title: "Travel Booking App",
    category: "Mobile",
    img: "/website2.webp",
    desc: "Ứng dụng đặt vé du lịch đa nền tảng.",
    tech: ["React Native", "NodeJS"],
    role: "Fullstack Developer",
    goal: "Xây dựng ứng dụng mobile mượt mà cho Android & iOS.",
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null); // State cho Modal FR-3.2

  // FR-3.3: Logic lọc dự án
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const categories = ["All", "Web App", "Mobile", "AI"];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

        {/* FR-3.3: Thanh lọc (Filter Buttons) */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                filter === cat 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FR-3.1: Grid hiển thị dự án */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)} // Click mở Modal (FR-3.2)
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
            >
              <div className="overflow-hidden h-48">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FR-3.2: MODAL CHI TIẾT */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
               onClick={() => setSelectedProject(null)}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl animate-fadeIn"
                 onClick={e => e.stopPropagation()}>
              
              {/* Nút đóng */}
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500">
                <FaTimes />
              </button>

              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-4">
                {selectedProject.category}
              </span>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p><strong>🎯 Mục tiêu:</strong> {selectedProject.goal}</p>
                <p><strong>👨‍💻 Vai trò:</strong> {selectedProject.role}</p>
                <p><strong>📝 Mô tả:</strong> {selectedProject.desc}</p>
              </div>

              {/* Link GitHub & Demo */}
              <div className="flex gap-4 mt-8 pt-4 border-t dark:border-gray-700">
                <a href={selectedProject.github} target="_blank" className="flex items-center gap-2 px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
                  <FaGithub /> GitHub
                </a>
                <a href={selectedProject.demo} target="_blank" className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
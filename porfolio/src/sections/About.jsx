import { FaCode, FaLaptopCode, FaRocket, FaUserSecret } from 'react-icons/fa';

const About = () => {
  // Dữ liệu điểm nhấn (Stats)
  const stats = [
    { id: 1, icon: <FaCode />, label: "Kinh nghiệm", value: "2+ Năm" },
    { id: 2, icon: <FaLaptopCode />, label: "Dự án", value: "15+ Đã hoàn thành" },
    { id: 3, icon: <FaRocket />, label: "Khách hàng", value: "10+ Hài lòng" },
    { id: 4, icon: <FaUserSecret />, label: "Làm việc", value: "24/7 Sẵn sàng" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 my-8">
      {/* Card Container */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Cột Trái: Nội dung giới thiệu */}
          <div className="space-y-6">
            <h4 className="text-blue-600 font-bold uppercase tracking-wider text-sm">
              Who Am I?
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed text-justify">
              <p>
                Xin chào! Tôi là một lập trình viên Fullstack với niềm đam mê mãnh liệt trong việc tạo ra các ứng dụng web không chỉ chạy tốt mà còn phải đẹp và thân thiện với người dùng.
              </p>
              <p>
                Hành trình của tôi bắt đầu từ những dòng code HTML/CSS đơn giản và giờ đây tôi đã thành thạo việc xây dựng các hệ thống phức tạp bằng <strong className="text-blue-500">React, Node.js</strong> và các công nghệ hiện đại khác.
              </p>
              <p>
                Tôi luôn tin rằng: <em className="italic">"Code không chỉ là những dòng lệnh, đó là nghệ thuật giải quyết vấn đề."</em> Khi không làm việc, tôi thường tìm hiểu về AI hoặc chơi game để tìm cảm hứng mới.
              </p>
            </div>
          </div>

          {/* Cột Phải: Grid các thông số (Stats) */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((item) => (
              <div 
                key={item.id} 
                className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition duration-300 group"
              >
                <div className="text-3xl text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
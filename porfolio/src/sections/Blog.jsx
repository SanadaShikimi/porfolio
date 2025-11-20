import { useState } from 'react';
import { FaCalendarAlt, FaTag, FaTimes, FaArrowRight } from 'react-icons/fa';

// Dữ liệu Blog mẫu (Bạn có thể thêm bài viết vào đây)
const blogPosts = [
  {
    id: 1,
    title: "Tối ưu hóa React App với useMemo",
    date: "15/11/2024",
    category: "Tech",
    image: "/src/assets/usememo.png",
    excerpt: "Tìm hiểu cách sử dụng useMemo và useCallback để tránh render thừa trong ứng dụng React lớn.",
    content: (
      <>
        <p className="mb-4">React rất nhanh, nhưng nếu không cẩn thận, bạn có thể khiến nó chậm đi vì các lần render không cần thiết. <strong>useMemo</strong> là một hook giúp ghi nhớ giá trị tính toán.</p>
        <h3 className="text-xl font-bold mb-2">Khi nào dùng useMemo?</h3>
        <p className="mb-4">Hãy dùng nó khi bạn có một hàm tính toán nặng (ví dụ xử lý mảng lớn) và không muốn nó chạy lại mỗi khi component render.</p>
        <p>Ví dụ code: <code>const memoizedValue = useMemo(() = computeExpensiveValue(a, b), [a, b]);</code></p>
      </>
    )
  },
  {
    id: 2,
    title: "Tại sao mình chọn Tailwind CSS?",
    date: "10/11/2024",
    category: "Life",
    image: "/src/assets/tailwind-vs-bootstrap.png",
    excerpt: "Câu chuyện chuyển từ Bootstrap sang Tailwind và lý do mình không bao giờ quay lại.",
    content: (
      <>
        <p className="mb-4">Trước đây mình là fan cứng của Bootstrap. Nhưng khi gặp Tailwind, mọi thứ thay đổi. Khả năng tùy biến (customization) của nó là vô hạn.</p>
        <p>Không còn phải ghi đè `!important` khổ sở nữa. Utility-first class giúp code sạch và dễ maintain hơn rất nhiều.</p>
      </>
    )
  },
  {
    id: 3,
    title: "Lộ trình trở thành Fullstack 2025",
    date: "05/11/2024",
    category: "Career",
    image: "/src/assets/fullstack.png",
    excerpt: "Những công nghệ bạn cần học để không bị lỗi thời: Next.js, TypeScript, AI Integration...",
    content: (
      <>
        <p className="mb-4">Thị trường đang thay đổi. Chỉ biết CRUD là chưa đủ.</p>
        <ul className="list-disc pl-5 mb-4">
            <li>Học sâu TypeScript.</li>
            <li>Hiểu về Server Side Rendering (Next.js/Remix).</li>
            <li>Biết cách gọi API của OpenAI/Gemini.</li>
        </ul>
      </>
    )
  }
];

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = ["All", "Tech", "Life", "Career"];

  const filteredPosts = filter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <section id="blog" className="max-w-6xl mx-auto px-4 my-8 mb-20">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Latest Articles
        </h2>

        {/* FR-6.3: Bộ lọc bài viết */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FR-6.1 & 6.2: Danh sách bài viết */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              {/* Ảnh bài viết */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {post.category}
                </div>
              </div>

              {/* Nội dung tóm tắt */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3 font-mono">
                    <FaCalendarAlt /> {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 transition">
                    {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm group-hover:translate-x-2 transition-transform mt-auto">
                    Read More <FaArrowRight className="ml-2 text-xs"/>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Đọc bài viết chi tiết */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fadeIn"
               onClick={() => setSelectedPost(null)}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                 onClick={e => e.stopPropagation()}>
              
              {/* Header Modal: Ảnh to */}
              <div className="relative h-64 md:h-80">
                 <img src={selectedPost.image} className="w-full h-full object-cover" alt={selectedPost.title}/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <div>
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                            {selectedPost.category}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight shadow-black drop-shadow-md">
                            {selectedPost.title}
                        </h2>
                        <div className="text-gray-300 text-sm mt-2 flex items-center gap-2">
                            <FaCalendarAlt /> {selectedPost.date}
                        </div>
                    </div>
                 </div>
                 <button 
                    onClick={() => setSelectedPost(null)} 
                    className="absolute top-4 right-4 bg-black/40 hover:bg-red-600 text-white p-2 rounded-full transition backdrop-blur-md"
                 >
                    <FaTimes />
                 </button>
              </div>

              {/* Nội dung bài viết */}
              <div className="p-8 md:p-12 text-gray-800 dark:text-gray-200 leading-relaxed text-lg">
                {selectedPost.content}
                
                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                    <p className="text-sm text-gray-500 italic">Cảm ơn bạn đã đọc bài viết này!</p>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
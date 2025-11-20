import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; // Import thư viện
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef(); // Tạo tham chiếu đến form
  const [isSending, setIsSending] = useState(false); // Trạng thái đang gửi

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // --- CẤU HÌNH EMAILJS (Thay bằng mã của bạn) ---
    // Bạn cần đăng ký tại https://www.emailjs.com/ để lấy 3 mã này:
    const SERVICE_ID = "YOUR_SERVICE_ID";     // Ví dụ: "service_x8q..."
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";   // Ví dụ: "template_35s..."
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";     // Ví dụ: "user_8a7..."

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert("✅ Gửi tin nhắn thành công! Tôi sẽ phản hồi sớm.");
          setIsSending(false);
          e.target.reset(); // Xóa nội dung form sau khi gửi
      }, (error) => {
          console.log(error.text);
          alert("❌ Có lỗi xảy ra. Vui lòng thử lại hoặc gửi trực tiếp qua email.");
          setIsSending(false);
      });
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 my-8 mb-20">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Cột Trái: Thông tin */}
        <div className="md:w-5/12 bg-slate-800 dark:bg-slate-900 p-8 md:p-10 rounded-2xl shadow-xl text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Bạn có ý tưởng thú vị? Hay chỉ muốn kết nối? Đừng ngần ngại gửi tin nhắn cho tôi nhé.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400">
                        <FaPhone />
                    </div>
                    <span className="text-gray-200">+84 123 456 789</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400">
                        <FaEnvelope />
                    </div>
                    <a href="mailto:contact@shikimi.dev" className="text-gray-200 hover:text-white transition">
                        contact@shikimi.dev
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400">
                        <FaMapMarkerAlt />
                    </div>
                    <span className="text-gray-200">Ho Chi Minh City, VN</span>
                </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 md:mt-0 pt-8 border-t border-gray-600">
             <h3 className="font-semibold mb-4 text-gray-300">Follow Me</h3>
             <div className="flex gap-6 text-2xl">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition transform duration-200">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition transform duration-200">
                    <FaLinkedin />
                </a>
             </div>
          </div>
        </div>

        {/* Cột Phải: Form gửi Email */}
        <div className="md:w-7/12 p-8 md:p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
           <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Message</h2>
           
           <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">Your Name</label>
                    {/* name="user_name" phải khớp với template EmailJS */}
                    <input 
                      type="text" name="user_name" required
                      className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:text-white transition"
                      placeholder="John Doe"
                    />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">Email Address</label>
                    <input 
                      type="email" name="user_email" required
                      className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:text-white transition"
                      placeholder="john@example.com"
                    />
                 </div>
              </div>

              <div className="flex flex-col gap-2">
                 <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">Message</label>
                 <textarea 
                    name="message" rows="5" required
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:text-white transition resize-none"
                    placeholder="Tell me about your project..."
                 ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSending}
                className={`px-8 py-4 text-white font-bold rounded-lg transition shadow-lg w-full md:w-auto transform hover:-translate-y-0.5 flex items-center justify-center gap-2
                  ${isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
                `}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
           </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
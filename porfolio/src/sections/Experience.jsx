import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const historyData = [
  {
    id: 1,
    type: "work",
    title: "Senior React Developer",
    place: "Tech Solutions Inc.",
    time: "2022 - Present",
    desc: "Leader team frontend 5 người, xây dựng hệ thống CRM."
  },
  {
    id: 2,
    type: "education",
    title: "Cử nhân Công nghệ thông tin",
    place: "Đại học Bách Khoa",
    time: "2018 - 2022",
    desc: "GPA: 3.5/4.0. Chuyên ngành Kỹ thuật phần mềm."
  },
  {
    id: 3,
    type: "work",
    title: "Frontend Intern",
    place: "Creative Web Agency",
    time: "2021 - 2022",
    desc: "Hỗ trợ cắt HTML/CSS từ file PSD/Figma."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 my-8">
      {/* Đã bỏ thẻ div bọc bg-white shadow-2xl */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience & Education
        </h2>
        
        <div className="relative border-l-4 border-blue-300 dark:border-gray-600 ml-4 md:ml-6 space-y-12">
          {historyData.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              
              <span className={`absolute -left-[22px] top-0 flex items-center justify-center w-11 h-11 rounded-full ring-4 ring-slate-200 dark:ring-gray-900 ${
                item.type === 'work' ? 'bg-blue-600' : 'bg-emerald-500'
              } text-white shadow-lg`}>
                {item.type === 'work' ? <FaBriefcase size={18}/> : <FaGraduationCap size={20}/>}
              </span>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 mb-3">
                  {item.time}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <h4 className="text-md font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {item.place}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
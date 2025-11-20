import { FaReact, FaNodeJs, FaHtml5, FaTools, FaDatabase } from 'react-icons/fa';

// Dữ liệu
const skillsData = {
  "Frontend Development": [
    { name: "ReactJS", level: 90, icon: <FaReact /> },
    { name: "HTML5/CSS3", level: 95, icon: <FaHtml5 /> },
    { name: "Tailwind CSS", level: 85, icon: <FaReact /> },
  ],
  "Backend Development": [
    { name: "NodeJS", level: 75, icon: <FaNodeJs /> },
    { name: "MongoDB", level: 70, icon: <FaDatabase /> },
  ],
  "Tools & Others": [
    { name: "Git/GitHub", level: 80, icon: <FaTools /> },
    { name: "Figma (UI/UX)", level: 60, icon: <FaTools /> },
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400 border-b pb-2">
                {category}
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> 
        
      </div> 
    </section> 
  );
};

export default Skills;
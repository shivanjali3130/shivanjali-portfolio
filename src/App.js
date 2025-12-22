import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, GraduationCap, User, FileText } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/98 backdrop-blur-sm z-50 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              SW
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-6xl font-bold text-white">
              SW
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Shivanjali Walke
          </h1>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://www.linkedin.com/in/shivanjali-walke-356952347"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:walkeshivanjali970@gmail.com"
              className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
            >
              <Mail size={24} className="text-white" />
            </a>
            <a
              href="tel:9021306620"
              className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
            >
              <Phone size={24} className="text-white" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center">
            <User className="mr-4 text-purple-400" size={40} />
            About Me
          </h2>
                      <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Motivated and detail-oriented Computer Engineering student (T.E.) with a passion for creating 
              user-focused digital solutions. I specialize in full-stack web development using the MERN stack 
              and have hands-on experience building real-world applications.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <GraduationCap className="text-purple-400 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-semibold mb-1">Education</h3>
                  <p className="text-gray-400 text-sm">B.E. Computer Engineering</p>
                  <p className="text-gray-400 text-sm">Genba Sopanrao Moze College of Engineering</p>
                  <p className="text-cyan-400 text-sm font-semibold">CGPA: 8.00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-cyan-400 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400 text-sm">Pune, Maharashtra</p>
                  <p className="text-gray-400 text-sm">Available for Remote & On-site Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center justify-center">
            <Code className="mr-4 text-purple-400" size={40} />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Frontend',
                skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
                icon: '🎨'
              },
              {
                title: 'Backend',
                skills: ['Node.js', 'MongoDB', 'MongoDB Atlas', 'REST APIs'],
                icon: '⚙️'
              },
              {
                title: 'Languages',
                skills: ['C', 'C++', 'Python', 'JavaScript'],
                icon: '💻'
              },
              {
                title: 'Tools',
                skills: ['Visual Studio Code', 'Git', 'npm'],
                icon: '🛠️'
              },
              {
                title: 'Protocols',
                skills: ['SMTP', 'POP3', 'HTTP/HTTPS'],
                icon: '🌐'
              },
              {
                title: 'Soft Skills',
                skills: ['Communication', 'Problem-solving', 'Team Collaboration', 'Time Management'],
                icon: '🤝'
              }
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center justify-center">
            <FileText className="mr-4 text-purple-400" size={40} />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Samrath Enterprises',
                description: 'Professional business website for a service-based organization providing labour security, housekeeping, and gardening services. Features an enquiry form with secure database storage.',
                tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB Atlas', 'SMTP', 'POP3'],
                color: 'from-blue-600 to-cyan-600'
              },
              {
                title: 'Movie Review Website',
                description: 'Dynamic platform allowing users to post and read movie reviews with user ratings and interactive comment sections for feedback.',
                tech: ['JavaScript', 'Node.js', 'MongoDB', 'HTML', 'CSS'],
                color: 'from-purple-600 to-pink-600'
              },
              {
                title: 'Restaurant Website',
                description: 'Responsive restaurant website showcasing menu items and details with contact and enquiry functionality for customer interaction.',
                tech: ['HTML', 'CSS', 'JavaScript'],
                color: 'from-orange-600 to-red-600'
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyan-600/20 text-cyan-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center justify-center">
            <Briefcase className="mr-4 text-purple-400" size={40} />
            Experience
          </h2>
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Front End Developer Intern
                </h3>
                <p className="text-cyan-400 font-semibold mb-4">
                  Overload Ware Labs AI | October 2025 | Remote
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-gray-300">Worked on AI-driven frontend development projects.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-gray-300">Strengthened understanding of web development concepts and UI implementation.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-gray-300">Gained hands-on experience with real-world project collaboration and remote teamwork.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm currently looking for internship opportunities in web development. Let's connect!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:walkeshivanjali970@gmail.com"
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
            >
              <Mail className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm break-all">walkeshivanjali970@gmail.com</p>
            </a>
            <a
              href="tel:9021306620"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <Phone className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+91 9021306620</p>
            </a>
            <a
              href="https://www.linkedin.com/in/shivanjali-walke-356952347"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <Linkedin className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            <p>Languages: English, Marathi, Hindi</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/98 border-t border-slate-700/50 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Shivanjali Walke. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
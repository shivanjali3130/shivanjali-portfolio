import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, Phone, MapPin, Code, Briefcase, GraduationCap, User, FileText } from 'lucide-react';

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
              Motivated and detail-oriented Computer Engineering student (T.E.) seeking internship opportunities in Web Development. I specialize in building user-focused digital solutions with expertise in the MERN stack and modern web technologies. I've completed multiple internships developing responsive websites, interactive applications, and dynamic web platforms with real-world impact.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <GraduationCap className="text-purple-400 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-semibold mb-1">Education</h3>
                  <p className="text-gray-400 text-sm">B.E. Computer Engineering</p>
                  <p className="text-gray-400 text-sm">Genba Sopanrao Moze College of Engineering, Balewadi, Pune</p>
                  <p className="text-cyan-400 text-sm font-semibold">2023 – Present (Expected Graduation: 2027)</p>
                  <p className="text-cyan-400 text-sm font-semibold">CGPA: 8.33 (Up to Semester 5)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-cyan-400 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400 text-sm">Pune, Maharashtra, India</p>
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
                skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
                icon: '🎨'
              },
              {
                title: 'Backend',
                skills: ['Node.js', 'MongoDB', 'MongoDB Atlas', 'REST APIs', 'SMTP', 'POP3'],
                icon: '⚙️'
              },
              {
                title: 'Languages',
                skills: ['C', 'C++', 'Python', 'JavaScript', 'PHP (Basics)'],
                icon: '💻'
              },
              {
                title: 'Tools & Software',
                skills: ['Visual Studio Code', 'Git', 'npm', 'VS Code'],
                icon: '🛠️'
              },
              {
                title: 'Advanced CSS',
                skills: ['Gradients', 'Animations', 'Flexbox', 'Grid', 'Custom Scrollbars'],
                icon: '✨'
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
                title: 'Vrundavan Restaurant',
                description: 'Full-featured restaurant landing page with interactive menu system, shopping cart with real-time calculations, user authentication modal, search functionality, and review section.',
                tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
                color: 'from-orange-600 to-red-600'
              },
              {
                title: 'ChronoLux',
                description: 'Precision stopwatch application featuring animated clock hands, circular progress ring animation, lap recording with timestamps, and futuristic UI with gradient effects and glow animations.',
                tech: ['JavaScript', 'HTML5', 'CSS3'],
                color: 'from-yellow-600 to-orange-600'
              },
              {
                title: 'Nought & Crown',
                description: 'Interactive Tic-Tac-Toe game with minimax-based AI opponent, dual-mode gameplay (Player vs Player and Player vs AI), win condition detection, and persistent score tracking.',
                tech: ['JavaScript', 'HTML5', 'CSS3', 'Game AI'],
                color: 'from-blue-600 to-cyan-600'
              },
              {
                title: 'Weather Application',
                description: 'React-based weather application using Vite build tool, featuring real-time data integration via WeatherAPI, geolocation support, city search functionality, and glassmorphism UI with Tailwind CSS.',
                tech: ['React.js', 'Vite', 'Tailwind CSS', 'WeatherAPI', 'Lucide React'],
                color: 'from-cyan-600 to-blue-600'
              },
              {
                title: 'Personal Portfolio',
                description: 'Modern portfolio website with smooth scroll navigation, intersection observer animations, parallax effects on floating elements, animated statistics counters, and contact form with validation.',
                tech: ['HTML5', 'CSS3', 'JavaScript'],
                color: 'from-purple-600 to-pink-600'
              },
              {
                title: 'Samrath Enterprises',
                description: 'Professional business website for a service-based organization. Features an enquiry form with secure database storage via SMTP/POP3 protocols.',
                tech: ['React.js', 'Node.js', 'MongoDB Atlas', 'HTML', 'CSS', 'JavaScript'],
                color: 'from-green-600 to-emerald-600'
              },
              {
                title: 'FOODHUB',
                description: 'Fully responsive restaurant website with dynamic product cards, interactive menu with add-to-cart functionality, quantity selectors, and fixed sticky header navigation.',
                tech: ['HTML5', 'CSS3', 'JavaScript'],
                color: 'from-orange-600 to-amber-600'
              },
              {
                title: 'TaskFlow',
                description: 'Full-featured task management app with local storage integration, filter functionality, CRUD operations, real-time statistics dashboard, and notification system.',
                tech: ['HTML', 'CSS', 'JavaScript'],
                color: 'from-teal-600 to-green-600'
              },
              {
                title: 'Cosmic Explorer',
                description: 'Educational space exploration website with grid-based layouts, lesson tracking system, sidebar navigation, and custom animations for enhanced user engagement.',
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Grid Layout'],
                color: 'from-indigo-600 to-purple-600'
              },
              {
                title: 'Velour Brew House',
                description: 'Premium coffee shop website featuring smooth scroll navigation, intersection observer animations, menu selection, order form with validation, and responsive design.',
                tech: ['HTML5', 'CSS3', 'JavaScript'],
                color: 'from-amber-700 to-orange-700'
              },
              {
                title: 'Interactive JavaScript Quiz',
                description: 'Dynamic quiz application with dynamic question loading, progress tracking, score calculation, result display with performance feedback, and animated UI elements.',
                tech: ['HTML5', 'CSS3', 'JavaScript'],
                color: 'from-rose-600 to-pink-600'
              },
              {
                title: 'Twist Blog',
                description: 'Semantic HTML blog page utilizing proper HTML5 structure with header, main, article, section, figure, and footer elements for accessibility.',
                tech: ['HTML5', 'CSS3', 'Semantic HTML'],
                color: 'from-cyan-600 to-blue-600'
              },
              {
                title: 'Owl AI',
                description: 'AI-themed landing page with interactive form elements, gradient backgrounds, responsive design, and modern UI with Font Awesome icons.',
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome'],
                color: 'from-purple-600 to-violet-600'
              },
              {
                title: 'Movie Review Website',
                description: 'Dynamic platform allowing users to post and read movie reviews with user ratings and interactive comment sections for feedback.',
                tech: ['JavaScript', 'Node.js', 'MongoDB', 'HTML', 'CSS'],
                color: 'from-pink-600 to-rose-600'
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
          <div className="space-y-8">
            {[
              {
                title: 'Web Development Intern',
                company: 'Prodigy InfoTech',
                period: 'January 2026 – February 2026',
                location: 'Remote',
                highlights: [
                  'Developed full-featured restaurant landing page (Vrundavan Restaurant) with interactive menu, shopping cart, user authentication modal, and search functionality',
                  'Created precision stopwatch application (ChronoLux) with animated clock hands, lap recording system, and futuristic UI with gradient effects',
                  'Built interactive Tic-Tac-Toe game (Nought & Crown) with minimax-based AI opponent and dual-mode gameplay',
                  'Designed modern personal portfolio website with smooth scroll navigation, parallax effects, and animated statistics counters',
                  'Developed React-based weather application using Vite with WeatherAPI integration, geolocation support, and glassmorphism UI',
                  'Demonstrated proficiency in vanilla JavaScript, React.js, Vite, API integration, DOM manipulation, and advanced CSS techniques'
                ]
              },
              {
                title: 'Front-End Development Intern',
                company: 'SaiKet Systems',
                period: 'December 2025 – January 2026',
                location: 'Remote',
                highlights: [
                  'Developed semantic HTML blog page (Twist Blog) with proper HTML5 structure',
                  'Created responsive restaurant website (FOODHUB) with interactive product cards and add-to-cart functionality',
                  'Built educational space exploration website (Cosmic Explorer) with grid layouts and lesson tracking',
                  'Designed interactive JavaScript quiz application with dynamic question loading and performance feedback',
                  'Created full-featured task management app (TaskFlow) with local storage and CRUD operations',
                  'Developed premium coffee shop website (Velour Brew House) with smooth animations and form validation',
                  'Implemented advanced CSS techniques including gradients, animations, and modern UI patterns'
                ]
              },
              {
                title: 'Web Development Intern',
                company: 'CodSoft',
                period: 'December 2025 – January 2026',
                location: 'Remote',
                highlights: [
                  'Developed responsive portfolio website with sticky navigation and professional styling',
                  'Created TechFlow landing page with gradient backgrounds and animated hero section',
                  'Built fully functional calculator web application with responsive design and keyboard support',
                  'Demonstrated proficiency in HTML5, CSS3, JavaScript, and modern UI/UX principles'
                ]
              },
              {
                title: 'Front End Developer Intern',
                company: 'Overload Ware Labs AI',
                period: 'October 2025',
                location: 'Remote',
                highlights: [
                  'Designed and developed AI-themed landing page (Owl AI) with interactive form elements',
                  'Implemented gradient backgrounds and responsive design using HTML, CSS, and Font Awesome icons',
                  'Created engaging user interfaces with advanced CSS techniques (gradients, shadows, transitions)',
                  'Developed fixed header navigation with logo branding and consistent brand identity',
                  'Built responsive layouts using flexbox for optimal display across devices'
                ]
              }
            ].map((exp, idx) => (
              <div key={idx} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-1">
                      {exp.company} | {exp.period} | {exp.location}
                    </p>
                    <ul className="space-y-2 mt-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Download, 
  Code2, 
  Globe, 
  Database, 
  Terminal, 
  Cpu,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const PROJECTS = [
  {
    title: "MediTour Global",
    description: "A comprehensive medical tourism platform connecting international patients with top-tier healthcare providers. Features advanced doctor search, booking systems, and patient record management.",
    link: "https://meditour.global/",
    tags: ["React", "Node.js", "NestJS", "MongoDB", "TypeScript"]
  },
  {
    title: "Nova Media",
    description: "High-performance marketing agency platform with a focus on conversion optimization and sleek UI/UX design components.",
    link: "https://novamedia.pro/",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Framer Motion"]
  },
  {
    title: "Custom Boxes",
    description: "Full-scale e-commerce solution for custom packaging with real-time pricing, Stripe integration, and complex logistics management.",
    link: "https://thecustomboxes.co.uk/",
    tags: ["Next.js", "Stripe API", "Node.js", "PostgreSQL"]
  },
  {
    title: "Viral Agency Method",
    description: "Digital learning platform for marketing agencies with membership management, interactive content delivery, and progress tracking.",
    link: "https://viralagencymethod.com/",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"]
  },
  {
    title: "GilgitGo.pk",
    description: "A centralized travel and tourism booking engine specializing in northern Pakistan tours, vehicle rentals, and hotel stays.",
    link: "https://gilgitgo.pk/",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux"]
  },
  {
    title: "Innam Bazar",
    description: "Hyper-local e-commerce marketplace platform designed for community-based commerce and real-time order tracking.",
    link: "#",
    tags: ["React Native", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Milton Hunt Calendar",
    description: "Calendar invitation and event management dashboard with real-time updates and seamless team collaboration tools.",
    link: "https://calendar-invites-e8a65.web.app/dashboard",
    tags: ["React", "Firebase", "Firestore"]
  },
  {
    title: "ADDTHIS.co",
    description: "Backend architecture for a digital loyalty platform built for high concurrency and scalable customer rewards management.",
    link: "https://addthis.co/",
    tags: ["Node.js", "Express", "Firebase", "TypeScript"]
  }
];

const SKILLS = {
  Backend: ["Node.js", "Express.js", "Nest.js", "PHP", "TypeScript", "RESTful APIs"],
  Frontend: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Firestore", "Supabase"],
  "DevOps & Cloud": ["Firebase", "AWS (EC2, Lambda)", "Docker", "CI/CD Pipelines", "Vercel"]
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 font-sans selection:bg-white selection:text-black relative overflow-hidden">
      {/* Dynamic Cursor Spotlight */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />
      
      {/* Background Texture & Aura */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-zinc-800/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-zinc-800/10 blur-[150px] rounded-full animate-pulse delay-1000" />
      </div>
      
      {/* Animated Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-overlay opacity-30 grayscale contrast-100 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[100]" 
        style={{ scaleX }} 
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[90] bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg bg-white">
              <motion.span 
                initial={{ y: 0 }}
                whileHover={{ y: -32 }}
                className="absolute flex flex-col items-center"
              >
                <span className="h-8 flex items-center text-black text-lg">N</span>
                <span className="h-8 flex items-center text-black text-lg">T</span>
              </motion.span>
            </div>
            <span>NADIA<span className="text-zinc-500">TARIQ</span></span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="group relative text-sm font-medium text-zinc-400 hover:text-white transition-colors py-2"
              >
                {link.name}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/5 px-6 py-8 flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold tracking-tight text-zinc-400 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 mb-6 font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for new opportunities
              </motion.div>
              <h1 className="text-6xl md:text-[10vw] font-display tracking-tight mb-8 leading-[0.8] overflow-hidden uppercase">
                { "NADIA TARIQ".split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-4">
                    {word.split("").map((char, j) => (
                      <motion.span
                        key={j}
                        initial={{ y: "110%", rotate: 5 }}
                        animate={{ y: 0, rotate: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: (i * 5 + j) * 0.03,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl text-zinc-400 mb-6 max-w-xl leading-relaxed"
              >
                Full Stack Developer (React | Node.js | TypeScript)
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-lg text-zinc-500 mb-10 max-w-lg leading-relaxed italic"
              >
                "Building scalable web applications and modern digital solutions"
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a 
                  href="#projects" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  View Projects <ChevronRight size={18} />
                </motion.a>
                <motion.a 
                  href="#contact" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent text-white font-bold rounded-2xl flex items-center gap-2 border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all"
                >
                  Contact Me
                </motion.a>
                <motion.a 
                  href="/resume.pdf" 
                  download 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-zinc-900/50 text-zinc-300 font-bold rounded-2xl flex items-center gap-2 border border-white/5 hover:bg-zinc-800 hover:text-white transition-all w-full md:w-auto justify-center"
                >
                  Download CV <Download size={18} />
                </motion.a>
              </motion.div>

              <div className="flex items-center gap-6 mt-12 text-zinc-500">
                <motion.a whileHover={{ y: -3, color: "#fff" }} href="https://github.com/NadiaTariq66" className="transition-colors"><Github size={24} /></motion.a>
                <motion.a whileHover={{ y: -3, color: "#fff" }} href="https://linkedin.com/in/nadia-tariq" className="transition-colors"><Linkedin size={24} /></motion.a>
                <motion.a whileHover={{ y: -3, color: "#fff" }} href="mailto:tariqnadia830@gmail.com" className="transition-colors"><Mail size={24} /></motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all duration-700 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Nadia Tariq"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-xl" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-xl" />
              
              <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hidden md:flex flex-col justify-center items-center text-center shadow-2xl z-20">
                <div className="text-5xl font-black text-white">3+</div>
                <div className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mt-3 leading-tight font-sans">Years of <br /> Professional <br /> Experience</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Marquee Section */}
        <div className="py-12 border-y border-white/5 overflow-hidden bg-black relative flex items-center">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 text-6xl md:text-8xl font-black tracking-tighter opacity-10 select-none uppercase italic"
          >
            {Array(5).fill("Full Stack Developer • React Expert • Node.js Backend • UI/UX Enthusiast •").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </motion.div>
        </div>

        {/* About Section */}
        <section id="about" className="py-20 px-6 border-y border-white/5 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500 mb-12">/ Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <p className="text-3xl font-medium tracking-tight leading-snug">
                I design and deploy <span className="text-zinc-500 uppercase italic font-black">scalable</span> web applications with a focus on performance and maintainability.
              </p>
              <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
                <p>
                  With expertise in both SQL and NoSQL databases, I build robust backends using Node.js and NestJS, balanced with fluid, reactive frontends using React.js.
                </p>
                <p>
                  My experience spans from early-stage startups to established tech firms, always prioritizing clean code and architectural integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
             <motion.h2 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500 mb-12"
             >
               / Expertise
             </motion.h2>
             <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
             >
                {Object.entries(SKILLS).map(([category, items]) => (
                  <motion.div 
                    key={category}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      borderColor: "rgba(255,255,255,0.2)",
                      backgroundColor: "rgba(255,255,255,0.05)"
                    }}
                    className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 transition-colors duration-500"
                  >
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                      {category === "Backend" && <Terminal size={20} className="text-zinc-400" />}
                      {category === "Frontend" && <Globe size={20} className="text-zinc-400" />}
                      {category === "Databases" && <Database size={20} className="text-zinc-400" />}
                      {category === "DevOps & Cloud" && <Cpu size={20} className="text-zinc-400" />}
                    </div>
                    <h3 className="font-bold mb-4 tracking-tight">{category}</h3>
                    <ul className="space-y-2">
                      {items.map(item => (
                        <li key={item} className="text-sm text-zinc-500 flex items-center gap-2">
                           <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                           {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
             </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 bg-[#0d0d0d] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500 mb-12">/ Professional Experience</h2>
            <div className="space-y-2">
              <ExperienceItem 
                company="Creative Code Tech"
                role="Senior Full Stack Developer"
                date="11/2024 – Present"
                bullets={[
                  "Leading microservice-based applications using Node.js, NestJS, and React.js.",
                  "Implementing Firebase services (Cloud Functions, Firestore) for real-time features.",
                  "Reducing deployment cycles by 40% using CI/CD pipelines with GitHub Actions."
                ]}
              />
              <ExperienceItem 
                company="BerryBoost Inc"
                role="Full Stack Developer"
                date="07/2023 – 11/2024"
                bullets={[
                  "Developed scalable APIs using Express and optimized React components.",
                  "Enhanced database performance, reducing API response times by 30%.",
                  "Integrated third-party APIs to support business growth and automation."
                ]}
              />
              <ExperienceItem 
                company="Content Studio (USA)"
                role="Node.js Developer"
                date="12/2022 – 05/2023"
                bullets={[
                  "Built enterprise-grade Node.js applications with high concurrency.",
                  "Designed RESTful APIs for data-heavy features with MongoDB.",
                  "Optimized query performance and improved overall application security."
                ]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4">/ Case Studies</h2>
                <h3 className="text-5xl md:text-7xl font-display uppercase leading-none">Selected Works</h3>
              </div>
              <p className="text-zinc-500 max-w-xs text-sm font-medium">
                A showcase of projects ranging from medical platforms to loyalty systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-zinc-900 border border-white/5 p-8 rounded-3xl h-full flex flex-col hover:border-white/20 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-2xl rounded-full -mr-10 -mt-10 group-hover:bg-white/[0.05] transition-colors" />
                    
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                        <Code2 className="text-zinc-400 group-hover:text-white transition-colors" />
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 text-zinc-500 hover:text-white transition-colors bg-white/0 hover:bg-white/5 rounded-full">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <h4 className="text-2xl font-bold mb-3 relative z-10 group-hover:text-white transition-colors">{project.title}</h4>
                    <p className="text-zinc-500 mb-6 flex-grow leading-relaxed relative z-10 text-sm md:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-white/5 text-zinc-500 rounded-md border border-white/5 group-hover:border-white/20 group-hover:text-zinc-300 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 bg-[#000000] border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/[0.01] to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black tracking-[0.5em] uppercase text-zinc-600 mb-12"
            >
              / Collaboration
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[10vw] font-display leading-[0.8] mb-16 uppercase text-white"
            >
              Let's build <br /> something <span className="text-zinc-800 italic">bold</span>
            </motion.h3>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-20">
              <motion.a 
                whileHover={{ y: -5, scale: 1.02 }}
                href="mailto:tariqnadia830@gmail.com" 
                className="group flex flex-col items-center gap-4 text-zinc-400 hover:text-white transition-all w-full md:w-auto"
              >
                <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border border-white/10 shadow-xl group-hover:shadow-white/10">
                  <Mail size={28} />
                </div>
                <span className="text-xl font-medium tracking-tight">tariqnadia830@gmail.com</span>
              </motion.a>
              
              <div className="hidden lg:block w-px h-24 bg-white/5" />

              <motion.a 
                whileHover={{ y: -5, scale: 1.02 }}
                href="tel:+923040494573" 
                className="group flex flex-col items-center gap-4 text-zinc-400 hover:text-white transition-all w-full md:w-auto"
              >
                <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border border-white/10 shadow-xl group-hover:shadow-white/10">
                  <Phone size={28} />
                </div>
                <span className="text-xl font-medium tracking-tight">+92 3040494573</span>
              </motion.a>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative inline-block group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-16 py-8 bg-white text-black font-black text-2xl rounded-full tracking-tighter shadow-2xl hover:scale-105 transition-transform"
              >
                BOOK A DISCOVERY CALL
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-600 text-sm font-medium">
            © 2026 NADIA TARIQ. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-zinc-500 text-xs font-bold uppercase tracking-widest">
             <a href="https://github.com/NadiaTariq66" className="hover:text-white">Github</a>
             <a href="https://linkedin.com/in/nadia-tariq" className="hover:text-white">Linkedin</a>
             <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ExperienceItem({ company, role, date, bullets }: { company: string, role: string, date: string, bullets: string[] }) {
  return (
    <div className="group border-b border-white/5 py-12 last:border-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-zinc-500 font-mono text-sm uppercase font-bold">{date}</div>
        <div className="md:col-span-1">
          <h4 className="text-xl font-bold tracking-tight mb-1">{company}</h4>
          <div className="text-zinc-500 text-sm font-medium uppercase tracking-widest">{role}</div>
        </div>
        <div className="md:col-span-2">
          <ul className="space-y-4">
            {bullets.map((bullet, i) => (
              <li key={i} className="text-zinc-400 group-hover:text-zinc-200 transition-colors leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

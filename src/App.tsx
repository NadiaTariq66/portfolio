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
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

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
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.1), transparent 80%)`
        }}
      />
      
      {/* Background Texture & Aura */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-emerald-900/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-emerald-900/10 blur-[150px] rounded-full animate-pulse delay-1000" />
      </div>
      
      {/* Animated Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-overlay opacity-30 grayscale contrast-100 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]" 
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
        <section id="home" className="relative pt-32 pb-40 px-6 overflow-hidden">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 text-center lg:text-left"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-10 transition-colors hover:border-primary/40 group"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  <span className="text-[11px] uppercase tracking-[0.3em] font-black text-primary group-hover:text-emerald-400">Portfolio 2024 • Open for Projects</span>
                </motion.div>

                <h1 className="text-7xl md:text-[9vw] font-display font-black leading-[0.8] uppercase tracking-tighter mb-10 scale-y-110 origin-left">
                  Developing <br />
                  <span className="text-primary italic relative">
                    Impact
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 300 20">
                      <path d="M0 10 Q75 0 150 10 T300 10" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-tight font-light tracking-tight">
                  I'm <span className="text-white font-medium">Nadia Tariq</span>, a Full Stack Developer building scalable architectures and performance-obsessed digital interfaces.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-20">
                  <motion.a 
                    href="#projects" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-primary text-black font-black rounded-full flex items-center gap-3 shadow-[0_20px_50px_rgba(16,185,129,0.2)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.4)] transition-all"
                  >
                    View My Work <ArrowRight size={20} />
                  </motion.a>
                  <motion.a 
                    href="/resume.pdf" 
                    download
                    className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-3"
                  >
                    Resume <Download size={18} />
                  </motion.a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                  {['React', 'Node.js', 'TypeScript', 'NestJS'].map((skill, i) => (
                    <div key={skill} className="px-6 py-3 rounded-2xl bg-zinc-900/50 border border-white/5 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:border-primary/20 hover:text-primary transition-all cursor-default text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="relative group shrink-0"
              >
                <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] relative">
                  {/* Glowing Background */}
                  <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                  
                  {/* Main Image Frame */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-[12px] border-zinc-900 shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                      alt="Nadia Tariq"
                      className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
                  </div>

                  {/* Circular Orbit Text (Optional decoration - simplified with CSS) */}
                  <div className="absolute -inset-10 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
                  <div className="absolute -inset-20 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                  {/* Experience Badge */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 -right-6 md:top-10 md:-right-10 bg-zinc-900/90 backdrop-blur-2xl border border-primary/40 p-8 rounded-[3rem] shadow-2xl z-30 flex flex-col items-center justify-center min-w-[140px]"
                  >
                    <span className="text-5xl font-black text-primary leading-none">3+</span>
                    <span className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mt-2">Years of<br/>Mastery</span>
                  </motion.div>

                  {/* Skills Mini-Pill */}
                  <motion.div 
                    animate={{ x: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-10 -left-12 bg-zinc-900/90 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-full shadow-2xl z-30 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">
                      <Code2 size={16} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-300">Software Engineer</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Social Links Ribbon */}
            <div className="mt-32 flex flex-wrap items-center justify-center lg:justify-start gap-12 border-t border-white/5 pt-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Find me on</span>
              <div className="flex gap-8 items-center">
                <a href="https://github.com/NadiaTariq66" className="text-zinc-500 hover:text-white hover:scale-110 transition-all flex items-center gap-2 group">
                  <Github size={20} /> <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/nadia-tariq" className="text-zinc-500 hover:text-white hover:scale-110 transition-all flex items-center gap-2 group">
                  <Linkedin size={20} /> <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                </a>
                <a href="mailto:tariqnadia830@gmail.com" className="text-zinc-500 hover:text-white hover:scale-110 transition-all flex items-center gap-2 group">
                  <Mail size={20} /> <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
                </a>
              </div>
            </div>
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
        <section id="about" className="py-24 px-6 border-y border-white/5 bg-[#0d0d0d] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-12">/ Crafting Digital Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-8">
                  Transforming <span className="text-primary italic">Ideas</span> Into <span className="text-white underline decoration-primary/30">Seamless</span> Digital Realities.
                </p>
                <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
                  <p>
                    I am a Full Stack Developer dedicated to building robust, high-performance web and mobile applications. My approach blends technical precision with a user-centric philosophy.
                  </p>
                </div>
              </div>
              <div className="relative group p-8 bg-zinc-900/50 rounded-[3rem] border border-white/5 hover:border-primary/20 transition-all duration-500">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Modern Tech Stack</h4>
                      <p className="text-sm text-zinc-500">Specializing in NestJS, React, PHP and modern JavaScript frameworks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Database size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Database Architecture</h4>
                      <p className="text-sm text-zinc-500">Expertise in SQL/NoSQL systems for optimized and scalable data management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-xs font-black tracking-[0.4em] uppercase text-primary mb-6">/ Core Expertise</h2>
                <h3 className="text-5xl md:text-7xl font-display font-black uppercase leading-none tracking-tighter">
                  Technical <br />
                  <span className="text-zinc-600">Arsenal</span>
                </h3>
              </div>
              <p className="text-zinc-500 max-w-sm text-lg leading-tight">
                Architecting robust systems across the entire stack with a focus on scalability and developer experience.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {Object.entries(SKILLS).map(([category, items], idx) => (
                <motion.div 
                  key={category}
                  variants={itemVariants}
                  className="group relative p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-primary/30 transition-all duration-700 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                    {category === "Backend" && <Terminal size={80} />}
                    {category === "Frontend" && <Globe size={80} />}
                    {category === "Databases" && <Database size={80} />}
                    {category === "DevOps & Cloud" && <Cpu size={80} />}
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
                      {category === "Backend" && <Terminal size={20} className="text-primary" />}
                      {category === "Frontend" && <Globe size={20} className="text-primary" />}
                      {category === "Databases" && <Database size={20} className="text-primary" />}
                      {category === "DevOps & Cloud" && <Cpu size={20} className="text-primary" />}
                    </div>
                    <h3 className="text-xl font-bold mb-6 tracking-tight text-white">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map(item => (
                        <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-100 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">/ Our Services</h2>
              <h3 className="text-5xl md:text-6xl font-display uppercase tracking-tight">Specialized Solutions</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Code2 size={24} />}
                title="Full Stack Web Dev"
                description="End-to-end development using React, Node.js, and NestJS."
              />
              <ServiceCard 
                icon={<Database size={24} />}
                title="Backend Architecture"
                description="Scalable server-side logic and database optimization."
              />
              <ServiceCard 
                icon={<Globe size={24} />}
                title="API Development"
                description="RESTful and GraphQL API design and integration."
              />
              <ServiceCard 
                icon={<Terminal size={24} />}
                title="DevOps & Deployment"
                description="CI/CD pipelines, Docker, and cloud infrastructure."
              />
              <ServiceCard 
                icon={<Cpu size={24} />}
                title="System Design"
                description="High-level architecture for complex enterprise systems."
              />
              <ServiceCard 
                icon={<Globe size={24} />}
                title="E-commerce Solutions"
                description="Custom online stores with secure payment gateways."
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6 bg-[#080808]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-20 group">
              <h2 className="text-xs font-black tracking-[0.5em] uppercase text-zinc-600 transition-colors group-hover:text-primary">/ Journey</h2>
              <div className="h-px flex-1 bg-white/5 group-hover:bg-primary/20 transition-colors" />
            </div>
            
            <div className="space-y-12 relative">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/50 via-zinc-800 to-transparent" />
              
              <ExperienceItem 
                company="Creative Code Tech"
                role="Senior Full Stack Developer"
                date="11/2024 – Present"
                bullets={[
                  "Leading microservice-based applications using Node.js, NestJS, and React.js.",
                  "Implementing Firebase services for mission-critical real-time features.",
                  "Reducing deployment cycles by 40% through infrastructure automation."
                ]}
              />
              <ExperienceItem 
                company="BerryBoost Inc"
                role="Full Stack Developer"
                date="07/2023 – 11/2024"
                bullets={[
                  "Built high-throughput backend systems reducing response times by 30%.",
                  "Engineered responsive user interfaces with focus on performance & SEO.",
                  "Orchestrated third-party integrations for business process automation."
                ]}
              />
              <ExperienceItem 
                company="Content Studio (USA)"
                role="Node.js Developer"
                date="12/2022 – 05/2023"
                bullets={[
                  "Developed enterprise Node.js applications handling extreme concurrency.",
                  "Database schema design & query optimization for heavy data loads.",
                  "Improved security protocols for sensitive user data management."
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

        {/* Achievements Section */}
        <section className="py-24 px-6 border-t border-white/5 bg-black/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AchievementCard 
              count="10+" 
              label="Web Projects Delivered" 
              description="Scalable enterprise and consumer web solutions."
            />
            <AchievementCard 
              count="3+" 
              label="Years of Excellence" 
              description="Consistent quality and innovation in development."
            />
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">/ Blog & Insights</h2>
                <h3 className="text-5xl font-display uppercase">Latest Thinking</h3>
              </div>
              <motion.button 
                whileHover={{ x: 5 }}
                className="hidden md:flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase border-b border-primary/20 pb-1"
              >
                View All Posts <ChevronRight size={16} />
              </motion.button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BlogCard 
                date="May 12, 2024"
                title="Scaling NestJS Backends with Redis"
                category="Technical"
              />
              <BlogCard 
                date="Apr 28, 2024"
                title="Mastering Framer Motion for Modern UI"
                category="Frontend"
              />
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
    <div className="relative pl-16 py-6 group">
      {/* Timeline Node */}
      <div className="absolute left-0 top-8 w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center z-10 group-hover:border-primary/50 transition-colors">
        <div className="w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-primary transition-colors" />
      </div>
      
      <div className="p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 group-hover:border-white/10 transition-all duration-500 hover:shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h4 className="text-2xl font-bold tracking-tight text-white mb-1">{company}</h4>
            <div className="text-primary text-xs font-black uppercase tracking-[0.2em]">{role}</div>
          </div>
          <div className="text-zinc-600 font-mono text-xs font-bold bg-white/5 px-4 py-1.5 rounded-full">{date}</div>
        </div>
        <ul className="space-y-3">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed flex gap-3 text-sm">
              <span className="text-primary opacity-50 mt-1">•</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AchievementCard({ count, label, description }: { count: string, label: string, description: string }) {
  return (
    <div className="p-12 rounded-[3rem] bg-zinc-900/20 border border-white/5 hover:border-primary/20 transition-all duration-700 group relative overflow-hidden">
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
      <div className="flex items-end gap-2 mb-6">
        <div className="text-7xl font-display font-black text-white tracking-tighter group-hover:text-primary transition-colors">{count}</div>
      </div>
      <h4 className="text-xl font-bold mb-4 text-zinc-100 uppercase tracking-tight">{label}</h4>
      <p className="text-zinc-500 leading-relaxed text-lg max-w-sm">{description}</p>
      
      <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
          Verified Impact <div className="h-px flex-1 bg-primary/20" />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-primary/20 transition-all duration-500 group">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-black transition-all mb-6">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
      <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function BlogCard({ date, title, category }: { date: string, title: string, category: string }) {
  return (
    <div className="group p-10 rounded-[2.5rem] bg-zinc-900/20 border border-white/5 hover:border-primary/20 transition-all duration-700 cursor-pointer">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full">{category}</span>
        <span className="text-sm text-zinc-600 font-medium">{date}</span>
      </div>
      <h4 className="text-3xl font-bold tracking-tight mb-8 group-hover:text-white transition-colors">{title}</h4>
      <div className="flex items-center gap-2 text-zinc-400 group-hover:text-primary transition-colors font-bold text-sm uppercase tracking-widest">
        Read Article <ChevronRight size={16} />
      </div>
    </div>
  );
}

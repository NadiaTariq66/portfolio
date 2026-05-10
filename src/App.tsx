/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, useMotionValue, useMotionTemplate } from "motion/react";
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
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  CheckCircle2,
  Clock
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
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
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const spotlightY = useSpring(mouseY, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 font-sans selection:bg-white selection:text-black relative overflow-hidden">
      {/* Dynamic Cursor Spotlight - Optimized */}
      <motion.div 
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[60px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ x: spotlightX, y: spotlightY }}
      />
      
      {/* Background Texture & Aura */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute top-[10%] left-[-10%] w-[30%] h-[30%] bg-primary/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-primary/5 blur-[80px] rounded-full" />
      </div>
      
      {/* Animated Grain Overlay Removed for performance */}

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]" 
        style={{ scaleX }} 
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[90] bg-black/95 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-black italic tracking-tighter flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-md bg-primary">
              <span className="text-white text-lg">N</span>
            </div>
            <span>Nadia<span className="text-primary italic">Tariq</span></span>
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
                  className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-[width] duration-300 group-hover:w-full"
                />
              </a>
            ))}
            <motion.a 
              href="#hire-me"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-colors"
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
        <section id="home" className="relative pt-40 pb-32 px-6 overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-zinc-900/10 -skew-x-12 transform origin-top-right pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col lg:flex-row gap-16 items-start"
            >
              <motion.div 
                variants={itemVariants}
                className="flex-[1.2]"
              >
                <div 
                  className="text-primary font-mono text-sm uppercase tracking-[0.4em] mb-6 flex items-center gap-4"
                >
                  <span className="h-px w-10 bg-primary/40" /> Portfolio
                </div>

                <motion.h1 
                  variants={itemVariants}
                  className="text-7xl md:text-[8vw] font-display font-medium leading-[0.95] mb-8 text-white tracking-tight"
                >
                  <span className="block">Hello!</span>
                  <span className="block italic text-primary">I'm Nadia</span>
                  <span className="block">Tariq.</span>
                </motion.h1>

                <motion.p 
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-xl leading-relaxed font-light"
                >
                  I'm a Full Stack Developer specializing in building high-performance architectures using <span className="text-white italic">JavaScript/TypeScript (Node.js, NestJS, Express.js), React.js, and PHP (Laravel).</span> Skilled in REST APIs, databases, and cloud platforms like AWS, Firebase, and Vercel, with a strong focus on clean and efficient code.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-6 mb-16"
                >
                  <motion.a 
                    href="#projects" 
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 group"
                  >
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-primary/20"
                    >
                      <ArrowRight size={24} />
                    </motion.span>
                    <div>
                      <span className="block text-sm font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors">View Projects</span>
                      <span className="text-xs text-zinc-500">Case Studies & Experiments</span>
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    href="https://drive.google.com/file/d/1LC1U7rAsxGUox54sAYvnJCtkZhPdV2n9/view?usp=drive_link" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-colors rounded-full flex items-center gap-3 text-sm font-bold"
                  >
                    Download CV <Download size={16} />
                  </motion.a>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-center gap-8 border-t border-white/5 pt-8"
                >
                  <div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="text-3xl font-display italic text-white leading-none"
                    >
                      3+
                    </motion.div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mt-2">Years Exp.</div>
                  </div>
                  <div className="w-px h-10 bg-white/5" />
                  <div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl font-display italic text-white leading-none"
                    >
                      12+
                    </motion.div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mt-2">Projects</div>
                  </div>
                  <div className="w-px h-10 bg-white/5" />
                  <div className="flex -space-x-3">
                    {['React', 'Node', 'PHP'].map((skill, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        key={skill} 
                        className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-black flex items-center justify-center text-[10px] font-bold text-zinc-400 ring-2 ring-primary/20"
                      >
                        {skill[0]}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex-1 relative"
              >
                <div className="relative aspect-[4/5] md:aspect-[3/4] w-full max-w-lg mx-auto overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 shadow-2xl">
                  {/* Decorative Frame Overlays */}
                  <div className="absolute inset-4 border border-white/5 rounded-[2rem] z-20 pointer-events-none" />
                  <div className="absolute inset-[20px] border border-white/5 rounded-[1.8rem] z-10 pointer-events-none opacity-50" />
                  
                  <motion.img 
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src="https://drive.google.com/thumbnail?id=1Q5GBsqBSpedXfQAY6dsYwyGmmHHeWARn&sz=w1000" 
                    alt="Nadia Tariq"
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-opacity duration-700 hover:scale-100"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
                  
                  <div className="absolute bottom-10 left-10 right-10 z-30">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex items-center gap-4 mb-4"
                    >
                      <div className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded">Full Stack Developer</div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating Geometric Elements - Enhanced */}
                <motion.div 
                  animate={{ y: [0, -15, 0], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl pointer-events-none" 
                />
                <motion.div 
                  animate={{ y: [0, 20, 0], opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/25 rounded-full blur-3xl pointer-events-none" 
                />
              </motion.div>
            </motion.div>
          </div>
            {/* Social Links Ribbon */}
            <div className="mt-32 flex flex-wrap items-center justify-center lg:justify-start gap-12 border-t border-white/5 pt-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Find me on</span>
              <div className="flex gap-8 items-center">
                <a href="https://github.com/NadiaTariq66" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white hover:scale-110 transition-[color,transform] flex items-center gap-2 group">
                  <Github size={20} /> <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/nadia-tariq/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white hover:scale-110 transition-[color,transform] flex items-center gap-2 group">
                  <Linkedin size={20} /> <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                </a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=tariqnadia830@gmail.com#inbox?compose=GTvVlcSBmXGGjhJqGMSBmMlTPRZsWccJxzTmDlpQrzMSTpPtHBVJflDvxkVwBsNtcpqdJKdZwqHph" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white hover:scale-110 transition-[color,transform] flex items-center gap-2 group">
                  <Mail size={20} /> <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
                </a>
              </div>
            </div>
        </section>

        {/* Marquee Section */}
        <div className="py-12 border-y border-white/5 overflow-hidden bg-black relative flex items-center">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 text-lg md:text-4xl font-black tracking-tighter opacity-5 select-none uppercase italic will-change-transform"
          >
            {Array(5).fill("Full Stack Developer • MERN Stack •").map((text, i) => (
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
                    I am a Full Stack Developer  with 3+ years of experience designing, developing, and deploying scalable web applications. Proficient in JavaScript/TypeScript technologies including Node.js (NestJS, Express.js) and React.js, along with PHP (Laravel). Skilled in building responsive frontend applications, RESTful APIs, and microservices-based architectures.

Experienced in working with both SQL and NoSQL databases, including MongoDB, MySQL, and PostgreSQL, as well as modern backend platforms like Supabase for rapid and scalable development. Strong expertise in database design, optimization, and performance tuning.

Hands-on experience with cloud platforms and deployment tools such as AWS, Heroku, Supabase,Vercel, and Firebase, including developing Firebase Cloud Functions for backend automation, real-time features, and serverless applications. Familiar with CI/CD pipelines, Git version control, and containerization fundamentals.

Strong problem-solving skills with a focus on writing clean, maintainable, and scalable code. Passionate about learning new technologies, building efficient full stack solutions, and delivering high-quality applications in fast-paced environments.
                  </p>
                </div>
              </div>
              <div className="relative group p-8 bg-zinc-900/50 rounded-[3rem] border border-white/5 hover:border-primary/20 transition-colors duration-500">
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
                  className="group relative p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-primary/30 transition-[border-color,background-color] duration-700 overflow-hidden"
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
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">/ My Services</h2>
              <h3 className="text-5xl md:text-6xl font-display uppercase tracking-tight">What I Do Best</h3>
            </div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
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
            </motion.div>
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
                    whileHover={{ y: -15, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-zinc-900 border border-white/5 p-8 rounded-3xl h-full flex flex-col hover:border-white/20 transition-colors duration-500 relative overflow-hidden"
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

        {/* Hire Me Section (Inspired by MZ Portfolio) */}
        <section id="hire-me" className="py-24 px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            {/* Header Area */}
            <div className="rounded-[3rem] bg-[#4d1a1a] py-20 px-8 text-center text-white relative overflow-hidden mb-24">
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-display font-medium mb-6 tracking-tight"
              >
                Let's Work Together
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-red-100/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
              >
                Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
              </motion.p>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Badge icon={<CheckCircle2 size={14} />} text="3+ Years Experience" />
                <Badge icon={<CheckCircle2 size={14} />} text="95% Client Satisfaction" />
                <Badge icon={<Clock size={14} />} text="Fast Response Time" />
              </div>

              {/* WhatsApp CTA */}
              <motion.a 
                href="https://wa.me/923040494573"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#fab005] hover:bg-[#fcc419] text-[#1a1a1a] font-black text-lg rounded-2xl transition-all shadow-xl shadow-black/20"
              >
                <MessageCircle size={24} />
                Chat on WhatsApp
              </motion.a>
            </div>

          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-600 text-sm font-medium">
            © 2026 NADIA TARIQ. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-zinc-500 text-xs font-bold uppercase tracking-widest">
             <a href="https://github.com/NadiaTariq66" target="_blank" rel="noopener noreferrer" className="hover:text-white">Github</a>
             <a href="https://www.linkedin.com/in/nadia-tariq/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Linkedin</a>
             <a href="https://mail.google.com/mail/u/0/?fs=1&to=tariqnadia830@gmail.com#inbox?compose=GTvVlcSBmXGGjhJqGMSBmMlTPRZsWccJxzTmDlpQrzMSTpPtHBVJflDvxkVwBsNtcpqdJKdZwqHph" target="_blank" rel="noopener noreferrer" className="hover:text-white">Email</a>
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
    <motion.div 
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-12 rounded-[3rem] bg-zinc-900/20 border border-white/5 hover:border-primary/20 transition-all duration-700 group relative overflow-hidden"
    >
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
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
    </motion.div>
  );
}

function ServiceCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-primary/20 transition-colors duration-500 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-black transition-[background-color,color] mb-6">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
      <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function Badge({ icon, text }: { icon: ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-medium border border-white/10">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

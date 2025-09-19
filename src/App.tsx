import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Layers, Database, Shield, Zap, Award, Users, Briefcase, BookOpen, Lightbulb } from 'lucide-react';
import { motion } from "framer-motion";
import { FaHandPaper,FaLock,FaHandHoldingUsd, FaHeartbeat, FaMedkit, FaStethoscope, FaPhone  } from "react-icons/fa";

function App() {
  // Function to handle smooth scrolling for navigation links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add scroll reveal effect for elements
  useEffect(() => {
    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealElements);
    revealElements(); // Call once on mount to check initial elements
    
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white">
      {/* Header/Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
  {/* Move "BlockchainDev" slightly to the right on desktop */}
  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 md:ml-8">
    BlockchainDev
  </div>

  {/* Navigation links (centered) */}
  <nav className="text-xl hidden md:flex space-x-8">
    <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-cyan-400 transition-colors">About</a>
    <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-cyan-400 transition-colors">Skills</a>
    <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-cyan-400 transition-colors">Services</a>
    <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-cyan-400 transition-colors">Projects</a>
    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-cyan-400 transition-colors">Contact</a>
  </nav>

  {/* Move GitHub and LinkedIn icons slightly to the left on desktop */}
  <div className="flex space-x-4 md:mr-8">
    <a href="https://github.com/Mohankotte123" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
      <Github size={30} />
    </a>
    <a href="https://www.linkedin.com/in/mohan-kotte-206bb1221/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
      <Linkedin size={30} />
    </a>
  </div>
</header>


{/* Hero Section */}
<section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
  {/* Text container: Move slightly to the right on desktop */}
  <motion.div
    className="md:w-1/2 mb-10 md:mb-0 md:ml-8"
    initial={{ opacity: 0, x: -50 }} // Start off-screen to the left
    animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
    transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
  >
   <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
  Blockchain Developer & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Web3 Enthusiast</span>
</h1>
<p className="text-lg text-gray-300 mb-5">
  Building the decentralized future with smart contracts, DApps, and blockchain solutions.
</p>
<p className="text-lg text-gray-300 mb-8 font-semibold italic border-l-4 border-cyan-400 pl-4">
  🌟 "Think. Research. Implement. Contribute. – The TRIC Method I Live By." 🌟
</p>
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <motion.a
        href="#projects"
        onClick={(e) => handleNavClick(e, 'projects')}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center"
        whileHover={{ scale: 1.05 }} // Scale up on hover
        whileTap={{ scale: 0.95 }} // Scale down on tap
      >
        View Projects
      </motion.a>
      <motion.a
        href="#contact"
        onClick={(e) => handleNavClick(e, 'contact')}
        className="bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center"
        whileHover={{ scale: 1.05 }} // Scale up on hover
        whileTap={{ scale: 0.95 }} // Scale down on tap
      >
        Contact Me
      </motion.a>
    </div>
  </motion.div>

  {/* Image container: No changes */}
  <motion.div
    className="md:w-1/2 flex justify-center"
    initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
    animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
    transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
  >
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30">
      <img
        src="/images/Professional.jpeg"
        alt="Profile"
        className="w-full h-full object-cover brightness-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
    </div>
  </motion.div>
</section>
      {/* About Section */}
      <section id="about" className="py-20 bg-indigo-950/50">
  <div className="container mx-auto px-4">
    {/* Section Title */}
    <h2 className="text-3xl font-bold mb-12 text-center reveal">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
        About Me
      </span>
    </h2>

    {/* Content Container */}
    <div className="max-w-3xl mx-auto text-gray-300 space-y-6 text-lg reveal">
      {/* Paragraph 1 */}
      <div className="p-6 rounded-lg border border-transparent bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 hover:border-cyan-400/50 transition-all duration-300">
        <p>
          I'm a passionate <span className="font-semibold text-cyan-400">Blockchain Developer</span> with expertise in <span className="font-semibold text-purple-400">smart contract development</span>, <span className="font-semibold text-cyan-400">Web3 integration</span>, and <span className="font-semibold text-purple-400">decentralized applications (DApps)</span>. I've mastered <span className="font-semibold text-cyan-400">Ethereum, Solidity, Foundry, Truffle, and Hardhat</span>.
        </p>
      </div>

      {/* Paragraph 2 */}
      <div className="p-6 rounded-lg border border-transparent bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 hover:border-cyan-400/50 transition-all duration-300">
        <p>
          I thrive on exploring <span className="font-semibold text-cyan-400">DeFi, NFTs, and Hyperledger</span>, pushing the boundaries of decentralized technology. From building <span className="font-semibold text-purple-400">blockchain-powered smart lock access control</span> to developing <span className="font-semibold text-cyan-400">secure voting and healthcare systems</span>, I bring innovative <span className="font-semibold text-purple-400">Web3 solutions</span> to life.
        </p>
      </div>

      {/* Paragraph 3 */}
      <div className="p-6 rounded-lg border border-transparent bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 hover:border-cyan-400/50 transition-all duration-300">
        <p>
          As an <span className="font-semibold text-cyan-400">Alchemy Certified Ethereum Developer</span>, I combine deep blockchain knowledge with advanced <span className="font-semibold text-purple-400">smart contract skills</span>. Beyond coding, I'm a <span className="font-semibold text-cyan-400">blockchain trainer</span> at <span className="font-semibold text-purple-400">Data Valley</span>, empowering others to embrace the future of digitalization.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
  <div className="container mx-auto px-4">
    {/* Section Title */}
    <h2 className="text-3xl font-bold mb-12 text-center reveal">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
        Skills & Expertise
      </span>
    </h2>

    {/* Skill Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Skill Category 1 */}
      <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 skill-card reveal">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Code size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          Blockchain & Smart Contracts
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> Solidity, Ethereum, Hyperledger Fabric
          </li>
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> Smart Contract Development & Auditing
          </li>
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> ERC-20, ERC-721, ERC-1155 Token Standards
          </li>
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> Chainlink Oracles & Automation
          </li>
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> Foundry, Truffle, Hardhat
          </li>
        </ul>
      </div>

      {/* Skill Category 2 */}
      <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 skill-card reveal">
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Layers size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          DApp Development
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> Web3.js & Ethers.js
          </li>
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> React.js & Next.js
          </li>
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> IPFS & Decentralized Storage
          </li>
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> Metamask & Wallet Integration
          </li>
        </ul>
      </div>

      {/* Skill Category 3 */}
      <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 skill-card reveal">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Database size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          DeFi & NFT Projects
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> Liquidity Pools & Yield Farming
          </li>
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> NFT Metadata Storage (IPFS & On-Chain SVGs)
          </li>
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> Smart Contract Security & Fuzz Testing
          </li>
        </ul>
      </div>

      {/* Skill Category 4 */}
      <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 skill-card reveal">
        <div className="bg-gradient-to-br from-teal-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Shield size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400">
          Other Technologies
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> Node.js, Express.js
          </li>
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> Docker, WSL, Linux
          </li>
          <li className="flex items-center hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400 mr-2">✓</span> GraphQL, Firebase, MongoDB
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
      {/* Professional Services Section */}
      <section id="services" className="py-20 bg-indigo-950/50">
  <div className="container mx-auto px-4">
    {/* Section Title */}
    <h2 className="text-3xl font-bold mb-12 text-center reveal">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
        Professional Services
      </span>
    </h2>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Expert Sessions */}
      <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group project-card reveal">
        <div className="h-40 bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center">
          <Users size={64} className="text-white project-icon animate-pulse" /> {/* Animated icon */}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
            Expert Sessions
          </h3>
          <p className="text-gray-300 mb-4">
            I conduct specialized expert sessions on <span className="font-semibold text-cyan-400">blockchain technology</span>, <span className="font-semibold text-purple-400">smart contract development</span>, and <span className="font-semibold text-cyan-400">Web3 integration</span> for companies and educational institutions.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2 mt-1">•</span>
              <p className="text-gray-300 hover:text-cyan-400 transition-colors">Interactive workshops on blockchain fundamentals and advanced topics</p>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2 mt-1">•</span>
              <p className="text-gray-300 hover:text-cyan-400 transition-colors">Code reviews and architecture consultations</p>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2 mt-1">•</span>
              <p className="text-gray-300 hover:text-cyan-400 transition-colors">Technical advisory for blockchain implementation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Programs */}
      <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group project-card reveal">
        <div className="h-40 bg-gradient-to-r from-purple-600 to-pink-400 flex items-center justify-center">
          <BookOpen size={64} className="text-white project-icon animate-pulse" /> {/* Animated icon */}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
            Training Programs
          </h3>
          <p className="text-gray-300 mb-4">
            As a <span className="font-semibold text-cyan-400">blockchain trainer</span> at <span className="font-semibold text-purple-400">Data Valley</span>, I develop and deliver comprehensive training programs for developers and organizations.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2 mt-1">•</span>
              <p className="text-gray-300 hover:text-cyan-400 transition-colors">Structured curriculum from basics to advanced concepts</p>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2 mt-1">•</span>
              <p className="text-gray-300 hover:text-cyan-400 transition-colors">Hands-on projects with real-world applications</p>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2 mt-1">•</span>
              <p className="text-gray-300 hover:text-cyan-400 transition-colors">Customized corporate training programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Freelance Services */}
      <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group project-card reveal">
        <div className="h-40 bg-gradient-to-r from-teal-600 to-green-400 flex items-center justify-center">
          <Briefcase size={64} className="text-white project-icon animate-pulse" /> {/* Animated icon */}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
            Freelance Development
          </h3>
          <p className="text-gray-300 mb-4">
            I provide specialized <span className="font-semibold text-cyan-400">freelance services</span> in blockchain and full-stack development for clients worldwide.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2 mt-1">•</span>
              <p className="text-gray-300 hover:text-cyan-400 transition-colors">Smart contract development and auditing</p>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2 mt-1">•</span>
              <p className="text-gray-300 hover:text-cyan-400 transition-colors">DApp and Web3 application development</p>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2 mt-1">•</span>
              <p className="text-gray-300 hover:text-cyan-400 transition-colors">Full-stack solutions with blockchain integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
          {/* Testimonials */}
          {/* <div className="mt-16 max-w-4xl mx-auto reveal">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Client Testimonials</span>
            </h3>
            
            <div className="bg-indigo-900/30 backdrop-blur-sm p-8 rounded-xl border border-indigo-800/50">
              <div className="flex flex-col space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 text-5xl text-cyan-500/20">"</div>
                  <p className="text-gray-300 italic relative z-10">
                    The blockchain training program was exceptional. The instructor's deep knowledge and practical approach helped our team quickly grasp complex concepts and implement them in our projects.
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      TC
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-white">Tech Company CTO</p>
                      <p className="text-sm text-gray-400">Enterprise Client</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full border-t border-indigo-800/30 my-2"></div>
                
                <div className="relative">
                  <div className="absolute -left-4 -top-4 text-5xl text-cyan-500/20">"</div>
                  <p className="text-gray-300 italic relative z-10">
                    Working with this developer on our DeFi project was a game-changer. Their expertise in smart contracts and security best practices helped us build a robust platform that our users trust.
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                      DF
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-white">DeFi Founder</p>
                      <p className="text-sm text-gray-400">Startup Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Notable Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 

             {/* Project 1 */}
             <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group project-card reveal">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-400 flex items-center justify-center">
              <FaLock size={64} className="text-white project-icon" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">🔐 Decentralized August Locks Access Control</h3>
                <p className="text-gray-300 mb-4">
                A blockchain-powered access management system ensuring tamper-proof security for August Smart Locks.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Solidity</span>
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Web3.js</span>
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Seam Api SandBox</span>
                </div>
                <a href="#contact" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                DM For Source Code  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
             {/* Project 2 */}
             <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group project-card reveal">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-400 flex items-center justify-center">
              <FaHandPaper size={64} className="text-white project-icon" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">🗳️ Blockchain-Based Voting System with OTP Authentication</h3>
                <p className="text-gray-300 mb-4">
                A secure, transparent, and decentralized voting system that eliminates fraud and ensures fair elections.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Twilio</span>
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Solidity</span>
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">Web3.js</span>
                </div>
                <a href="#contact" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                DM For Source Code  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group project-card reveal">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center">
              <FaHandHoldingUsd size={64} className="text-white project-icon" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">DeFi Lending Protocol</h3>
                <p className="text-gray-300 mb-4">
                  Built and deployed a decentralized lending/borrowing system with health factor checks, fuzz testing, and Chainlink price feeds.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">Solidity</span>
                  <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">Chainlink</span>
                  <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">Foundry</span>
                  <span className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">React</span>
                </div>
                <a href="#contact" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                  DM For Source Code <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group project-card reveal">
              <div className="h-48 bg-gradient-to-r from-teal-600 to-green-400 flex items-center justify-center">
                <Award size={64} className="text-white project-icon" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Airdrop Smart Contract</h3>
                <p className="text-gray-300 mb-4">
                  Developed as part of Cyfrin Updraft, allowing token distributions efficiently with optimized gas usage and security features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-teal-900/50 text-teal-300 px-2 py-1 rounded">Solidity</span>
                  <span className="text-xs bg-teal-900/50 text-teal-300 px-2 py-1 rounded">ERC-20</span>
                  <span className="text-xs bg-teal-900/50 text-teal-300 px-2 py-1 rounded">Hardhat</span>
                </div>
                <a href="#contact" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                DM For Source Code <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group project-card reveal">
              <div className="h-48 bg-gradient-to-r from-indigo-600 to-blue-400 flex items-center justify-center">
           
<FaStethoscope size={64} className="text-white project-icon" />

              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Blockchain-Based Healthcare Management</h3>
                <p className="text-gray-300 mb-4">
                  Implemented role-based doctor-patient verification with Web3 authentication for secure medical record management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded">Solidity</span>
                  <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded">IPFS</span>
                  <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded">Ethers.js</span>
                </div>
                <a href="#contact" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                DM For Source Code <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-indigo-950/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Certifications</span>
          </h2>
          
          <div className="max-w-3xl mx-auto bg-indigo-900/30 backdrop-blur-sm p-8 rounded-xl border border-indigo-800/50 reveal">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Alchemy Certified Ethereum Developer</h3>
                <p className="text-gray-300">Alchemy University</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Comprehensive certification demonstrating proficiency in Ethereum development, smart contract implementation, and blockchain fundamentals.
            </p>
            <a href="https://www.linkedin.com/posts/mohan-kotte-206bb1221_ethereumbootcamp-ethereumnodeapi-solidity-activity-7230275756570853376-NnNM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfiVuYBIbJG6IgsWUFQXS69Qj23uXASQb0" target="_blank" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
              View Certificate <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Get In Touch</span>
          </h2>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-800/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 reveal">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-cyan-400 mr-3" size={20} />
                  <a href="mailto:contact@example.com" className="text-gray-300 hover:text-cyan-400">Mohankrish.kotte@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-cyan-400 mr-3" size={20} />
                  <a href="https://www.linkedin.com/in/mohan-kotte-206bb1221/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">linkedin.com/in/mohan-kotte</a>
                </div>
                <div className="flex items-center">
                  <Github className="text-cyan-400 mr-3" size={20} />
                  <a href="https://github.com/Mohankotte123" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">github.com/Mohankotte123</a>
                </div> 
                <div className="flex items-center">
  {/* Mobile Icon */}
  <FaPhone className="text-cyan-400 mr-3" size={20} /> {/* Replace <Phone /> with your desired icon */}
  {/* Mobile Number Link */}
  <a href="tel:+918008164509" className="text-gray-300 hover:text-cyan-400">
    +918008164509
  </a>
</div>
              </div>
            </div>
            
            <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-indigo-800/50 reveal">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-indigo-950/50 border border-indigo-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-indigo-950/50 border border-indigo-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-indigo-950/50 border border-indigo-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-all w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-indigo-800/50 bg-indigo-950/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Blockchain Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
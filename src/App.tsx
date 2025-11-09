import { Mail, Github, Linkedin, Shield, Code2, Database, Lock, Server, Terminal, Globe } from 'lucide-react';

function App() {
  const skills = {
    fullStack: [
      { name: 'React', icon: Code2 },
      { name: 'Node.js', icon: Server },
      { name: 'TypeScript', icon: Terminal },
      { name: 'PostgreSQL', icon: Database },
      { name: 'REST APIs', icon: Globe },
      { name: 'MongoDB', icon: Database }
    ],
    cybersecurity: [
      { name: 'Penetration Testing', icon: Shield },
      { name: 'Network Security', icon: Lock },
      { name: 'Vulnerability Assessment', icon: Shield },
      { name: 'Security Auditing', icon: Lock },
      { name: 'Cryptography', icon: Shield },
      { name: 'Threat Analysis', icon: Lock }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <header className="mb-32">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              ABHISHEK
            </h1>
            <div className="flex flex-wrap gap-4 text-xl md:text-2xl text-gray-400 font-light">
              <span className="tracking-widest">FULL STACK</span>
              <span className="text-gray-600">×</span>
              <span className="tracking-widest">CYBERSECURITY</span>
            </div>
          </div>
        </header>

        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-8 uppercase">About</h2>
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-300 font-light">
                Developer and security enthusiast with a passion for building secure,
                scalable applications and protecting digital infrastructure.
              </p>
            </div>
            <div>
              <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-8 uppercase">Focus Areas</h2>
              <div className="space-y-4 text-lg text-gray-400">
                <p>• Designing robust full-stack solutions</p>
                <p>• Implementing security best practices</p>
                <p>• Identifying and mitigating vulnerabilities</p>
                <p>• Building secure, performant web applications</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-12 uppercase">Skills</h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                F U L L — S T A C K
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.fullStack.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300 hover:bg-gray-900"
                    >
                      <Icon className="w-8 h-8 mb-4 text-gray-600 group-hover:text-white transition-colors" />
                      <p className="text-lg text-gray-400 group-hover:text-white transition-colors">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                C Y B E R S E C U R I T Y
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.cybersecurity.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300 hover:bg-gray-900"
                    >
                      <Icon className="w-8 h-8 mb-4 text-gray-600 group-hover:text-white transition-colors" />
                      <p className="text-lg text-gray-400 group-hover:text-white transition-colors">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-12 uppercase">Technical Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-gray-800 pl-6">
              <h4 className="text-xl font-bold mb-4">Frontend</h4>
              <ul className="space-y-2 text-gray-400">
                <li>React / Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Redux / Zustand</li>
              </ul>
            </div>
            <div className="border-l-2 border-gray-800 pl-6">
              <h4 className="text-xl font-bold mb-4">Backend</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>PostgreSQL / MongoDB</li>
                <li>Redis / Docker</li>
              </ul>
            </div>
            <div className="border-l-2 border-gray-800 pl-6">
              <h4 className="text-xl font-bold mb-4">Security</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Kali Linux / Metasploit</li>
                <li>Burp Suite / OWASP</li>
                <li>Wireshark / Nmap</li>
                <li>JWT / OAuth 2.0</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-12 uppercase">Contact</h2>
          <div className="space-y-6">
            <a
              href="rajnikant0918@gmail.co"
              className="group flex items-center gap-4 text-2xl md:text-4xl hover:text-gray-400 transition-colors"
            >
              <Mail className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
              <span className="font-light">rajnikant0918@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-sharma100/k"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-2xl md:text-4xl hover:text-gray-400 transition-colors"
            >
              <Linkedin className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
              <span className="font-light">linkedin.com/in/abhishek</span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-2xl md:text-4xl hover:text-gray-400 transition-colors"
            >
              <Github className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
              <span className="font-light">github.com/abhishek</span>
            </a>
          </div>
        </section>

        <footer className="mt-32 pt-12 border-t border-gray-900">
          <p className="text-gray-600 text-sm tracking-widest">
            © {new Date().getFullYear()} ABHISHEK. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

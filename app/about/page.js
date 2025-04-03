'use client';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800 transition-colors">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 font-[family-name:var(--font-geist-mono)]">
            About Me
          </h1>
          
          <div className="space-y-6 text-gray-700 dark:text-gray-200 font-[family-name:var(--font-geist-mono)]">
            <p>
              Passionate about the endless possibilities of computers, I thrive on continuous learning and innovation. 
              My journey in programming began with a drive to recreate a game I couldn't obtain—a project that sparked 
              a lifelong commitment to mastering technology and creating impactful solutions. With 7 years of experience 
              across Python web development, C# game design, and various other programming realms, I've grown from a 
              beginner coder to a Computer Engineer.
            </p>

            <p>
              Currently, I am deepening my expertise through a master's degree focused on Deep Learning, delving into 
              cutting-edge techniques that push the boundaries of artificial intelligence. In my role as a Software 
              Developer at Sovrox, I am shaping digital solutions that blend technical rigor with creative innovation. 
              I'm inspired by the dynamic intersection of technology and creativity and am excited to contribute to a 
              future where we continue to push boundaries and explore new horizons. 🚀
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

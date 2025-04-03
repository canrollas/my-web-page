'use client';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800 transition-colors">
      <Navbar />
      <main className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 max-w-7xl mx-auto bg-white dark:bg-gray-800 transition-colors">
        {/* Profile Section - Spans 5 columns on md+ screens */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-6 mb-4">
            <Image
              src="/canrollasprofile"
              alt="Can Rollas"
              width={120}
              height={120}
              className="rounded-full"
              priority
            />
            <div>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white font-[family-name:var(--font-geist-mono)] transition-colors">
                Can Rollas
              </h1>
              <h2 className="text-xl text-gray-600 dark:text-gray-300 font-[family-name:var(--font-geist-mono)] transition-colors">
                <span className="typewriter">Computer Engineer & Deep Learning Researcher</span>
              </h2>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed font-[family-name:var(--font-geist-mono)] transition-colors">
            <span className="typewriter-delay-1">
              Currently working as a Software Engineer at Sovrox, where I'm developing smart agriculture applications. 
              I'm also pursuing my master's degree in Deep Learning, exploring the frontiers of artificial intelligence.
            </span>
          </p>
          <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed font-[family-name:var(--font-geist-mono)] transition-colors">
            <span className="typewriter-delay-2">
              RollasTech is my personal brand where I showcase my projects and share my technological innovations with the world.
            </span>
          </p>

          <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gray-800 dark:bg-white text-white dark:text-gray-800 gap-2 hover:bg-gray-700 dark:hover:bg-gray-100 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://github.com/canrollas"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Projects
            </a>
            <a
              className="rounded-full border border-solid border-gray-200 dark:border-gray-700 transition-colors flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="mailto:canrollas@gmail.com"
              rel="noopener noreferrer"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Side Content - Spans 7 columns on md+ screens */}
        <div className="md:col-span-7 flex flex-col gap-8">
          
           

          {/* Featured Projects Section */}
          <section className="w-full">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-[family-name:var(--font-geist-mono)] mb-6">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer" onClick={() => window.open('https://github.com/CodeWikiOrg/RollAsBack/tree/main', '_blank')}>
                <div className="relative h-48 bg-white flex items-center justify-center border-gray-200 border-2 border-b-0">
                    <Image src="/rollasback" alt="RollasBack" width={200} height={200} />
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">RollasBack</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Python backend framework for building scalable and efficient web applications.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-sm">Socket</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer" onClick={() => window.open('https://github.com/canrollas/Turkish_LPR', '_blank')}>
                <div className="relative h-48 bg-white flex items-center justify-center border-gray-200 border-2 border-b-0">
                    <Image src="/lpr" alt="Turkish LPR" width={200} height={200} />
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Turkish License Plate Recognition</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">YOLO-based system for detecting and extracting Turkish license plates from images.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-sm">YOLO</span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-sm">Computer Vision</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
        </div>
      </main>
      <Footer />
    </div>
  );
}

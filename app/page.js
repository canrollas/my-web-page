'use client';
 

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="hidden sm:block sm:sticky sm:top-0 sm:z-40 sm:backdrop-blur sm:bg-white/70 sm:border-b sm:border-slate-200">
        <nav className="mx-auto max-w-4xl px-4 py-3 flex items-center gap-4 text-sm text-slate-700">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#education" className="hover:text-slate-900">Education</a>
          <a href="#experience" className="hover:text-slate-900">Experience</a>
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#publications" className="hover:text-slate-900">Publications</a>
          <a href="#skills" className="hover:text-slate-900">Skills</a>
          <a href="#contact" className="ml-auto inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 hover:bg-slate-100">Contact</a>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        {/* About Section */}
        <section id="about" className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="grow">
              <h1 className="text-3xl font-semibold tracking-tight">Can Rollas</h1>
              <p className="mt-1 text-slate-600">Software Developer & Deep Learning Researcher</p>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                I am currently focused on my own projects and academic pursuits. Previously, I worked as a Software Developer at Sovrox-MLBNova, 
                leading the development of Farmavil - a cross-platform smart farming application. I am pursuing my MSc in Computer Science 
                at IZTECH with a focus on Computer Vision. I specialize in AI & Computer Vision, AWS Cloud Architecture, 
                and full-stack development with expertise in React Native, Python, and DevOps.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800" href="mailto:canrollas@gmail.com">Get in Touch</a>
                <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100" href="#projects">Projects</a>
                <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100" href="https://github.com/canrollas" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mt-6 bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Education</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start justify-between gap-8">
              <div>
                <div className="font-medium text-base">MSc, Computer Science</div>
                <div className="text-sm text-slate-600">Izmir Institute of Technology (IZTECH)</div>
                <div className="mt-1 text-xs text-slate-500 flex flex-col gap-1">
                  <span>GPA: 3.0 / 4.0</span>
                  <span>Thesis: <span className="italic">Computer Vision thesis with advisor Prof. Dr. Yalın Baştanlar</span></span>
                </div>
              </div>
              <div className="text-sm text-slate-500 whitespace-nowrap">07/2024 – Present</div>
            </li>
            <li className="flex items-start justify-between gap-8">
              <div>
                <div className="font-medium text-base">BSc, Computer Engineering</div>
                <div className="text-sm text-slate-600">Izmir Institute of Technology (IZTECH)</div>
                <div className="mt-1 text-xs text-slate-500 flex flex-col gap-1">
                  <span>GPA: 3.0 / 4.0</span>
                  <span>Thesis: <span className="italic">"Remote Tracking of Agricultural Fields"</span></span>
                </div>
              </div>
              <div className="text-sm text-slate-500 whitespace-nowrap">01/2018 – 24/06/2024</div>
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-6 bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Experience</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start justify-between gap-8">
              <div>
                <div className="font-medium text-base">Software Developer</div>
                <div className="text-sm text-slate-600">Sovrox - MLBNova</div>
                <ul className="mt-1 text-xs text-slate-500 list-disc list-inside space-y-0.5 pl-1">
                  <li>Led the development of Farmavil smart farming application</li>
                  <li>Implemented AI-powered plant disease detection, NDVI satellite analytics, and real-time weather layers</li>
                  <li>Designed AWS-based serverless microservices architecture</li>
                  <li>Developed cross-platform React Native application</li>
                  <li>Integrated LLM-based customer chatbot</li>
                </ul>
              </div>
              <div className="text-sm text-slate-500 whitespace-nowrap">07/2022 – 06/2025</div>
            </li>
            <li className="flex items-start justify-between gap-8">
              <div>
                <div className="font-medium text-base">Software Developer</div>
                <div className="text-sm text-slate-600">Somera</div>
                <ul className="mt-1 text-xs text-slate-500 list-disc list-inside space-y-0.5 pl-1">
                  <li>Developed CI/CD-driven Turkish news aggregation and analytics platform</li>
                  <li>Built BERT-based NLP pipelines for multi-label news classification</li>
                  <li>Implemented deep learning-based sentiment analysis and topic modeling</li>
                  <li>Designed automated web/news data collection workflows</li>
                </ul>
              </div>
              <div className="text-sm text-slate-500 whitespace-nowrap">04/2021 – 06/2022</div>
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-6 bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            
            <article className="rounded-2xl border p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-base">
                  <a href="https://github.com/CodeWikiOrg/RollAsBack/tree/main" target="_blank" className="text-blue-600 hover:underline">RollasBack</a>
                </h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 border text-green-700">Open-Source</span>
              </div>
              <p className="text-sm text-slate-700 mt-3">
                Lightweight Python backend framework developed from scratch using low-level socket programming. 
                Provides full RESTful API support with built-in routing and modular, extensible architecture.
              </p>
              <p className="text-xs text-slate-500 mt-2">Python, Socket Programming, HTTP, RESTful API</p>
            </article>

            <article className="rounded-2xl border p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-base">
                  <a href="https://github.com/canrollas/Turkish_LPR" target="_blank" className="text-blue-600 hover:underline">Turkish License Plate Recognition</a>
                </h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 border text-green-700">Open-Source</span>
              </div>
              <p className="text-sm text-slate-700 mt-3">
                Vehicle detection and OCR-based Turkish license plate recognition system using YOLOv5. 
                Optimized inference pipeline for real-time performance.
              </p>
              <p className="text-xs text-slate-500 mt-2">YOLOv5, Computer Vision, OCR, Python</p>
            </article>

            <article className="rounded-2xl border p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-base">
                  <a href="https://github.com/canrollas/ML-Based-Melanoma-Diagnosis-System" target="_blank" className="text-blue-600 hover:underline">ML-Assisted Melanoma Diagnosis</a>
                </h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 border text-green-700">Open-Source</span>
              </div>
              <p className="text-sm text-slate-700 mt-3">
                Deep learning-based medical imaging pipeline for melanoma diagnosis using ISIC dataset (~11,000 dermatoscopic images). 
                Achieved 86% test accuracy with balanced precision and recall.
              </p>
              <p className="text-xs text-slate-500 mt-2">Deep Learning, EfficientNet, Medical AI, Grad-CAM</p>
            </article>

            <article className="rounded-2xl border p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-base">
                  <a href="https://github.com/canrollas/mitochondria_segmentation_unet" target="_blank" className="text-blue-600 hover:underline">Mitochondria Segmentation</a>
                </h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 border text-green-700">Open-Source</span>
              </div>
              <p className="text-sm text-slate-700 mt-3">
                U-Net-based deep learning pipeline for binary semantic segmentation of mitochondria in grayscale microscopy images. 
                Achieved 99.4% validation accuracy.
              </p>
              <p className="text-xs text-slate-500 mt-2">U-Net, Semantic Segmentation, Deep Learning</p>
            </article>

            <article className="rounded-2xl border p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-base">
                  <a href="https://www.kitapquest.com" target="_blank" className="text-blue-600 hover:underline">KitapQuest</a>
                </h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-slate-100 border text-slate-600">Proprietary</span>
              </div>
              <p className="text-sm text-slate-700 mt-3">
                Social reading platform with AI-driven book recommendations and community features. 
                Map-inspired city walls and chatbot integration.
              </p>
              <p className="text-xs text-slate-500 mt-2">Web App, AI, Recommendation System</p>
            </article>

            <article className="rounded-2xl border p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-base">
                  <a href="https://github.com/canrollas/HaberliyoTwitter" target="_blank" className="text-blue-600 hover:underline">HaberliyoTwitter</a>
                </h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 border text-green-700">Open-Source</span>
              </div>
              <p className="text-sm text-slate-700 mt-3">
                Experimental Twitter bot and news-sharing platform that aggregates and posts real-time news headlines 
                in a neutral and unbiased manner.
              </p>
              <p className="text-xs text-slate-500 mt-2">NLP, News Aggregation, Automation, Twitter API</p>
            </article>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="mt-6 bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Publications</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-800 list-decimal list-inside">
            <li>
              Kersü A, <u>Rollas C</u>, Salman ZD, Salam A, Gumus A. <a href="https://github.com/miralab-ai/circuit-simulator" target="_blank" className="font-normal text-blue-600 hover:underline">Development of Open Source and Terminal Based Analog Circuit Simulator</a>. International Conference on Studies in Engineering, Science, and Technology, 2024.
              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-slate-100 border">Conference</span>
            </li>
          </ol>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-6 bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Skills</h2>

          <div className="mt-3 text-sm">
            <div className="font-medium">Areas</div>
            <ul className="mt-1 text-slate-700 list-disc list-outside pl-4 flex flex-wrap gap-x-6 gap-y-1">
              <li>Deep Learning</li>
              <li>Computer Vision</li>
              <li>Natural Language Processing</li>
              <li>Machine Learning</li>
              <li>AI & Computer Vision</li>
              <li>Cross-platform Mobile Development</li>
              <li>AWS Cloud Architecture</li>
              <li>DevOps</li>
              <li>Full-stack Development</li>
              <li>Smart Agriculture</li>
              <li>IoT Integration</li>
              <li>Data Analytics</li>
            </ul>

            <div className="mt-4 font-medium">Technologies</div>
            <ul className="mt-1 text-slate-700 list-disc list-outside pl-4 flex flex-wrap gap-x-6 gap-y-1">
              <li>Python</li>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Git</li>
              <li>Jenkins</li>
              <li>Linux</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>YOLO</li>
              <li>BERT</li>
              <li>U-Net</li>
              <li>Mapbox</li>
              <li>LLM</li>
              <li>CI/CD</li>
              <li>Atlassian Stack</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-6 bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="mt-2 text-sm text-slate-800">
            <p><span className="font-medium">Email:</span> <a className="text-blue-600 hover:underline" href="mailto:canrollas@gmail.com">canrollas@gmail.com</a></p>
            <p><span className="font-medium">GitHub:</span> <a className="text-blue-600 hover:underline" target="_blank" href="https://github.com/canrollas">@canrollas</a></p>
            <p><span className="font-medium">Location:</span> İzmir, Turkey</p>
          </div>
        </section>

        <footer className="mt-6 pb-12 text-center text-xs text-slate-500">
          
        <span>© {new Date().getFullYear()} RollasTech </span>

        </footer>
      </main>

      <script>
        document.getElementById('y').textContent = new Date().getFullYear();
      </script>
    </div>
  );
}

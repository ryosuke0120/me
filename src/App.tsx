import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">自己紹介サイト</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <section id="about" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700">
              私の名前は Ryo です。ソフトウェアエンジニアとして働いており、主にバックエンドとフロントエンドの開発を行っています。
            </p>
          </section>

          <section id="skills" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>TypeScript & React</li>
              <li>Python & FastAPI</li>
              <li>Tailwind CSS</li>
              <li>データエンジニアリング</li>
            </ul>
          </section>

          <section id="contact" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700">
              メールでのお問い合わせはこちら:
              <a href="mailto:example@example.com" className="text-blue-500 underline">
                example@example.com
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Ryo. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

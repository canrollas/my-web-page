"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Get initial theme from localStorage and apply it immediately
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Update DOM and localStorage immediately on toggle
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 transition-colors">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/rollastechmain.png"
            alt="RollasTech Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <span className="text-gray-800 dark:text-white text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] font-bold">
            RollasTech
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-800 dark:text-white text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] hover:text-gray-600 dark:hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 dark:text-white text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] hover:text-gray-600 dark:hover:text-gray-300">
            About
          </Link>
          <Link href="mailto:canrollas@gmail.com" className="text-gray-800 dark:text-white text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] hover:text-gray-600 dark:hover:text-gray-300">
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

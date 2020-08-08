import React, { useState } from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 mb-8 text-base">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img
            className="h-8 inline align-middle"
            src={logo}
            alt="Will Colton Logo"
          />
          <span className="pl-2 hidden sm:inline font-bold">
            Will Colton's Side Project Museum
          </span>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="block text-gray-500 hover:text-gray-800 focus:text-gray-800 focus:outline-none"
          >
            {isOpen && <FaTimes className="h-6 w-6" />}
            {!isOpen && <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-2 pt-2 pb-4 sm:flex sm:p-0`}
      >
        <a
          href="/cra"
          className="block px-2 py-1 text-gray-500 font-semibold rounded hover:text-gray-800"
        >
          CRA
        </a>
        <a
          href="/gatsvy"
          className="mt-1 block px-2 py-1 text-gray-500 font-semibold rounded hover:text-gray-800 sm:mt-0 sm:ml-2"
        >
          Gatsby
        </a>
        <a
          href="/svelte"
          className="mt-1 block px-2 py-1 text-gray-500 font-semibold rounded hover:text-gray-800 sm:mt-0 sm:ml-2"
        >
          Svelte
        </a>
        <a
          href="https://github.com/coltonw"
          className="mt-1 block px-2 py-1 text-gray-500 font-semibold rounded hover:text-gray-800 sm:mt-0 sm:ml-2"
        >
          <DiGithubBadge className="h-6 w-6 inline align-bottom" />
          <span className="sm:hidden">Github</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;

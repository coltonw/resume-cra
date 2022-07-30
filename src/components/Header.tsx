import React, { useState } from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 mb-12 text-base">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img
            className="h-8 inline align-middle"
            src={logo}
            alt="Will Colton Logo"
          />
          <span className="pl-2 align-middle hidden sm:inline text-l font-black">
            Will Colton's Side Project Museum
          </span>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="block text-stone-600 hover:text-stone-700 focus:text-stone-700 focus:outline-none"
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
        {/*<a
          href="https://cra.willcolton.com/"
          className="block px-2 py-1 text-stone-600 font-semibold rounded hover:text-stone-700"
        >
          CRA
        </a>
        <a
          href="https://next.willcolton.com"
          className="mt-1 block px-2 py-1 text-stone-600 font-semibold rounded hover:text-stone-700 sm:mt-0 sm:ml-2"
        >
          Next.js
        </a>
        <a
          href="https://svelte.willcolton.com"
          className="mt-1 block px-2 py-1 text-stone-600 font-semibold rounded hover:text-stone-700 sm:mt-0 sm:ml-2"
        >
          Svelte
        </a>*/}
        <a
          href="https://github.com/coltonw"
          className="mt-1 block px-2 py-1 text-stone-600 font-semibold rounded hover:text-stone-700 sm:mt-0 sm:ml-2"
          aria-label="Github"
        >
          <DiGithubBadge className="h-6 w-6 inline align-bottom" />
          <span className="sm:hidden">Github</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;

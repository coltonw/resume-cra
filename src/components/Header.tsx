import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-3 mb-12 text-base">
      <div className="flex items-center justify-between p-0">
        <div>
          <a href="/">
            <img
              className="h-8 inline align-middle"
              src={logo}
              alt="Will Colton Logo"
            />
            <span className="align-middle hidden sm:inline pl-2 text-l font-black">
              Will Colton's Side Project Museum
            </span>
          </a>
        </div>
      </div>
      <nav className={`flex p-0`}>
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
          className="block px-2 py-1 text-stone-600 font-semibold rounded hover:text-stone-700"
        >
          Svelte
        </a>*/}
        <a
          href="https://github.com/coltonw"
          className="block px-2 py-1 text-stone-600 rounded hover:text-stone-700"
          aria-label="Github"
        >
          <DiGithubBadge className="h-6 w-6 inline align-bottom" />
        </a>
      </nav>
    </header>
  );
};

export default Header;

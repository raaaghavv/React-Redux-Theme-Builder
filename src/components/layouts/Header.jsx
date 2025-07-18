import React from 'react';
import { useSelector } from 'react-redux';
import { HamburgerIcon } from '../icons/Icons';

const Header = ({ setMobileOpen }) => {
  const themeName = useSelector((state) => state.themeBuilder.currentTheme.name);

  return (
    <header className="bg-white p-4 border-b flex justify-between items-center flex-shrink-0">
      <div className="flex items-center gap-4">
        <button onClick={() => setMobileOpen(true)} className="md:hidden">
          <HamburgerIcon />
        </button>
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
            Theme Builder
          </h1>
          <p className="text-sm text-gray-500">{themeName}</p>
        </div>
      </div>
      <button
        className="bg-[#FD5F03] text-white font-bold py-2 px-4 lg:px-5 rounded-lg hover:bg-orange-600 transition-colors text-sm lg:text-base"
      >
        Save Theme
      </button>
    </header>
  );
};

export default Header;
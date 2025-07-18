import React, { useState } from 'react';
import StaticSidebar from "./components/layouts/StaticSidebar";
import ThemeBuilder from './components/ThemeBuilder';

function App() {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen bg-gray-100 overflow-hidden">
      <StaticSidebar 
        isMobileOpen={isMobileSidebarOpen} 
        setMobileOpen={setMobileSidebarOpen} 
      />

      {isMobileSidebarOpen && (
        <div 
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
        ></div>
      )}
      
      <div className="flex-1 flex flex-col">
        <div className="flex-1 md:m-4 md:border-2 md:border-gray-200 md:rounded-2xl overflow-hidden">
            <ThemeBuilder setMobileOpen={setMobileSidebarOpen} />
        </div>
      </div>
    </div>
  );
}

export default App;
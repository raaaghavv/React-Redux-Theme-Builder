import React, { Suspense } from 'react'; // Make sure Suspense is imported
import { useSelector } from 'react-redux';
import useMediaQuery from '../hooks/useMediaQuery';
import ElementList from './layouts/ElementList';
import Preview from './layouts/Preview';
import Header from './layouts/Header';

// Lazily load both panels
const TitlePanel = React.lazy(() => import('./panels/TitlePanel'));
const SubtitlePanel = React.lazy(() => import('./panels/SubtitlePanel'));
const OptionsListPanel = React.lazy(() => import('./panels/OptionsListPanel')); // Add this

const renderPanel = (selectedComponent) => {
  const PanelLoader = <div className="text-center p-10">Loading...</div>;

  switch (selectedComponent) {
    case 'title':
      return <Suspense fallback={PanelLoader}><TitlePanel /></Suspense>;
    case 'subtitle':
      return <Suspense fallback={PanelLoader}><SubtitlePanel /></Suspense>;
    // Add the case for the optionsList
    case 'optionsList':
        return <Suspense fallback={PanelLoader}><OptionsListPanel /></Suspense>
    default:
      return (
        <div className="flex-grow flex items-center justify-center">
            <p className="text-center text-gray-500">
              Select an element to customize.
            </p>
        </div>
      );
  }
};

const ThemeBuilder = ({ setMobileOpen }) => {
  // ... rest of the component is unchanged
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const selectedComponent = useSelector(
    (state) => state.themeBuilder.selectedComponent
  );

  if (isDesktop) {
    // ---- DESKTOP: 3-Column Layout ----
    return (
      <div className="flex flex-col h-full w-full font-sans">
        <Header setMobileOpen={setMobileOpen}/>
        <main className="flex flex-1 overflow-hidden">
          <ElementList />
          <div className="flex-1 p-8 overflow-y-auto bg-white">
            {/* The renderPanel function is now called here */}
            {renderPanel(selectedComponent)}
          </div>
          <div className="w-1/3 bg-gray-50 flex items-center justify-center border-l p-4">
            <Preview />
          </div>
        </main>
      </div>
    );
  }

  // ---- TABLET & MOBILE: Single Column Layout ----
  return (
    <div className="flex flex-col h-full w-full font-sans">
      <Header setMobileOpen={setMobileOpen}/>
      <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6 space-y-6">
        <div className="flex items-center justify-center">
            <Preview />
        </div>
        <ElementList />
        {/* And also here */}
        {renderPanel(selectedComponent)}
      </main>
    </div>
  );
};

export default ThemeBuilder;
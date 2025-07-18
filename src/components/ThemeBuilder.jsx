import React, { Suspense } from 'react'; 
import { useSelector } from 'react-redux';
import useMediaQuery from '../hooks/useMediaQuery';
import ElementList from './layouts/ElementList';
import Preview from './layouts/Preview';
import Header from './layouts/Header';

const TitlePanel = React.lazy(() => import('./panels/TitlePanel'));
const SubtitlePanel = React.lazy(() => import('./panels/SubtitlePanel'));
const OptionsListPanel = React.lazy(() => import('./panels/OptionsListPanel'));
const PrimaryCTAPanel = React.lazy(() => import('./panels/PrimaryCTAPanel')); 

const renderPanel = (selectedComponent) => {
  const PanelLoader = <div className="text-center p-10">Loading...</div>;

  switch (selectedComponent) {
    case 'title':
      return <Suspense fallback={PanelLoader}><TitlePanel /></Suspense>;
    case 'subtitle':
      return <Suspense fallback={PanelLoader}><SubtitlePanel /></Suspense>;
    case 'optionsList':
      return <Suspense fallback={PanelLoader}><OptionsListPanel /></Suspense>;
    case 'primaryCTA':
      return <Suspense fallback={PanelLoader}><PrimaryCTAPanel /></Suspense>;
    default:
       return (
        <div className="flex-grow flex items-center justify-center h-full">
            <p className="text-center text-gray-500">
              under maintenance.
            </p>
        </div>
      );
  }
};

const ThemeBuilder = ({ setMobileOpen }) => {
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
        {renderPanel(selectedComponent)}
      </main>
    </div>
  );
};

export default ThemeBuilder;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '../../hooks/useMediaQuery';
import { selectComponent } from '../../redux/slices/themeBuilderSlice';

const sections = {
  "Layout Elements": ["title", "subtitle", "optionsList"],
  "Interactive Elements": ["primaryCTA", "secondaryCTA", "ratingStars"],
  "Controls": ["crossButton", "soundToggle"],
};

const formatComponentName = (name) => {
  return name.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
};

const ElementList = () => {
  const dispatch = useDispatch();
  const { selectedComponent, currentTheme } = useSelector((state) => state.themeBuilder);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  if (isDesktop) {
    // ---- DESKTOP VIEW: Sidebar ----
    return (
      <aside
        className="flex-shrink-0 w-full lg:w-[30%] xl:w-1/4 min-w-[260px] bg-gray-50 p-4 lg:p-6 border-r overflow-y-auto
        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Object.entries(sections).map(([sectionTitle, components]) => (
          <div key={sectionTitle} className="mb-6">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
              {sectionTitle}
            </h2>
            <ul>
              {components.map((name) =>
                currentTheme.components[name] && (
                  <li
                    key={name}
                    className={`p-3 my-1 rounded-lg cursor-pointer transition-colors text-sm font-medium border ${
                      selectedComponent === name
                        ? "bg-orange-100 text-orange-700 border-orange-300"
                        : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                    }`}
                    onClick={() => dispatch(selectComponent(name))}
                  >
                    {/* This now correctly formats the name */}
                    {formatComponentName(name)}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </aside>
    );
  }

  // ---- TABLET & MOBILE VIEW: Dropdown ----
  return (
    <div className="w-full px-4 md:px-0">
        <label htmlFor="component-select" className="block text-sm font-medium text-gray-700 mb-1">
            Select Component to Edit
        </label>
        <select
            id="component-select"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white"
            value={selectedComponent}
            onChange={(e) => dispatch(selectComponent(e.target.value))}
        >
            {Object.entries(sections).map(([sectionTitle, components]) => (
                <optgroup label={sectionTitle} key={sectionTitle}>
                    {components.map((name) =>
                        currentTheme.components[name] && (
                        <option key={name} value={name}>
                            {formatComponentName(name)}
                        </option>
                        )
                    )}
                </optgroup>
            ))}
      </select>
    </div>
  );
};

export default ElementList;
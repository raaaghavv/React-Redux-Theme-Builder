import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComponentStyle } from '../../redux/slices/themeBuilderSlice';

const TitlePanel = () => {
  const dispatch = useDispatch();
  
  // Select the specific styles for the 'title' component from the Redux store
  const { colors, textStyle } = useSelector(
    (state) => state.themeBuilder.currentTheme.components.title
  );

  // Generic handler to update a nested property in textStyle (e.g., fontFamily, size)
  const handleTextStyleChange = (property, value) => {
    dispatch(
      updateComponentStyle({
        component: 'title',
        category: 'textStyle', // The nested object key
        property: property,    // The key within the nested object
        value: value,
      })
    );
  };

  // Handler to update the text color
  const handleColorChange = (colorValue) => {
    dispatch(
      updateComponentStyle({
        component: 'title',
        category: 'colors',
        property: 'text',
        value: colorValue,
      })
    );
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-xl font-bold mb-6">Title Component</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {/* Colour Input */}
        <div className="col-span-2">
          <label className="block text-sm font-bold text-gray-500 uppercase mb-2">
            Colour
          </label>
          <div className="flex items-center gap-3 p-2 border rounded-lg">
            <input
              type="color"
              className="p-0 w-8 h-8 bg-white border-none cursor-pointer"
              value={colors.text}
              onChange={(e) => handleColorChange(e.target.value)}
            />
            <span className="text-sm font-mono text-gray-600">{colors.text}</span>
          </div>
        </div>

        {/* Font Family Select */}
        <div>
          <label className="block text-sm font-bold text-gray-500 uppercase mb-2">
            Font
          </label>
          <select
            className="w-full p-2 border bg-transparent text-black border-gray-300 rounded-md"
            value={textStyle.fontFamily}
            onChange={(e) => handleTextStyleChange('fontFamily', e.target.value)}
          >
            <option>Helvetica</option>
            <option>Arial</option>
            <option>Times New Roman</option>
            <option>Georgia</option>
            <option>Verdana</option>
          </select>
        </div>

        {/* Font Size Input */}
        <div>
          <label className="block text-sm font-bold text-gray-500 uppercase mb-2">
            Size (px)
          </label>
          <input
            type="number"
            className="w-full p-2 border bg-transparent text-black border-gray-300 rounded-md"
            value={textStyle.size}
            onChange={(e) => handleTextStyleChange('size', Number(e.target.value))}
          />
        </div>

        {/* Text Alignment Buttons */}
        <div className="col-span-2">
          <label className="block text-sm font-bold text-gray-500 uppercase mb-2">
            Alignment
          </label>
          <div className="flex w-min rounded-md border border-gray-300">
            <button
              onClick={() => handleTextStyleChange('alignment', 'left')}
              className={`p-2 ${textStyle.alignment === 'left' ? 'bg-gray-200' : 'bg-white'}`}
            >
              Left
            </button>
            <button
              onClick={() => handleTextStyleChange('alignment', 'center')}
              className={`p-2 border-l border-r ${textStyle.alignment === 'center' ? 'bg-gray-200' : 'bg-white'}`}
            >
              Center
            </button>
            <button
              onClick={() => handleTextStyleChange('alignment', 'right')}
              className={`p-2 ${textStyle.alignment === 'right' ? 'bg-gray-200' : 'bg-white'}`}
            >
              Right
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePanel;
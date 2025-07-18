import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComponentStyle } from '../../redux/slices/themeBuilderSlice';

// A reusable sub-panel for styling each state
const StyleSection = ({ title, stateName, styles }) => {
  const dispatch = useDispatch();
  
  const handleStyleChange = (category, property, value) => {
    dispatch(
      updateComponentStyle({
        component: 'optionsList',
        category: stateName, // e.g., 'selectedState'
        property: category,  // The key of the object to update e.g., 'colors'
        value: { ...styles[category], [property]: value }, // The new object
      })
    );
  };
  
  if (!styles) {
    return null;
  }

  return (
    <div className='py-4 border-b last:border-b-0'>
        <h4 className="font-semibold mb-4 text-gray-700">{title}</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Colors */}
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Colors</label>
                <div className='space-y-2'>
                    {Object.entries(styles.colors).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                            <span className='text-sm capitalize'>{key}</span>
                            <input type="color" className="p-0 w-6 h-6 bg-white border-none cursor-pointer" value={value}
                                onChange={(e) => handleStyleChange('colors', key, e.target.value)} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Text Style */}
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Text Style</label>
                <div className='space-y-2'>
                    <select className="w-full p-1 border text-sm bg-transparent rounded" value={styles.textStyle.fontFamily}
                        onChange={(e) => handleStyleChange('textStyle', 'fontFamily', e.target.value)}>
                        <option>Helvetica</option>
                        <option>Arial</option>
                         <option>Times New Roman</option>
                        <option>Georgia</option>
                        <option>Verdana</option>
                    </select>
                    <input type="number" className="w-full p-1 border text-sm bg-transparent rounded" value={styles.textStyle.size} 
                        onChange={(e) => handleStyleChange('textStyle', 'size', Number(e.target.value))} />
                </div>
            </div>
        </div>
    </div>
  );
};

const OptionsListPanel = () => {
  const styles = useSelector(
    (state) => state.themeBuilder.currentTheme.components.optionsList
  );

  if (!styles) {
    return <div className="p-4 text-center">Loading options...</div>;
  }

return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-800">
      <h3 className="text-xl font-bold mb-2">Option List Style</h3>
      
      <StyleSection
        title="Selected Option"
        stateName="selectedState"
        styles={styles.selectedState}
      />
      <StyleSection
        title="Non-selected Option"
        stateName="nonSelectedState"
        styles={styles.nonSelectedState}
      />
      <StyleSection 
        title="Others" 
        stateName="others" 
        styles={styles.others} 
      />
    </div>
  );
};

export default OptionsListPanel;
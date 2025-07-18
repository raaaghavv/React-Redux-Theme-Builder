import React from 'react';
import { useSelector } from 'react-redux';

const Preview = () => {
  // Select components from state
  const { title, primaryCTA, subtitle, optionsList } = useSelector(
    (state) => state.themeBuilder.currentTheme.components
  );

  // --- Style Objects ---
  const titleStyles = {
    color: title?.colors?.text || '#000',
    fontSize: `${title?.textStyle?.size || 16}px`,
    textAlign: title?.textStyle?.alignment || 'left',
    fontFamily: title?.textStyle?.fontFamily || 'sans-serif',
    margin: "1rem 0",
  };

  const subtitleStyles = {
    color: subtitle?.colors?.text || '#333',
    fontSize: `${subtitle?.textStyle?.size || 14}px`,
    textAlign: subtitle?.textStyle?.alignment || 'left',
    fontFamily: subtitle?.textStyle?.fontFamily || 'sans-serif',
    marginBottom: "1rem",
  };

  const getOptionStyles = (state) => ({
    color: state?.colors?.text || '#000',
    backgroundColor: state?.colors?.background || '#fff',
    borderColor: state?.colors?.border || '#ccc',
    borderWidth: '1px',
    fontFamily: state?.textStyle?.fontFamily || 'sans-serif',
    fontSize: `${state?.textStyle?.size || 14}px`,
    textAlign: state?.textStyle?.alignment || 'center',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer'
  });

  const ctaStyles = {
    backgroundColor: primaryCTA?.colors?.background || '#007bff',
    color: primaryCTA?.colors?.text || '#fff',
    height: `${primaryCTA?.container?.height || 48}px`,
    borderRadius: `${primaryCTA?.cornerRadius?.topLeft || 8}px ${primaryCTA?.cornerRadius?.topRight || 8}px ${primaryCTA?.cornerRadius?.bottomRight || 8}px ${primaryCTA?.cornerRadius?.bottomLeft || 8}px`,
    border: `${primaryCTA?.container?.borderWidth || 1}px solid ${primaryCTA?.colors?.border || '#007bff'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: primaryCTA?.container?.fullWidth ? '100%' : 'auto',
    padding: '0 1.5rem',
    fontWeight: 'bold',
  };

  return (
    <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] overflow-hidden shadow-2xl border-4 border-gray-800 transition-transform duration-300 origin-top lg:scale-100 md:scale-90 scale-80">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-full z-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-white text-gray-800 overflow-y-auto rounded-[40px] pt-12 px-4 pb-4">
        
        <h1 style={titleStyles}>This is a Dynamic Title</h1>
        <h2 style={subtitleStyles}>And a dynamic subtitle</h2>

        {optionsList && (
            <div className="mt-6">
                <h4 className="text-sm font-bold text-gray-600 mb-2">Choose an option:</h4>
                <div className="flex items-center gap-2">
                    <button style={getOptionStyles(optionsList.selectedState)}>Option A</button>
                    <button style={getOptionStyles(optionsList.nonSelectedState)}>Option B</button>
                    <button style={getOptionStyles(optionsList.others)}>Option C</button>
                </div>
            </div>
        )}

        <div className="mt-8 flex" style={{ justifyContent: primaryCTA?.container?.alignment || 'left' }}>
          <button style={ctaStyles}>Dynamic CTA</button>
        </div>
        
      </div>
    </div>
  );
};

export default Preview;
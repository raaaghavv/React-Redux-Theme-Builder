import React from 'react';

// A reusable component for a labeled input field
export const LabeledInput = ({ label, type, value, onChange, ...props }) => (
  <div>
    <label className="block text-sm font-bold text-gray-500 uppercase mb-2">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-2 border bg-transparent text-black border-gray-300 rounded-md"
      {...props}
    />
  </div>
);

// A reusable component for a color input with a hex value display
export const ColorInput = ({ label, value, onChange }) => (
    <div>
        <label className="block text-sm font-bold text-gray-500 uppercase mb-2">
            {label}
        </label>
        <div className="flex items-center gap-3 p-2 border rounded-lg">
            <input
                type="color"
                value={value}
                onChange={onChange}
                className="p-0 w-8 h-8 bg-white border-none cursor-pointer"
            />
            <span className="text-sm font-mono text-gray-600">{value}</span>
        </div>
    </div>
);
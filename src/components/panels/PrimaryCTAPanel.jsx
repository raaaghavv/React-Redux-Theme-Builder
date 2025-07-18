import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateComponentStyle } from "../../redux/slices/themeSlice";

const PrimaryCTAPanel = () => {
  const dispatch = useDispatch();
  const ctaStyles = useSelector(
    (state) => state.theme.currentTheme.components.primaryCTA
  );

  // Use a single handler for deeply nested state to avoid verbose code
  const handleNestedChange = (category, property, value) => {
    dispatch(
      updateComponentStyle({
        component: "primaryCTA",
        styles: {
          ...ctaStyles,
          [category]: {
            ...ctaStyles[category],
            [property]: value,
          },
        },
      })
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Primary CTA</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Background Color
        </label>
        <input
          type="color"
          className="mt-1 block w-full h-10 rounded-md border-gray-300"
          value={ctaStyles.colors.background}
          onChange={(e) =>
            handleNestedChange("colors", "background", e.target.value)
          }
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Height (px)
        </label>
        <input
          type="number"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          value={ctaStyles.container.height}
          onChange={(e) =>
            handleNestedChange("container", "height", Number(e.target.value))
          }
        />
      </div>
      {/* Continue adding all other controls for the CTA component */}
    </div>
  );
};
export default React.memo(PrimaryCTAPanel);

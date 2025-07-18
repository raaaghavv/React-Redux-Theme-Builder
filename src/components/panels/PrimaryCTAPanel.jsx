import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateComponentStyle } from "../../redux/slices/themeBuilderSlice";
import { LabeledInput, ColorInput } from "./CommonControls";

const PrimaryCTAPanel = () => {
  const dispatch = useDispatch();
  const styles = useSelector(
    (state) => state.themeBuilder.currentTheme.components.primaryCTA
  );

  // A single handler for any nested property
  const handleChange = (category, property, value) => {
    dispatch(
      updateComponentStyle({
        component: "primaryCTA",
        category,
        property,
        value,
      })
    );
  };

  if (!styles) return <div>Loading CTA styles...</div>;

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 space-y-6 text-gray-800">
      <h3 className="text-xl font-bold">Primary CTA Button</h3>

      {/* Container Settings */}
      <div className="p-4 border rounded-lg">
        <h4 className="font-semibold mb-4">Container</h4>
        <div className="grid grid-cols-2 gap-4">
          <LabeledInput
            label="Height (px)"
            type="number"
            value={styles.container.height}
            onChange={(e) =>
              handleChange("container", "height", Number(e.target.value))
            }
          />
          <LabeledInput
            label="Border Width (px)"
            type="number"
            value={styles.container.borderWidth}
            onChange={(e) =>
              handleChange("container", "borderWidth", Number(e.target.value))
            }
          />
          <div className="col-span-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={styles.container.fullWidth}
                onChange={(e) =>
                  handleChange("container", "fullWidth", e.target.checked)
                }
              />
              <span className="text-sm font-medium">Full Width</span>
            </label>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="p-4 border rounded-lg">
        <h4 className="font-semibold mb-4">Colors</h4>
        <div className="grid grid-cols-2 gap-4">
          <ColorInput
            label="Background"
            value={styles.colors.background}
            onChange={(e) =>
              handleChange("colors", "background", e.target.value)
            }
          />
          <ColorInput
            label="Text"
            value={styles.colors.text}
            onChange={(e) => handleChange("colors", "text", e.target.value)}
          />
          <ColorInput
            label="Border"
            value={styles.colors.border}
            onChange={(e) => handleChange("colors", "border", e.target.value)}
          />
        </div>
      </div>

      {/* Corner Radius */}
      <div className="p-4 border rounded-lg">
        <h4 className="font-semibold mb-4">Corner Radius (px)</h4>
        <div className="grid grid-cols-2 gap-4">
          <LabeledInput
            label="Top Left"
            type="number"
            value={styles.cornerRadius.topLeft}
            onChange={(e) =>
              handleChange("cornerRadius", "topLeft", Number(e.target.value))
            }
          />
          <LabeledInput
            label="Top Right"
            type="number"
            value={styles.cornerRadius.topRight}
            onChange={(e) =>
              handleChange("cornerRadius", "topRight", Number(e.target.value))
            }
          />
          <LabeledInput
            label="Bottom Left"
            type="number"
            value={styles.cornerRadius.bottomLeft}
            onChange={(e) =>
              handleChange("cornerRadius", "bottomLeft", Number(e.target.value))
            }
          />
          <LabeledInput
            label="Bottom Right"
            type="number"
            value={styles.cornerRadius.bottomRight}
            onChange={(e) =>
              handleChange(
                "cornerRadius",
                "bottomRight",
                Number(e.target.value)
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryCTAPanel;

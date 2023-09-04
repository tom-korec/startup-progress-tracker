import React from "react";

interface CheckBoxProps {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={(e) => {
        onChange(e.target.checked);
      }}
    />
  );
};

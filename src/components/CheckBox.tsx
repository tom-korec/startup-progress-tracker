import React from "react";

interface CheckBoxProps {
  isChecked: boolean;
  disabled: boolean;
  onChange: (isChecked: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, disabled, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      disabled={disabled}
      onChange={(e) => {
        onChange(e.target.checked);
      }}
    />
  );
};

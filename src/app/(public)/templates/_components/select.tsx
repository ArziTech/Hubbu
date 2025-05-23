import React from "react";
import { clsx } from "clsx";

interface SelectProps {
  name: string;
  params: string | null;
  value: string | null;
  setParams: (value: string | null) => void;
}

const Select = ({ name, params, value, setParams }: SelectProps) => {
  const formattedValue = value ? value : null;
  return (
    // need to check if it is active
    // if its acive highlight it
    <p
      className={clsx(
        `ms-2 cursor-pointer rounded-md py-1 ps-1`,
        params === formattedValue ? "hover bg-gray-300" : "hover:bg-gray-200",
      )}
      onClick={() => setParams(formattedValue)}
    >
      {name}
    </p>
  );
};
export default Select;

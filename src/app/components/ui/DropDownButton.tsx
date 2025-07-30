"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type DropDownButtonProps = {
  options: string[];
  name: string;
};

const DropdownButton = ({ options, name }: DropDownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [townName, setTownName] = useState<string>();

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-2 font-medium transition"
      >
        {townName === undefined ? name : townName}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-[#AC8ECA4D] border border-gray-200 rounded shadow-lg z-50">
          {options.map((option, i) => (
            <button
              key={i}
              onClick={() => {
                setIsOpen(false);
                setTownName(option);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

type DropDownButtonProps = {
  options: string[];
  name: string;
};

const DropdownButtonNoChange = ({ options, name }: DropDownButtonProps) => {
  const translate = [
    { en: "vegetables", ru: "овощи" },
    { en: "dairy-products", ru: "молочная продукция" },
    { en: "meet-products", ru: "мясная продукция" },
    { en: "fruits", ru: "фрукты" },
    { en: "cereals", ru: "злаки" },
    { en: "services", ru: "услуги" },
    { en: "pastries", ru: "выпечка" },
    { en: "hot-dishes", ru: "горячие блюда" },
  ];

  const findTranslate = (name: string) => {
    const findElem = translate.find((elem) => {
      return elem.ru === name && elem.en;
    });
    return findElem?.en;
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 font-medium transition"
      >
        {name}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-[#AC8ECA4D] border border-gray-200 rounded shadow-lg z-50">
          {options.map((option, i) => (
            <Link href={`/pages/${findTranslate(option)}`} key={i}>
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButtonNoChange;

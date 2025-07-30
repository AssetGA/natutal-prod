"use client";

import { useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Поиск:", query);
    // Тут можно вызвать функцию поиска или редирект
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-row w-full max-w-4xl mx-auto"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск товаров ..."
        className="w-full border-2 border-black py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-black transition  bg-gradient-to-r from-[#ffffff] via-90% via-[#46A7AA]/50  to-[#891CAD]"
      />
      <button className="bg-[#312B2B] text-white text-lg px-3 rounded-r-md border-2 border-[#312B2B] hover:bg-black/90">
        найти
      </button>
    </form>
  );
};

export default SearchInput;

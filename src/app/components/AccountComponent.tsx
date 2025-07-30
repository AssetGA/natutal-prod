"use client";

import { Heart, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const AccountComponent = () => {
  const [count, setCount] = useState(0);

  // добавление и удаление
  const handleAdd = () => setCount((prev) => prev + 1);
  const handleRemove = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  return (
    <div className="flex flex-col justify-between items-center my-10">
      <Heart />
      <div className="flex items-center gap-4">
        <button
          onClick={handleRemove}
          className="w-9 h-9 flex justify-center items-center border border-gray-100 rounded-full text-gray-700 hover:bg-gray-100 transition"
        >
          <Minus size={18} />
        </button>
        <span className="text-lg font-semibold w-6 text-center">{count}</span>
        <button
          onClick={handleAdd}
          className="w-9 h-9 flex justify-center items-center border border-gray-100 rounded-full text-gray-700 hover:bg-gray-100 transition"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
};

export default AccountComponent;

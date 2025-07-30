import Image from "next/image";
import React from "react";

const Actions = () => {
  return (
    <div className="flex justify-center relative w-full">
      <div className="absolute flex items-center justify-center w-full h-[500px] text-5xl font-bold text-white mt-20 bg-gradient-to-r from-[#ffffff]/40 via-[#b51d6b]/40 via-[#192489]/40 via-50% to-[#ffffff]/50  blur-2xl" />
      <div className="grid grid-cols-3 gap-15 max-w-7xl z-10 mx-auto">
        <div className="w-full h-72 bg-red-500 flex flex-col hover:shadow-2xl">
          <Image
            src={"/img/SALE1.png"}
            alt=""
            width={150}
            height={70}
            className="object-contain w-full h-full -translate-y-5 pl-5"
          />
          <Image
            src={"/img/SALE2.png"}
            alt=""
            width={140}
            height={70}
            className="object-contain w-full h-full px-5"
          />
          <Image
            src={"/img/SALE1.png"}
            alt=""
            width={150}
            height={70}
            className="object-contain w-full h-full -translate-5"
          />
          <Image
            src={"/img/SALE2.png"}
            alt=""
            width={140}
            height={70}
            className="object-contain w-full h-full translate-y-6 translate-x-5"
          />
          <p className="py-15 text-3xl font-bold flex justify-center">
            <span>Распродажа</span>
          </p>
        </div>
        <div className="w-full h-72 hover:shadow-2xl">
          <Image
            src={"/img/tokens.png"}
            alt=""
            width={140}
            height={70}
            className="object-contain w-full h-full "
          />
          <p className="py-15 text-3xl font-bold flex justify-center">
            <span>Распродажа</span>
          </p>
        </div>
        <div className="w-full h-72 bg-blue-500 hover:shadow-2xl">
          <Image
            src={"/img/tokens.png"}
            alt=""
            width={140}
            height={70}
            className="object-contain w-full h-full"
          />
          <p className="py-15 text-3xl font-bold flex justify-center">
            <span>Распродажа</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Actions;

"use client";

import { vegetables } from "@/app/api/api";
import { ParamValue } from "next/dist/server/request/params";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import AccountComponent from "@/app/components/AccountComponent";

const getNeedProduct = (nameId: string | ParamValue | null) => {
  const filteredElements = vegetables.filter((elem) => {
    return elem.nameId === nameId;
  });
  return filteredElements;
};

const Page = () => {
  const searchParams = useSearchParams();
  const nameId = searchParams.get("nameId"); // "2"
  const params = useParams();
  console.log("params", params, searchParams, nameId);
  const products = getNeedProduct(nameId);
  console.log("products", products);

  return (
    <div className="w-full my-16 max-w-7xl mx-auto">
      <div className="flex flex-row justify-center w-full my-20">
        <div className="py-2 px-4 font-bold text-xl">Cортировать:</div>
        <ul className="grid grid-cols-4 gap-6">
          <li className="px-4 py-2 rounded-md bg-gray-200 hover:bg-black/70 hover:text-white/90 shadow-xl">
            по цене
          </li>
          <li className="px-4 py-2 rounded-md bg-gray-200 hover:bg-black/70 hover:text-white/90 shadow-xl">
            по популярности
          </li>
          <li className="px-4 py-2 rounded-md bg-gray-200 hover:bg-black/70 hover:text-white/90 shadow-xl">
            по рейтингам
          </li>
          <li className="px-4 py-2 rounded-md bg-gray-200 hover:bg-black/70 hover:text-white/90 shadow-xl">
            по отзывам
          </li>
        </ul>
      </div>
      <div className="flex flex-col relative">
        <div className="absolute flex items-center justify-center w-full h-full text-5xl font-bold text-white mt-20 bg-gradient-to-r from-[#b51d6b]/50 via-[#46A7AA]/50 via-[#192489]/50 via-50% to-[#891CAD]/50 blur-2xl" />
        {products.length !== 0 ? (
          products.map((elem, index) => (
            <div key={index} className="flex flex-col my-5 z-50">
              <div
                className="grid grid-cols-5 h-[200px] hover:shadow-2xl"
                key={index}
              >
                <Image
                  src={elem.imageUrl}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="col-span-2 px-5">
                  <div className="font-bold text-2xl">{elem.name}</div>
                  <div className="py-5">{elem.description}</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="my-10">{elem.price} тенге</p>
                  <button className="px-4 py-2 bg-gradient-to-tl from-[#000000] via-50% via-[#ffffff] to-[#000000] rounded-lg hover:from-[#ffffff] hover:via-50% hover:via-[#000000] hover:to-[#ffffff] hover:font-bold hover:text-white">
                    в корзину
                  </button>
                </div>
                <AccountComponent />
              </div>

              <div className="border-b-2 max-w-4xl ml-30 mt-5"></div>
            </div>
          ))
        ) : (
          <div>Данный раздел пока отсутствует</div>
        )}
      </div>
    </div>
  );
};

export default Page;

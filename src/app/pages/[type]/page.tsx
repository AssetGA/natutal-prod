"use client";

import { productsName } from "@/app/api/productName";
import { productsType } from "@/app/api/productsType";
import NameOfHeader from "@/app/components/NameOfHeader";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const params = usePathname();
  const lastSegment = params.split("/").pop(); // "vegetables"

  const findNeed = productsType.find((elem) => {
    return elem.type === lastSegment;
  });
  const findProducts = productsName.filter((elem) => {
    return findNeed !== undefined && elem.typeId === findNeed.id;
  });
  console.log("find prod", findProducts);
  return (
    <div className="relative w-full">
      <div className="absolute flex items-center justify-center w-full h-full text-5xl font-bold text-white mt-26 bg-gradient-to-r from-[#b51d6b]/30 via-[#46A7AA]/30 via-[#192489]/50 via-50% to-[#891CAD]/30 blur-2xl" />
      <div className="max-w-7xl mx-auto">
        <NameOfHeader name={lastSegment} />
        <div className="grid grid-cols-4 gap-10 my-26">
          {findProducts.length === 0 ? (
            <div className="text-4xl">данная рубрика не запущена</div>
          ) : (
            findProducts.map((elem, index) => (
              <div
                className="flex flex-col items-center w-full h-72 z-10 hover:bg-white/50 rounded-sm"
                key={index}
              >
                <Link
                  href={{
                    pathname: `${params}/${elem.en}`,
                    query: { nameId: `${elem.id}` },
                  }}
                >
                  <Image
                    src={elem.imgUrl}
                    width={400}
                    height={300}
                    alt={`${elem.ru}`}
                    className="w-full h-[250px] p-2"
                  />
                  <p className="my-5 p-5 flex justify-center">{elem.ru}</p>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

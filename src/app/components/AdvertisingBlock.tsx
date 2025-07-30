import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

const AdvertisingBlock = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl grid grid-cols-3 gap-8 mx-auto">
        <div className="relative col-span-3">
          <div className="absolute left-0 bottom-0 m-5">
            <h1 className="">Название рекламы</h1>
            <button className="flex justify-between border border-black px-4 py-2 rounded-md mt-5 hover:bg-black/70 hover:text-white">
              <Eye size={24} color="#000000" />
              <span className="px-2">смотреть</span>
            </button>
          </div>

          <div className="w-full  h-96">
            <Image
              src={"/img/adventage.png"}
              alt=""
              width={400}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 bottom-0 m-5">
            <h1 className="">Название рекламы</h1>
            <button className="flex justify-between border border-black px-4 py-2 rounded-md mt-5 hover:bg-black/70 hover:text-white">
              <Eye size={24} color="#000000" />
              <span className="px-2">смотреть</span>
            </button>
          </div>

          <div className="w-full  h-72">
            <Image
              src={"/img/adventage.png"}
              alt=""
              width={400}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 bottom-0 m-5">
            <h1 className="">Название рекламы</h1>
            <button className="flex justify-between border border-black px-4 py-2 rounded-md mt-5 hover:bg-black/70 hover:text-white">
              <Eye size={24} color="#000000" />
              <span className="px-2">смотреть</span>
            </button>
          </div>

          <div className="w-full  h-72">
            <Image
              src={"/img/adventage.png"}
              alt=""
              width={400}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 bottom-0 m-5">
            <h1 className="">Название рекламы</h1>
            <button className="flex justify-between border border-black px-4 py-2 rounded-md mt-5 hover:bg-black/70 hover:text-white">
              <Eye size={24} color="#000000" />
              <span className="px-2">смотреть</span>
            </button>
          </div>

          <div className="w-full  h-72">
            <Image
              src={"/img/adventage.png"}
              alt=""
              width={400}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBlock;

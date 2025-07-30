import Image from "next/image";
import React from "react";

type Product = {
  product: ProductProps;
};

type ProductProps = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};

const ProductCard = (product: Product) => {
  const { name, description, imageUrl, price } = product.product;
  return (
    <div className="flex flex-col hover:shadow-2xl w-full rounded-xl overflow-hidden">
      <div className="w-full h-[300px] flex justify-center">
        <Image
          src={imageUrl}
          width={500}
          height={500}
          className="object-cover"
          alt=""
        />
      </div>
      <div className="bg-white/80 p-2">
        <p className="font-bold py-5">{name}</p>
        <p>{description}</p>
        <p className="py-5 font-bold text-2xl">
          {price} <span className="text-sm">{" за  шт"}</span>
        </p>
        <button className="px-4 py-2 bg-gradient-to-tl from-[#000000] via-50% via-[#ffffff] to-[#000000] rounded-lg hover:from-[#ffffff] hover:via-50% hover:via-[#000000] hover:to-[#ffffff] hover:font-bold hover:text-white">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

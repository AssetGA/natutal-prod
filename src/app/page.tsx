import Image from "next/image";
import ProductCard from "./components/ui/ProductCard";
import AdvertisingBlock from "./components/AdvertisingBlock";
import Link from "next/link";
import VideoList from "./components/VideoList";
import Actions from "./components/Actions";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "огурец",
      imageUrl: "/img/cucumber.jpeg",
      description: "Наши огурцы мы производим на нашей ферме теплице",
      price: 1200,
    },
    {
      id: "2",
      name: "помидор",
      imageUrl: "/img/tomato.webp",
      description: "Наши огурцы мы производим на нашей ферме теплице",
      price: 1500,
    },
    {
      id: "3",
      name: "масло",
      imageUrl: "/img/maslo.png",
      description: "Наши огурцы мы производим на нашей ферме теплице",
      price: 2000,
    },
    {
      id: "4",
      name: "молоко",
      imageUrl: "/img/milk.jpeg",
      description: "Наши огурцы мы производим на нашей ферме теплице",
      price: 500,
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full flex flex-row justify-between my-10 px-20">
        <div className="w-full max-w-3xl mx-auto">
          <ul className="flex flex-row justify-center gap-4">
            <li className="hover:font-bold w-full">Молочка</li>
            <li className="hover:font-bold w-full">Мясо</li>
            <li className="hover:font-bold w-full">Овощи</li>
            <li className="hover:font-bold w-full">Фрукты</li>
            <li className="hover:font-bold w-full">Пшеница</li>
            <li className="hover:font-bold w-full">Мука</li>
            <li className="hover:font-bold w-full">Услуги</li>
          </ul>
        </div>
        <button className="py-2 px-4 text-white rounded-2xl bg-gradient-to-tr from-[#ffffff] via-[#192489] via-60% via-[#46A7AA] to-[#891CAD] hover:bg-gradient-to-lr hover:from-[#C723B6] hover:via-30% hover:via-[#46A7AA] hover:to-[#891CAD]">
          Распродажа
        </button>
      </div>
      <div className="relative w-full ">
        <div className="absolute w-full h-[700px] bg-gradient-to-tr from-[#ffffff] via-30% before:via-[#46A7AA] via-[#C723B6]/50 after:to-[#891CAD] hover:bg-gradient-to-tr hover:from-[#ffffff]  hover:via-40% hover:after:via-[#46A7AA] hover:via-[#C723B6]/50 hover:before:to-[#891CAD] transition-all duration-500 ease-in-out hover:scale-105 blur-sm hover:blur-none" />
        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto py-10">
          <div className="relative row-span-2 text-white/70 hover:text-white z-10">
            <div className="z-10 overflow-hidden rounded-xl hover:shadow hover:shadow-cyan-300 ">
              <Image
                src={"/img/farm.png"}
                alt=""
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="absolute left-0 top-0 my-5 px-5 font-extrabold text-4xl">
              Хозяйство
            </p>
          </div>
          <div className="relative w-full flex flex-col h-full overflow-hidden rounded-xl shadow text-white/70 hover:text-white">
            <Image
              src={"/img/product.png"}
              alt=""
              width={600}
              height={500}
              className="object-cover w-full h-full hover:shadow hover:shadow-cyan-300"
            />
            <p className="absolute left-0 bottom-0 my-5 px-5 font-extrabold text-4xl">
              Производство
            </p>
          </div>
          <div className="relative w-full flex flex-col h-full overflow-hidden rounded-xl shadow text-white/70 hover:text-white">
            <Image
              src={"/img/tepli.png"}
              alt=""
              width={600}
              height={500}
              className="object-cover w-full h-full hover:shadow hover:shadow-cyan-300"
            />
            <p className="absolute left-0 bottom-0 my-5 px-5 font-extrabold text-4xl">
              Растениеводство
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 mt-20">
        <p className="flex justify-center mx-auto py-20 text-3xl">
          Покупайте натуральную продукцию, делитесь впечатлениями и вкусом
        </p>
      </div>
      <div className="flex justify-center relative w-full">
        <div className="absolute flex items-center justify-center w-full h-[600px] text-5xl font-bold text-white mt-20 bg-gradient-to-r from-[#b51d6b]/50 via-[#46A7AA]/50 via-[#192489]/50 via-50% to-[#891CAD]/50 blur-2xl" />
        <div className="grid grid-cols-4 gap-8 max-w-7xl z-10">
          {products.map((elem) => (
            <div className="p-2" key={elem.id}>
              <ProductCard product={elem} />
            </div>
          ))}
        </div>
      </div>
      <div className="px-20 mt-46">
        <p className="flex justify-center mx-auto py-20 text-3xl">Реклама</p>
        <AdvertisingBlock />
      </div>
      <div className="px-20">
        <p className="flex justify-center mx-auto py-20 text-3xl">Акции</p>
      </div>
      <Actions />
      <div className="px-20 mt-72">
        <p className="flex justify-center mx-auto py-20 text-3xl">Полезное</p>
      </div>
      <div className="w-full max-w-7xl mx-auto mb-20">
        <ul className="flex flex-wrap gap-4">
          {[
            "Как получить масло",
            "Как получить творог",
            "Как получить яйцо",
            "Как получают масло",
            "Мука где качество",
            "Как растет яблоко",
          ].map((title, idx) => (
            <li
              key={idx}
              className="py-2 px-4 bg-gray-200 rounded-sm shadow hover:shadow-lg transition-all"
            >
              <Link href="#" className="text-sm  hover:text-black/70">
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute flex items-center justify-center w-full h-[500px] text-5xl font-bold text-white mt-20 bg-gradient-to-r from-[#ffffff]/40 via-[#891CAD]/50  via-[#192489]/40 via-50% to-[#ffffff]/50  blur-2xl" />
        <VideoList />
      </div>
    </div>
  );
}

import React from "react";
import DropDownButton from "./ui/DropDownButton";
import {
  BookImage,
  Heart,
  ListOrdered,
  MapPin,
  ShoppingBasket,
  User,
} from "lucide-react";
import SearchInput from "./ui/SearchInput";
import DropdownButtonNoChange from "./ui/DropDownButtonNoChange";

const optionsTown = ["Астана", "Костанай"];

const options = [
  "овощи",
  "молочная продукция",
  "мясная продукция",
  "фрукты",
  "злаки",
  "выпечка",
  "горячие блюда",
  "услуги",
];

const NavBar = () => {
  return (
    <>
      <div className="w-full bg-[#AC8ECA4D] ">
        <div className="flex flex-row px-20 pt-3">
          <div className="flex w-2/3">
            <ul className="grid grid-cols-4 gap-5">
              <li className="py-3">Магазины</li>
              <li className="py-3">Доставка</li>
            </ul>
          </div>
          <div className="flex flex-row justify-end gap-5 w-1/3">
            <div className="flex flex-row py-3">
              <MapPin size={20} />
              <DropDownButton options={optionsTown} name="Город" />
            </div>

            <div className="flex flex-row py-3">
              <ListOrdered size={20} />
              <button className="px-2">Заказы</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row my-2 px-20 ">
        <div className="p-5 bg-gray-300">logo</div>
        <div className="flex flex-row w-full items-end ml-6">
          <div className="flex flex-row  bg-[#312B2B] text-white py-3 px-4 rounded-md">
            <BookImage color="#ffffff" />
            <DropdownButtonNoChange options={options} name="Каталог" />
          </div>
          <div className="w-full">
            <SearchInput />
          </div>
          <div className="flex flex-row gap-4 text-sm">
            <div className="w-15 flex  flex-col justify-center items-center">
              <Heart />
              <p>избранное</p>
            </div>
            <div className="w-15 flex  flex-col justify-center items-center">
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#C723B6] via-50% via-[#46A7AA] to-[#891CAD]">
                <div className="rounded-full bg-white border-4">
                  <User className="text-black" />
                </div>
              </div>

              <p>войти</p>
            </div>
            <div className="w-15 flex flex-col  justify-center items-center">
              <ShoppingBasket />
              <p>корзина</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#272727] text-white/90 py-20">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h1 className="text-2xl font-bold my-5">О Компании</h1>
            <ul className="text-xl">
              <li>Вакансии</li>
              <li>О нас</li>
              <li>Новости</li>
              <li>История Компании</li>
              <li>Политика в области защиты и обработки информации</li>
              <li>Сотрудничество</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold my-5">Покупателям</h1>
            <ul className="text-xl">
              <li>Возврат товара</li>
              <li>Способы оплаты</li>
              <li>Акт сверки</li>
              <li>Каталог товаров</li>
              <li>Способы получения товаров</li>
              <li>Моя ферма</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold my-5">Услуги</h1>
            <ul className="text-xl">
              <li>Доставка и подъем</li>
              <li>Самовывоз</li>
              <li>Копчение</li>
              <li>Поиск согыма</li>
              <li>Временное хранение</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center my-10">
          <p className="text-xl font-bold">Обратная связь</p>
          <ul className="flex flex-row space-x-5 my-5">
            <li>
              <Image src={"/img/instagram.png"} width={16} height={16} alt="" />
            </li>
            <li>
              <Image src={"/img/telegram.png"} width={16} height={16} alt="" />
            </li>
            <li>
              <Image src={"/img/whatsapp.png"} width={16} height={16} alt="" />
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

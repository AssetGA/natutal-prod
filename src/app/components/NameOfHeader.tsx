import React from "react";

type HeaderProps = {
  name: string | undefined;
};

const NameOfHeader = ({ name }: HeaderProps) => {
  return <div className="flex py-10 font-bold text-xl px-5">{name}</div>;
};

export default NameOfHeader;

import { pageIn } from "../types/types";

export const findTranslate = (name: string, translate: pageIn[]) => {
  const findElem = translate.find((elem) => {
    return elem.ru === name && elem.en;
  });
  return findElem?.en;
};

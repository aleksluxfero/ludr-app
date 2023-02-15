import {Iletter} from "@/types";
// @ts-ignore
import Morpher from "morpher-ws3-client";

export function transliterateFromRussianToEnglish(russianText: string): string {
  const charactersMap: Iletter = {
    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d",
    "е": "e", "ё": "yo", "ж": "zh", "з": "z", "и": "i",
    "й": "j", "к": "k", "л": "l", "м": "m", "н": "n",
    "о": "o", "п": "p", "р": "r", "с": "s", "т": "t",
    "у": "u", "ф": "f", "х": "h", "ц": "ts", "ч": "ch",
    "ш": "sh", "щ": "shch", "ъ": "", "ы": "y", "ь": "",
    "э": "je", "ю": "yu", "я": "ya", " ": "-",
    "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6",
    "7": "7", "8": "8", "9": "9", "0": "0", ".": ""
  };

  russianText = russianText.replaceAll("  ", " ")

  let result = "";
  for (let i = 0; i < russianText.length; i++) {
    let char = russianText[i].toLowerCase();
    result += charactersMap[char] !== undefined ? charactersMap[char] : char;
  }

  return result;
}


export const getAlias = (str: string) => {
  return transliterateFromRussianToEnglish(str);
}
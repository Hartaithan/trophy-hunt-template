type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];

export const clsx = (...inputs: ClassValue[]): string => {
  let i = 0;
  let tmp;
  let str = "";
  let len = inputs.length;
  for (; i < len; i++) {
    if ((tmp = inputs[i])) {
      if (typeof tmp === "string") {
        str += (str && " ") + tmp;
      }
    }
  }
  return str;
};

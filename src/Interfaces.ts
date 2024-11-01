import { ChangeEvent, ReactNode } from "react";

/*/////////////*/
/*PROPS*/
/*/////////////*/
export interface StyledContainerProps {
  children: ReactNode;
}

export interface SelectT {
  options: [
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string }
  ];
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

/*/////////////*/

export interface DataType {
  advice: string;
  id: number;
}

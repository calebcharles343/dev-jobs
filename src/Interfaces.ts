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
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Requirements;
}

export interface Requirements {
  content: string;
  items: string[];
}

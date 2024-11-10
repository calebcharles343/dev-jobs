import { ChangeEvent, ReactNode } from "react";

/*/////////////*/
/*PROPS*/
/*/////////////*/
export interface StyledContainerProps {
  children: ReactNode;
}

export interface Buttons {
  ButtonType: "btn1" | "btn2" | "mobile" | "mobile-2" | "long";
}

export interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export interface CompanyBoxProps {
  logoBg: string;
}

export interface HeadingProps {
  headingType?: "h1" | "h2" | "h3" | "h4" | "h1-mobile";
  color?: string;
}

export interface InputProps {
  width?: string;
  height?: string;
}

export interface JobProps {
  job: DataType;
}

export interface IconProps {
  logoBg: string;
}

export interface ModalContextProps {
  open: (name: string) => void;
  close: () => void;
  openName: string;
}

export interface StyledSelectProps {
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectProps {
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

export interface CircleProps {
  $isDarkMode: boolean;
}

/*/////////////*/
/*DATA*/
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

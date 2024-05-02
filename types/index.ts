import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles? : string;
  handelClick?: 
  MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit' ;
  textStyle?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface BikeProps {
  item: string;
  id: number;
  title: string;
  description: string;
  date_stolen: number;
  stolen_location: string;
  thumb?: string;
  year?: number;
  serial: string,
  status: string,
  manufacturer_name?: string,
}

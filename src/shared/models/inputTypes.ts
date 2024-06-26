import { CSSProperties, HtmlHTMLAttributes} from "react";

export interface InputType extends Omit<JSX.IntrinsicElements['input'],'style'> {
  // props: React.InputHTMLAttributes<HTMLInputElement>
}


export interface InputSearchType extends InputType{
  placeholder: string
}

export interface InputFormType extends InputType {
  // detailId: number;
  // title: string;
  placeholder:string
}



export type ComponentInputProps =
  | { type: 'inputSearch'; props: InputSearchType }
  | { type: 'inputForm'; props: InputFormType }
 
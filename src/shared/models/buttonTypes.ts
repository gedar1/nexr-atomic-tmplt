import { CSSProperties} from "react";

export interface ButtonType extends Omit<React.JSX.IntrinsicElements['button'],'style'> {
  // props: React.InputHTMLAttributes<HTMLInputElement>
}

export interface ButtonWhitIconType extends ButtonType {
  title: string
}

export interface ButtonBasicType extends ButtonType {
  title: string
}
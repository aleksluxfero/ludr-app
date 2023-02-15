import {ButtonHTMLAttributes, DetailedHTMLProps, FC, HTMLAttributes} from "react";
import styles from "./button-icon.module.css";
import cn from "classnames";
export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}
const ButtonIcon: FC<ButtonIconProps> = ({children, className, type, ...props}) => {
  return (
    <button type={type ? type: "button"} {...props} className={cn(styles.buttonIcon, className)}>
      {children}
    </button>
  )
}

export default ButtonIcon;
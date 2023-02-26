import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import cn from "classnames";
import styles from "./button.module.css";

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}
const Button: FC<ButtonProps> = ({children, className, ...props}) => {
  return (
    <span className={cn(styles.button, className)} {...props}>{children}</span>
  )
}

export default Button;
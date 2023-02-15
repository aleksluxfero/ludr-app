import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import styles from "./footer.module.css";
import cn from "classnames";
export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{}
const Footer: FC<FooterProps> = ({className, ...props}) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <span>ludr.ru - {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer;
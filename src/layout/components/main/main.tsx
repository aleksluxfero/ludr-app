import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import styles from "./main.module.css";
import cn from "classnames";
export interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}
const Main: FC<MainProps> = ({children, className, ...props}) => {
  return (
    <main className={cn(styles.main, className)} {...props}>
      {children}
    </main>
  )
}

export default Main;
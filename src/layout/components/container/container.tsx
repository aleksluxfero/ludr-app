import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import styles from "./container.module.css";
import cn from "classnames";
export interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
const Container: FC<ContainerProps> = ({children, className, ...props}) => {
  return (
    <div {...props} className={cn(styles.container, className)}>
      {children}
    </div>
  )
}

export default Container;
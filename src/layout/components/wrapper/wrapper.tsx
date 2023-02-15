import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import styles from "./wrapper.module.css";
import cn from "classnames";

export interface WrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}
const Wrapper: FC<WrapperProps> = ({className, children, ...props}) => {
  return (
    <div {...props} className={cn(styles.wrapper, className)}>{children}</div>
  )
}

export default Wrapper;
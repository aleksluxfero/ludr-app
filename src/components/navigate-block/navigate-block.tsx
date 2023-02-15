import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import SearchForm from "@/components/search-form/search-form";
import LetterPanel from "@/components/letter-panel/letter-panel";
import cn from "classnames";
import styles from "./navigate-block.module.css";
export interface NavigationBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}
const NavigateBlock: FC<NavigationBlockProps> = ({className,...props}) => {
  return (
    <div {...props} className={cn(styles.navigateBlock, className)}>
      <SearchForm placeholder="Что вам приснилось?"/>
      <LetterPanel/>
    </div>
  )
}

export default NavigateBlock;
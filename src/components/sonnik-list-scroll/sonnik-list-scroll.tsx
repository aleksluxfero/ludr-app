import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import {IPopularSonnikNames} from "@/types";
import SonnikCard from "@/components/sonnik-card/sonnik-card";
import styles from "./sonnik-list-scroll.module.css";

export interface ListScrollProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  popularSonnikNames: IPopularSonnikNames
}
const SonnikListScroll: FC<ListScrollProps> = ({popularSonnikNames}) => {
  return (
    <ul className={styles.sonnikListScrollList}>
      {popularSonnikNames.map((popularSonnikName, idx) => {
        return (
          <li className={styles.sonnikListScrollItem} key={idx}>
            <SonnikCard popularSonnikName={popularSonnikName}/>
          </li>
        )
      })}
    </ul>
  )
}

export default SonnikListScroll;
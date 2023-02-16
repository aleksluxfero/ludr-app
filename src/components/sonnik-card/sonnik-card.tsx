import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import {IPopularSonnikName} from "@/types";
import Link from "next/link";
import {PATHS} from "@/constants";
import Image from "next/image";
import styles from "./sonnik-card.module.css";
import {getAlias, transliterateFromRussianToEnglish} from "@/utils";
export interface SonnikCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  popularSonnikName: IPopularSonnikName
}

const SonnikCard: FC<SonnikCardProps> = ({popularSonnikName}) => {

  const path = `${PATHS.home}${getAlias(popularSonnikName)}`
  return (
    <div className={styles.sonnikCard}>
      <Link href={path}>
        <span className={styles.sonnikCardTitle}>{popularSonnikName}</span>
      </Link>
      <div className={styles.sonnikCardOverlay}/>
    </div>
  )
}

export default SonnikCard;
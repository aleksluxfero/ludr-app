import {FC} from "react";
import SonnikListScroll from "@/components/sonnik-list-scroll/sonnik-list-scroll";
import Wrapper from "@/layout/components/wrapper/wrapper";
import {IPopularSonnikNames} from "@/types";
import styles from "./scroll-block.module.css";

interface ScrollBlockProps {
  popularSonnikNames: IPopularSonnikNames
}
const ScrollBlock: FC<ScrollBlockProps> = ({popularSonnikNames}) => {
  return (
    <Wrapper className={styles.scrollBlock}>
      <h3>Популярные сны</h3>
      <SonnikListScroll popularSonnikNames={popularSonnikNames}/>
    </Wrapper>
  )
}

export default ScrollBlock;
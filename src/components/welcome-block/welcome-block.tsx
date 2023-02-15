import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import cn from "classnames";
import NavigateBlock from "@/components/navigate-block/navigate-block";
import styles from "./welcome-block.module.css";
import Wrapper from "@/layout/components/wrapper/wrapper";
import {useRouter} from "next/router";

export interface WelcomeBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string,
}

const WelcomeBlock: FC<WelcomeBlockProps> = ({className, title, ...props}) => {
  const { pathname } = useRouter();
  return (
    <div className={cn(styles.welcomeBlock, className)} {...props}>
      <Wrapper className={styles.welcomeBlockTitleWrapper}>
        {title ? <h2 className={styles.welcomeBlockTitle2}>{title}</h2> : (
          <>
            <h1 className={styles.welcomeBlockTitle}>Сонник</h1>
            <h2 className={styles.welcomeBlockTitle2}>Толкование снов</h2>
          </>
        )}
      </Wrapper>
      {pathname === "/" ?
      <p className={styles.welcomeBlockDesc}>Добро пожаловать в онлайн сонник! Здесь вы найдете все, что нужно для
        толкования снов. Наш сайт предлагает вам бесплатный доступ ко множеству различных сонников, включая Сонник
        Миллера, Сонник Ванги, Мусульманский Сонник, Сонник Цветкова, Сонник Фрейда и др. Все эти сонники помогут вам
        понять символы и значения, скрытые в ваших снах. Начните исследовать мир снов уже сейчас!</p> : null}
      <NavigateBlock className={styles.welcomeBlockNavigate}/>
      <div className={styles.overlay}/>
    </div>
  )
}

export default WelcomeBlock;
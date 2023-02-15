import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import Link from "next/link";
import {PATHS} from "@/constants";
import styles from "./logo.module.css";
import cn from "classnames";
import LogoIcon from "@/components/icons/logo-icon";


export interface LogoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isLink?: boolean,
  link?: string
}

const Logo: FC<LogoProps> = ({isLink, link, className, ...props}) => {

  const LogoEl = () => {
    return (
      <div className={cn(styles.logo, className)} {...props}>
        <LogoIcon className={styles.logoIcon}/>
        <span className={styles.logoSecondLetter}>LUDR</span>
      </div>
    )
  }

  if (isLink) {
    return (
      <Link href={link ? link : PATHS.home}>
        <LogoEl/>
      </Link>
    )
  }

  return (
    <LogoEl/>
  )
}

export default Logo;
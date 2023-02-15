import {DetailedHTMLProps, FC, HTMLAttributes, useState} from "react";
import styles from "./header.module.css";
import cn from "classnames";
import Logo from "@/components/logo/logo";
import SearchIcon from "@/components/icons/search-icon";
import ButtonIcon from "@/components/button-icon/button-icon";
import HeaderSearch from "@/layout/components/header-search/header-search";
export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{}
const Header: FC<HeaderProps> = ({className, ...props}) => {

  const [isHeaderShow, setIsHeaderShow] = useState<boolean>(false);
  const toggleHeaderSearch = () => {
    if(isHeaderShow) {
      setIsHeaderShow(false)
    } else {
      setIsHeaderShow(true)
    }
  }

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.headerLeft}>
        <Logo isLink={true}/>
      </div>
      <div className={styles.headerRight}>
        <ButtonIcon onClick={toggleHeaderSearch}>
          <SearchIcon className={styles.headerSearchIcon}/>
        </ButtonIcon>
      </div>
      {isHeaderShow ? <HeaderSearch toggleHeaderSearch={toggleHeaderSearch} className={styles.headerSearch}/> : null}
    </header>
  )
}

export default Header;
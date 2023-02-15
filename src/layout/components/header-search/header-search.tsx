import styles from "./header-search.module.css";
import cn from "classnames";
import React, {DetailedHTMLProps, FC, HTMLAttributes, useState} from "react";
import SearchForm from "@/components/search-form/search-form";
import ButtonIcon from "@/components/button-icon/button-icon";
import ArrowLongLeftIcon from "@/components/icons/arrow-long-left-icon";


interface HeaderSearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  toggleHeaderSearch: () => void
}
const HeaderSearch: FC<HeaderSearchProps> = ({className, toggleHeaderSearch}) => {

  return (
    <div className={cn(styles.headerSearch, className)}>
      <ButtonIcon onClick={toggleHeaderSearch} className={styles.headerSearchButton}>
        <ArrowLongLeftIcon className={styles.headerSearchIcon}/>
      </ButtonIcon>
      <SearchForm className={styles.headerSearchForm}/>
    </div>
  )
}

export default HeaderSearch;
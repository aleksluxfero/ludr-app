import React, {DetailedHTMLProps, FC, FormEvent, FormHTMLAttributes, useEffect, useState} from "react";
import styles from "./search-form.module.css";
import cn from "classnames";
import ButtonIcon from "@/components/button-icon/button-icon";
import SearchIcon from "@/components/icons/search-icon";
import {useRouter} from "next/router";

export interface SearchFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  notButton?: boolean
}
const SearchForm: FC<SearchFormProps> = ({className, placeholder, notButton,...props}) => {

  const [inputValue, setInputValue] = useState<string>("");

  const router = useRouter();
  const onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(inputValue)
    onSearchButtonClick();
  }

  const onSearchButtonClick = () => {
    router.push(`/search?q=${inputValue}`)
  }
  const onChangeInputValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value)
  }

  return (
    <form onSubmit={onSubmitForm} action="/search" {...props} className={cn(styles.searchForm, className)}>
      <label className={styles.searchFormLabel}>
        <input value={inputValue} onChange={onChangeInputValue} placeholder={placeholder} className={cn(styles.searchFormInput, {
          [styles.notButtonInput]: notButton
        })} type="search"/>
      </label>
      {notButton ? null :
      <ButtonIcon onClick={onSearchButtonClick} type="submit" className={styles.searchFormButton}>
        <SearchIcon className={styles.searchFormSearchIcon}/>
      </ButtonIcon>
      }
    </form>
  )
}

export default SearchForm;
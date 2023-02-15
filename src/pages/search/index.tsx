import WelcomeBlock from "@/components/welcome-block/welcome-block";
import withLayout from "@/layout/layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ISonniks} from "@/types";
import Link from "next/link";
import {PATHS} from "@/constants";
import styles from "@/styles/Search.module.css";
import Head from "next/head";


function Search() {

  const [searchData, setSearchData] = useState<ISonniks>([])

  const {query: {q}} = useRouter();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/sonnik/search?q=${q}`);
      const data = await res.json();
      setSearchData(data);
    }
    if (q) {
      loadData();
    }
  }, [q])

  return (
    <>
      <Head>
        <title>Поиск</title>
      </Head>
      <div className={styles.search}>
        <WelcomeBlock title="Поиск"/>
        {q ? (
          <h3 className={styles.searchTitle}>Поиск по запросу: {q}</h3>
        ) : null}
        {searchData.length ? (
          <div className={styles.searchList}>{
            searchData.map(it => {
              return <Link href={PATHS.home + it.nameAlias} key={it._id}>{it.name}</Link>
            })}
          </div>
        ) : <h3 className={styles.searchTitle}>Ничего не найдено</h3>}
      </div>
    </>

  )
}

export default withLayout(Search);
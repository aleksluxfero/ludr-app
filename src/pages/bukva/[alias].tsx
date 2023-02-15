import withLayout from "@/layout/layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import process from "process";
import {LETTERS, PATHS} from "@/constants";
import styles from "@/styles/Bukva.module.css";
import Link from "next/link";
import  {IWords} from "@/types";
import WelcomeBlock from "@/components/welcome-block/welcome-block";
import Head from "next/head";


interface BukvaProps {
  words: IWords
}
function Bukva( { words }: BukvaProps) {
  const letter = words[0]._id.slice(0, 1);
  return (
    <div className={styles.bukva}>
      <Head>
        <title>{`Сны на букву ${letter}`}</title>
        <meta name="description" content="Сонник Миллера, Сонник Ванги, Мусульманский Сонник, Сонник Цветкова, Сонник Фрейда и др."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <WelcomeBlock title={`Сны на букву ${letter}`}/>
      <ul className={styles.wordList}>
        {words.map((it, idx) => {
          return (
            <li className={styles.wordItem} key={idx}>
              <Link className={styles.wordLink} href={PATHS.home + it.nameAlias}>
                {it._id}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {

  const letters = LETTERS.map((letterData) => {
    const [item] = Object.entries(letterData);
    return item[1]
  })

  return {
    paths: letters.map((letter: string) => "/" + PATHS.bukva + "/" + letter),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {
  if(!params) {
    return {
      notFound: true
    }
  }

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/sonnik/name?letter=" + params.alias);
  const words = await res.json();
  return {
    props: {
      words
    }
  }
}

export default withLayout(Bukva)
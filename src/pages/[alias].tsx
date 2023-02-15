import withLayout from "@/layout/layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import * as process from "process";
import {ISonniks} from "@/types";
import WelcomeBlock from "@/components/welcome-block/welcome-block";
import styles from "@/styles/Sonnik.module.css";
import Link from "next/link";
import {PATHS} from "@/constants";
import Head from "next/head";

interface SonnikProps {
  sonniks: ISonniks
}
function Sonnik({sonniks}: SonnikProps) {
  const title = "Сонник - " + sonniks[0].name + ", толкование снов";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={sonniks[0].desc.join(" ")}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <WelcomeBlock title={title}/>
      <ul className={styles.sonnikList}>
        {sonniks.map(sonnik => {
          return (
            <li className={styles.sonnikItem} key={sonnik._id}>
              <h3 id={sonnik.sonnikNameAlias} className={styles.sonnikTitle}>{sonnik.sonnikName}</h3>
              <div className={styles.sonnikDesc}>
                {sonnik.desc.map((it, idx) => {
                  return (
                    <p key={idx}>{it}</p>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/sonnik/aliases");
  const aliases = await res.json();
  return {
    paths: aliases.map((alias: string) => "/" + alias),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {
  if(!params) {
    return {
      notFound: true
    }
  }

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/sonnik/alias?alias=" + params.alias);
  const sonniks = await res.json();
  return {
    props: {
      sonniks
    }
  }
}

export default withLayout(Sonnik);
import Head from 'next/head'
import withLayout from "@/layout/layout";
import WelcomeBlock from "@/components/welcome-block/welcome-block";
import {IPopularSonnikNames} from "@/types";
import Wrapper from "@/layout/components/wrapper/wrapper";
import ScrollBlock from "@/components/scroll-block/scroll-block";


interface HomeProps {
  popularSonnikNames: IPopularSonnikNames
}
function Home({popularSonnikNames}: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Сонник - толкование снов онлайн бесплатно</title>
        <meta name="description" content="Сонник
        Миллера, Сонник Ванги, Мусульманский Сонник, Сонник Цветкова, Сонник Фрейда и др."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <WelcomeBlock/>
      <ScrollBlock popularSonnikNames={popularSonnikNames}/>
      <Wrapper className="markdown">
        <p>
          Толкование снов было частью истории человечества на протяжении тысячелетий. От древних цивилизаций
          до современной психологии люди были заинтересованны значениями своих снов и символами, которые они содержат.
        </p>
        <p>
          Сонник - это книга, в которой дается толкование распространенных символов, являющихся во снах. Считается, что эти символы имеют универсальные значения, которые могут помочь
          сновидцу понять его скрытые эмоции и желания.
        </p>
        <p>Например, во многих сонниках сон о воде трактуется как символ эмоций и подсознания. Спокойное, чистое озеро во
          сне может символизировать умиротворение и эмоциональное равновесие, в то время как бурный океан может символизировать эмоциональную
          суматоху и смятение.
        </p>
        <p>На толкование снов также может влиять личный опыт и культурное происхождение. Например, человек, имевший
          травматический опыт общения со змеями, может интерпретировать змею во сне как символ страха и опасности, в то
          время как для другого человека змея может символизировать трансформацию и личностный рост.
        </p>
        <p>
          Важно отметить, что толкование снов не является точной наукой, и значение сна может сильно варьироваться в
          зависимости от конкретного человека. Некоторые люди считают, что сны - это просто результат случайной активности
          мозга, другие верят, что это послания от подсознания или даже от духовного источника.
        </p>
        <p>Независимо от убеждений, изучение символизма сновидений может дать ценную информацию об эмоциях и
          желаниях человека. Понимая смысл снов, человек может глубже понять себя и внести позитивные изменения в свою жизнь.
        </p>
      </Wrapper>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/sonnik/popular");
  const popularSonnikNames = await res.json()
  return {
    props: {
      popularSonnikNames,
    },
  }
}

export default withLayout(Home);



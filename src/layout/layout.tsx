import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Header from "@/layout/components/header/header";
import Footer from "@/layout/components/footer/footer";
import Main from "@/layout/components/main/main";
import Container from "@/layout/components/container/container";
import Wrapper from "@/layout/components/wrapper/wrapper";
import styles from "./layout.module.css";
export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Wrapper className={styles.headerWrap}>
        <Container>
          <Header/>
        </Container>
      </Wrapper>
      <Wrapper className={styles.mainWrap}>
        <Container>
          <Main>{children}</Main>
        </Container>
      </Wrapper>
      <Wrapper className={styles.footerWrap}>
        <Container>
          <Footer/>
        </Container>
      </Wrapper>
    </div>
  )
}

const withLayout = <T extends Record<any, any>>(Component: FC<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props}/>
      </Layout>
    )
  }
}
export default withLayout;
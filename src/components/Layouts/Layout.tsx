import { ReactElement, ReactNode, useEffect } from 'react';
import Prism from 'prismjs';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Main from '@components/Main/Main';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import { t } from '@lingui/macro';
import 'prism-themes/themes/prism-coldark-cold.min.css';

const Layout = ({
  children,
  isHome = false,
}: {
  children: ReactNode;
  isHome?: boolean;
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <a href="#main" className="screen-reader-text">{t`Skip to content`}</a>
      <Header isHome={isHome} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export const getLayout = (page: ReactElement) => {
  const pageTitle: string = page.props.breadcrumbTitle;

  return (
    <Layout>
      <Breadcrumb pageTitle={pageTitle} />
      {page}
    </Layout>
  );
};

export default Layout;

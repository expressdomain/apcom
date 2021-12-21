import { getLayout } from '@components/Layouts/Layout';
import { seo } from '@config/seo';
import { getPageByUri } from '@services/graphql/queries';
import { NextPageWithLayout } from '@ts/types/app';
import { PageProps } from '@ts/types/pages';
import { loadTranslation } from '@utils/helpers/i18n';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';

const LegalNotice: NextPageWithLayout<PageProps> = ({ page }) => {
  return (
    <>
      <Head>
        <title>{seo.legalNotice.title}</title>
        <meta name="description" content={seo.legalNotice.description} />
      </Head>
      <article>
        <header>
          <h1>{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.intro }}></div>
        </header>
        <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
      </article>
    </>
  );
};

LegalNotice.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const translation = await loadTranslation(
    context.locale!,
    process.env.NODE_ENV === 'production'
  );
  const page = await getPageByUri('/mentions-legales/');
  const breadcrumbTitle = page.title;

  return {
    props: {
      breadcrumbTitle,
      page,
      translation,
    },
  };
};

export default LegalNotice;

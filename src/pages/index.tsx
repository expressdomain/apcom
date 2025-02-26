import FeedIcon from '@assets/images/icon-feed.svg';
import { ButtonLink } from '@components/Buttons';
import { ContactIcon } from '@components/Icons';
import Layout from '@components/Layouts/Layout';
import { ResponsiveImage } from '@components/MDX';
import { RecentPosts } from '@components/Widgets';
import HomePageContent from '@content/pages/homepage.mdx';
import { getPublishedPosts } from '@services/graphql/queries';
import styles from '@styles/pages/Home.module.scss';
import { NextPageWithLayout, ResponsiveImageProps } from '@ts/types/app';
import { PostsList } from '@ts/types/blog';
import { settings } from '@utils/config';
import { loadTranslation } from '@utils/helpers/i18n';
import { NestedMDXComponents } from 'mdx/types';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import type { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { Graph, WebPage } from 'schema-dts';

type HomePageProps = {
  recentPosts: PostsList;
};

const Home: NextPageWithLayout<HomePageProps> = ({
  recentPosts,
}: {
  recentPosts: PostsList;
}) => {
  const intl = useIntl();

  const CodingLinks = () => {
    return (
      <ul className={styles['links-list']}>
        <li>
          <ButtonLink target="/thematique/developpement-web">
            {intl.formatMessage({
              defaultMessage: 'Web development',
              description: 'HomePage: link to web development thematic',
              id: 'vkF/RP',
            })}
          </ButtonLink>
        </li>
        <li>
          <ButtonLink target="/projets">
            {intl.formatMessage({
              defaultMessage: 'Projects',
              description: 'HomePage: link to projects',
              id: 'N44SOc',
            })}
          </ButtonLink>
        </li>
      </ul>
    );
  };

  const ColdarkRepos = () => {
    return (
      <ul className={styles['links-list']}>
        <li>
          <ButtonLink
            target="https://github.com/ArmandPhilippot/coldark"
            isExternal={true}
          >
            Github
          </ButtonLink>
        </li>
        <li>
          <ButtonLink
            target="https://gitlab.com/ArmandPhilippot/coldark"
            isExternal={true}
          >
            Gitlab
          </ButtonLink>
        </li>
      </ul>
    );
  };

  const LibreLinks = () => {
    return (
      <ul className={styles['links-list']}>
        <li>
          <ButtonLink target="/thematique/libre">
            {intl.formatMessage({
              defaultMessage: 'Free',
              description: 'HomePage: link to free thematic',
              id: 'w8GrOf',
            })}
          </ButtonLink>
        </li>
        <li>
          <ButtonLink target="/thematique/linux">
            {intl.formatMessage({
              defaultMessage: 'Linux',
              description: 'HomePage: link to Linux thematic',
              id: 'jASD7k',
            })}
          </ButtonLink>
        </li>
      </ul>
    );
  };

  const ShaarliLink = () => {
    return (
      <ul className={styles['links-list']}>
        <li>
          <ButtonLink target="https://shaarli.armandphilippot.com/">
            {intl.formatMessage({
              defaultMessage: 'Shaarli',
              description: 'HomePage: link to Shaarli',
              id: 'i5L19t',
            })}
          </ButtonLink>
        </li>
      </ul>
    );
  };

  const MoreLinks = () => {
    return (
      <ul className={styles['links-list']}>
        <li>
          <ButtonLink target="/contact">
            <ContactIcon />
            {intl.formatMessage({
              defaultMessage: 'Contact me',
              description: 'HomePage: contact button text',
              id: 'sO/Iwj',
            })}
          </ButtonLink>
        </li>
        <li>
          <ButtonLink target="/feed">
            <FeedIcon className={styles['icon--feed']} />
            {intl.formatMessage({
              defaultMessage: 'Subscribe',
              description: 'HomePage: RSS feed subscription text',
              id: 'T4YA64',
            })}
          </ButtonLink>
        </li>
      </ul>
    );
  };

  const getRecentPosts = () => {
    return <RecentPosts posts={recentPosts} />;
  };

  const components: NestedMDXComponents = {
    CodingLinks: CodingLinks,
    ColdarkRepos: ColdarkRepos,
    Image: (props: ResponsiveImageProps) => ResponsiveImage({ ...props }),
    LibreLinks: LibreLinks,
    MoreLinks: MoreLinks,
    RecentPosts: getRecentPosts,
    ShaarliLink: ShaarliLink,
  };

  const pageTitle = intl.formatMessage(
    {
      defaultMessage: '{websiteName} | Front-end developer: WordPress/React',
      description: 'HomePage: SEO - Page title',
      id: 'PXp2hv',
    },
    { websiteName: settings.name }
  );
  const pageDescription = intl.formatMessage(
    {
      defaultMessage:
        '{websiteName} is a front-end developer located in France. He codes and he writes mostly about web development and open-source.',
      description: 'HomePage: SEO - Meta description',
      id: 'tMuNTy',
    },
    { websiteName: settings.name }
  );

  const webpageSchema: WebPage = {
    '@id': `${settings.url}/#home`,
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    author: { '@id': `${settings.url}/#branding` },
    creator: { '@id': `${settings.url}/#branding` },
    editor: { '@id': `${settings.url}/#branding` },
    inLanguage: settings.locales.defaultLocale,
    license: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr',
    reviewedBy: { '@id': `${settings.url}/#branding` },
    url: `${settings.url}`,
  };

  const schemaJsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [webpageSchema],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${settings.url}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>
      <Script
        id="schema-homepage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <div id="home">
        <HomePageContent components={components} />
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout isHome={true}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { locale } = context;
  const translation = await loadTranslation(locale);
  const recentPosts = await getPublishedPosts({ first: 3 });

  return {
    props: {
      recentPosts,
      translation,
    },
  };
};

export default Home;

import { Button } from '@components/Buttons';
import { getLayout } from '@components/Layouts/Layout';
import Pagination from '@components/Pagination/Pagination';
import PaginationCursor from '@components/PaginationCursor/PaginationCursor';
import PostHeader from '@components/PostHeader/PostHeader';
import PostsList from '@components/PostsList/PostsList';
import Sidebar from '@components/Sidebar/Sidebar';
import Spinner from '@components/Spinner/Spinner';
import { ThematicsList, TopicsList } from '@components/Widgets';
import {
  getAllThematics,
  getAllTopics,
  getPostsTotal,
  getPublishedPosts,
} from '@services/graphql/queries';
import styles from '@styles/pages/Page.module.scss';
import { NextPageWithLayout } from '@ts/types/app';
import { BlogPageProps, PostsList as PostsListData } from '@ts/types/blog';
import { settings } from '@utils/config';
import { getIntlInstance, loadTranslation } from '@utils/helpers/i18n';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Blog as BlogSchema, Graph, WebPage } from 'schema-dts';
import useSWRInfinite from 'swr/infinite';

const Blog: NextPageWithLayout<BlogPageProps> = ({
  allThematics,
  allTopics,
  posts,
  totalPosts,
}) => {
  const intl = useIntl();
  const lastPostRef = useRef<HTMLSpanElement>(null);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== undefined) setIsMounted(true);
  }, []);

  const getKey = (pageIndex: number, previousData: PostsListData) => {
    if (previousData && !previousData.posts) return null;

    return pageIndex === 0
      ? { first: settings.postsPerPage }
      : {
          first: settings.postsPerPage,
          after: previousData.pageInfo.endCursor,
        };
  };

  const { data, error, size, setSize } = useSWRInfinite(
    getKey,
    getPublishedPosts,
    { fallbackData: [posts] }
  );
  const [totalPostsCount, setTotalPostsCount] = useState<number>(totalPosts);

  useEffect(() => {
    if (data) setTotalPostsCount(data[0].pageInfo.total);
  }, [data]);

  const [loadedPostsCount, setLoadedPostsCount] = useState<number>(
    settings.postsPerPage
  );

  useEffect(() => {
    if (data && data.length > 0) {
      const newCount =
        settings.postsPerPage +
        data[0].pageInfo.total -
        data[data.length - 1].pageInfo.total;
      setLoadedPostsCount(newCount);
    }
  }, [data]);

  const isLoadingInitialData = !data && !error;
  const isLoadingMore: boolean =
    isLoadingInitialData ||
    (size > 0 && data !== undefined && typeof data[size - 1] === 'undefined');

  const hasNextPage = data && data[data.length - 1].pageInfo.hasNextPage;

  const loadMorePosts = () => {
    if (lastPostRef.current) {
      lastPostRef.current.focus();
    }
    setSize(size + 1);
  };

  const getPostsList = () => {
    if (error)
      return intl.formatMessage({
        defaultMessage: 'Failed to load.',
        description: 'BlogPage: failed to load text',
        id: 'C/XGkH',
      });
    if (!data) return <Spinner />;

    return <PostsList ref={lastPostRef} data={data} showYears={true} />;
  };

  const pageTitle = intl.formatMessage(
    {
      defaultMessage: 'Blog: development, open source - {websiteName}',
      description: 'BlogPage: SEO - Page title',
      id: '+Y+tLK',
    },
    { websiteName: settings.name }
  );
  const pageDescription = intl.formatMessage(
    {
      defaultMessage:
        "Discover {websiteName}'s writings. He talks about web development, Linux and open source mostly.",
      description: 'BlogPage: SEO - Meta description',
      id: '18h/t0',
    },
    { websiteName: settings.name }
  );
  const pageUrl = `${settings.url}${router.asPath}`;

  const webpageSchema: WebPage = {
    '@id': `${pageUrl}`,
    '@type': 'WebPage',
    breadcrumb: { '@id': `${settings.url}/#breadcrumb` },
    name: pageTitle,
    description: pageDescription,
    inLanguage: settings.locales.defaultLocale,
    reviewedBy: { '@id': `${settings.url}/#branding` },
    url: `${settings.url}`,
    isPartOf: {
      '@id': `${settings.url}`,
    },
  };

  const blogSchema: BlogSchema = {
    '@id': `${settings.url}/#blog`,
    '@type': 'Blog',
    author: { '@id': `${settings.url}/#branding` },
    creator: { '@id': `${settings.url}/#branding` },
    editor: { '@id': `${settings.url}/#branding` },
    inLanguage: settings.locales.defaultLocale,
    license: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr',
    mainEntityOfPage: { '@id': `${pageUrl}` },
  };

  const schemaJsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [webpageSchema, blogSchema],
  };

  const title = intl.formatMessage({
    defaultMessage: 'Blog',
    description: 'BlogPage: page title',
    id: '7TbbIk',
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={`${pageUrl}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />
      </Head>
      <Script
        id="schema-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <article
        id="blog"
        className={`${styles.article} ${styles['article--no-comments']}`}
      >
        <PostHeader title={title} meta={{ results: totalPostsCount }} />
        <div className={styles.body}>
          {getPostsList()}
          {hasNextPage &&
            (isMounted ? (
              <>
                <PaginationCursor
                  current={loadedPostsCount}
                  total={totalPostsCount}
                />
                <Button
                  isDisabled={isLoadingMore}
                  clickHandler={loadMorePosts}
                  position="center"
                  spacing={true}
                >
                  {intl.formatMessage({
                    defaultMessage: 'Load more?',
                    description: 'BlogPage: load more text',
                    id: 'Kqq2cm',
                  })}
                </Button>
              </>
            ) : (
              <Pagination baseUrl="/blog" total={totalPostsCount} />
            ))}
        </div>
        <Sidebar
          position="right"
          title={intl.formatMessage({
            defaultMessage: 'Filter by:',
            description: 'BlogPage: sidebar title',
            id: 'KERk7L',
          })}
        >
          <ThematicsList
            initialData={allThematics}
            title={intl.formatMessage({
              defaultMessage: 'Thematics',
              description: 'BlogPage: thematics list widget title',
              id: 'HriY57',
            })}
          />
          <TopicsList
            initialData={allTopics}
            title={intl.formatMessage({
              defaultMessage: 'Topics',
              description: 'BlogPage: topics list widget title',
              id: '2D9tB5',
            })}
          />
        </Sidebar>
      </article>
    </>
  );
};

Blog.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const intl = await getIntlInstance();
  const breadcrumbTitle = intl.formatMessage({
    defaultMessage: 'Blog',
    description: 'BlogPage: breadcrumb item',
    id: 'R0eDmw',
  });
  const firstPosts = await getPublishedPosts({ first: settings.postsPerPage });
  const totalPosts = await getPostsTotal();
  const allThematics = await getAllThematics();
  const allTopics = await getAllTopics();
  const { locale } = context;
  const translation = await loadTranslation(locale);

  return {
    props: {
      allThematics,
      allTopics,
      breadcrumbTitle,
      locale,
      posts: firstPosts,
      totalPosts,
      translation,
    },
  };
};

export default Blog;

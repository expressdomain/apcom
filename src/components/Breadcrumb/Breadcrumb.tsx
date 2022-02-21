import { settings } from '@utils/config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useIntl } from 'react-intl';
import { BreadcrumbList, WithContext } from 'schema-dts';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ pageTitle }: { pageTitle: string }) => {
  const intl = useIntl();
  const router = useRouter();

  const isHome = router.pathname === '/';
  const isArticle = router.pathname.includes('/article/');
  const isProject = router.pathname.includes('/projet/');
  const isSubject = router.pathname.includes('/sujet/');
  const isThematic = router.pathname.includes('/thematique/');

  const getItems = () => {
    return (
      <>
        <li className={styles.item}>
          <Link href="/">
            <a>
              {intl.formatMessage({
                defaultMessage: 'Home',
                description: 'Breadcrumb: Home item',
              })}
            </a>
          </Link>
        </li>
        {(isArticle || isThematic || isSubject) && (
          <>
            <li className={styles.item}>
              <Link href="/blog">
                <a>
                  {intl.formatMessage({
                    defaultMessage: 'Blog',
                    description: 'Breadcrumb: Blog item',
                  })}
                </a>
              </Link>
            </li>
          </>
        )}
        {isProject && (
          <>
            <li className={styles.item}>
              <Link href="/projets">
                <a>
                  {intl.formatMessage({
                    defaultMessage: 'Projects',
                    description: 'Breadcrumb: Projects item',
                  })}
                </a>
              </Link>
            </li>
          </>
        )}
        <li className="screen-reader-text">{pageTitle}</li>
      </>
    );
  };

  const getElementsSchema = () => {
    const items = [];
    const homepage: BreadcrumbList['itemListElement'] = {
      '@type': 'ListItem',
      position: 1,
      name: intl.formatMessage({
        defaultMessage: 'Home',
        description: 'Breadcrumb: Home item',
      }),
      item: settings.url,
    };

    items.push(homepage);

    if (isArticle || isThematic || isSubject) {
      const blog: BreadcrumbList['itemListElement'] = {
        '@type': 'ListItem',
        position: 2,
        name: intl.formatMessage({
          defaultMessage: 'Blog',
          description: 'Breadcrumb: Blog item',
        }),
        item: `${settings.url}/blog`,
      };

      items.push(blog);
    }

    if (isProject) {
      const blog: BreadcrumbList['itemListElement'] = {
        '@type': 'ListItem',
        position: 2,
        name: intl.formatMessage({
          defaultMessage: 'Projects',
          description: 'Breadcrumb: Projects item',
        }),
        item: `${settings.url}/projets`,
      };

      items.push(blog);
    }

    const currentPage: BreadcrumbList['itemListElement'] = {
      '@type': 'ListItem',
      position: items.length + 1,
      name: pageTitle,
      item: `${settings.url}${router.asPath}`,
    };

    items.push(currentPage);

    return items;
  };

  const schemaJsonLd: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${settings.url}/#breadcrumb`,
    itemListElement: getElementsSchema(),
  };

  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      {!isHome && (
        <nav id="breadcrumb" className={styles.wrapper}>
          <span className="screen-reader-text">
            {intl.formatMessage({
              defaultMessage: 'You are here:',
              description: 'Breadcrumb: You are here prefix',
            })}
          </span>
          <ol className={styles.list}>{getItems()}</ol>
        </nav>
      )}
    </>
  );
};

export default Breadcrumb;

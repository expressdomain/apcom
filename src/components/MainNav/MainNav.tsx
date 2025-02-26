import {
  BlogIcon,
  ContactIcon,
  CVIcon,
  HamburgerIcon,
  HomeIcon,
  ProjectsIcon,
} from '@components/Icons';
import { NavItem } from '@ts/types/nav';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ForwardedRef, forwardRef, SetStateAction } from 'react';
import { useIntl } from 'react-intl';
import styles from './MainNav.module.scss';

const MainNav = (
  {
    isOpened,
    setIsOpened,
  }: {
    isOpened: boolean;
    setIsOpened: (value: SetStateAction<boolean>) => void;
  },
  ref: ForwardedRef<HTMLDivElement>
) => {
  const intl = useIntl();
  const router = useRouter();

  const mainNavConfig: NavItem[] = [
    {
      id: 'home',
      name: intl.formatMessage({
        defaultMessage: 'Home',
        description: 'MainNav: home link',
        id: 'ZJMNRW',
      }),
      slug: '/',
    },
    {
      id: 'blog',
      name: intl.formatMessage({
        defaultMessage: 'Blog',
        description: 'MainNav: blog link',
        id: 'zPJifH',
      }),
      slug: '/blog',
    },
    {
      id: 'projects',
      name: intl.formatMessage({
        defaultMessage: 'Projects',
        description: 'MainNav: projects link',
        id: 'akSutM',
      }),
      slug: '/projets',
    },
    {
      id: 'cv',
      name: intl.formatMessage({
        defaultMessage: 'Resume',
        description: 'MainNav: resume link',
        id: 'jpv+Nz',
      }),
      slug: '/cv',
    },
    {
      id: 'contact',
      name: intl.formatMessage({
        defaultMessage: 'Contact',
        description: 'MainNav: contact link',
        id: 'c2NtPj',
      }),
      slug: '/contact',
    },
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case 'home':
        return <HomeIcon />;
      case 'blog':
        return <BlogIcon />;
      case 'contact':
        return <ContactIcon />;
      case 'cv':
        return <CVIcon />;
      case 'projects':
        return <ProjectsIcon />;
      default:
        break;
    }
  };

  const navItems = mainNavConfig.map((item) => {
    const currentClass = router.asPath === item.slug ? styles.current : '';

    return (
      <li key={item.id}>
        <Link href={item.slug}>
          <a className={`${styles.link} ${currentClass}`}>
            {getIcon(item.id)}
            <span>{item.name}</span>
          </a>
        </Link>
      </li>
    );
  });

  return (
    <div id="main-nav" ref={ref} className={styles.wrapper}>
      <input
        type="checkbox"
        name="main-nav__checkbox"
        id="main-nav__checkbox"
        aria-labelledby="main-nav-toggle"
        className={styles.checkbox}
        checked={isOpened}
        onChange={() => setIsOpened(!isOpened)}
        autoComplete="off"
      />
      <label
        htmlFor="main-nav__checkbox"
        id="main-nav-toggle"
        className={styles.label}
      >
        <HamburgerIcon isActive={isOpened} />
        <span className="screen-reader-text">
          {isOpened
            ? intl.formatMessage({
                defaultMessage: 'Close menu',
                description: 'MainNav: close button',
                id: 'dE8xxV',
              })
            : intl.formatMessage({
                defaultMessage: 'Open menu',
                description: 'MainNav: open button',
                id: 'azc1GT',
              })}
        </span>
      </label>
      <nav
        className={styles.nav}
        aria-label={intl.formatMessage({
          defaultMessage: 'Primary',
          description: 'MainNav: aria-label',
          id: 'H7C5Bk',
        })}
      >
        <ul className={styles.list}>{navItems}</ul>
      </nav>
    </div>
  );
};

export default forwardRef(MainNav);

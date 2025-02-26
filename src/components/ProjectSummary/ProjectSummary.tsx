import GithubIcon from '@assets/images/social-media/github.svg';
import GitlabIcon from '@assets/images/social-media/gitlab.svg';
import { ProjectMeta } from '@ts/types/app';
import { settings } from '@utils/config';
import { getFormattedDate } from '@utils/helpers/format';
import { slugify } from '@utils/helpers/slugify';
import useGithubApi from '@utils/hooks/useGithubApi';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import styles from './ProjectSummary.module.scss';

const ProjectSummary = ({
  id,
  meta,
}: {
  id: string;
  title: string;
  meta: ProjectMeta;
}) => {
  const { hasCover, license, repos, technologies } = meta;
  const intl = useIntl();
  const router = useRouter();
  const locale = router.locale ? router.locale : settings.locales.defaultLocale;
  const { data } = useGithubApi(repos?.github ? repos.github : '');

  return (
    <div className={styles.wrapper}>
      {hasCover && (
        <div className={styles.cover}>
          <Image
            src={`/projects/${id}.jpg`}
            alt={intl.formatMessage({
              defaultMessage: '{title} preview',
              description: 'ProjectSummary: cover alt text',
              id: 'mh7tGg',
            })}
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
      <dl className={styles.info}>
        {data && (
          <div className={styles.info__item}>
            <dt>
              {intl.formatMessage({
                defaultMessage: 'Created on:',
                description: 'ProjectSummary: creation date label',
                id: 'CWi0go',
              })}
            </dt>
            <dd>
              <time dateTime={data.created_at}>
                {getFormattedDate(data.created_at, locale)}
              </time>
            </dd>
          </div>
        )}
        {data && (
          <div className={styles.info__item}>
            <dt>
              {intl.formatMessage({
                defaultMessage: 'Last updated on:',
                description: 'ProjectSummary: update date label',
                id: 'vJ+QDV',
              })}
            </dt>
            <dd>
              <time dateTime={data.updated_at}>
                {getFormattedDate(data.updated_at, locale)}
              </time>
            </dd>
          </div>
        )}
        <div className={styles.info__item}>
          <dt>
            {intl.formatMessage({
              defaultMessage: 'License:',
              description: 'ProjectSummary: license label',
              id: 'hKagVG',
            })}
          </dt>
          <dd>{license}</dd>
        </div>
        {technologies && (
          <div className={styles.info__item}>
            <dt>
              {intl.formatMessage(
                {
                  defaultMessage:
                    '{count, plural, =0 {Technologies:} one {Technology:} other {Technologies:}}',
                  description: 'ProjectSummary: technologies list label',
                  id: 'enwhNm',
                },
                { count: technologies.length }
              )}
            </dt>
            {technologies.map((techno) => (
              <dd
                key={slugify(techno)}
                className={`${styles.techno} ${styles['inline-data']}`}
              >
                {techno}
              </dd>
            ))}
          </div>
        )}
        {repos && (
          <div className={styles.info__item}>
            <dt>
              {intl.formatMessage(
                {
                  defaultMessage:
                    '{count, plural, =0 {Repositories:} one {Repository:} other {Repositories:}}',
                  description: 'ProjectSummary: repositories list label',
                  id: 'OTTv+m',
                },
                { count: Object.keys(repos).length }
              )}
            </dt>
            {repos.github && (
              <dd className={styles['inline-data']}>
                <a
                  href={`https://github.com/${repos.github}`}
                  className={styles.repo}
                >
                  <GithubIcon />
                  <span className="screen-reader-text">Github</span>
                </a>
              </dd>
            )}
            {repos.gitlab && (
              <dd className={styles['inline-data']}>
                <a
                  href={`https://gitlab.com/${repos.gitlab}`}
                  className={styles.repo}
                >
                  <GitlabIcon />
                  <span className="screen-reader-text">Gitlab</span>
                </a>
              </dd>
            )}
          </div>
        )}
        {data && repos && (
          <div>
            <dt>
              {intl.formatMessage({
                defaultMessage: 'Popularity:',
                description: 'ProjectSummary: popularity label',
                id: 'vgMk0q',
              })}
            </dt>
            {repos.github && (
              <dd>
                ⭐&nbsp;
                <a href={`https://github.com/${repos.github}/stargazers`}>
                  {intl.formatMessage(
                    {
                      defaultMessage:
                        '{starsCount, plural, =0 {0 stars on Github} one {# star on Github} other {# stars on Github}}',
                      description: 'ProjectSummary: technologies list label',
                      id: 'aA3hOT',
                    },
                    { starsCount: data.stargazers_count }
                  )}
                </a>
              </dd>
            )}
          </div>
        )}
      </dl>
    </div>
  );
};

export default ProjectSummary;

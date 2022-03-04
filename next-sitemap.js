/** @type {import('next-sitemap').IConfig} */

const isStaging = process.env.APP_ENV === 'staging';

module.exports = {
  siteUrl: isStaging
    ? process.env.NEXT_PUBLIC_STAGING_APP_URL
    : process.env.NEXT_PUBLIC_APP_URL,
  generateRobotsTxt: true,
  changefreq: null,
  priority: null,
  exclude: ['/feed.xml', '/feed.json', '/atom.xml'],
};

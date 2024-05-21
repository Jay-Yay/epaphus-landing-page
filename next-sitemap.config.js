/** @type {import('next-sitemap').IConfig} */

const siteURL = 'https://www.epaphus.co.kr';

module.exports = {
    siteUrl: 'https://www.epaphus.co.kr',
    generateRobotsTxt: true,
    exclude: ["/404"],
    robotsTxtOptions: {
        policies: [
            {
              userAgent: "*",
              disallow: ["/404"],
            },
            { 
                userAgent: "*",
                allow: "/"
            },
        ],
    },
    additionalSitemaps: [
        `${siteURL}sitemap.xml`,
        `${siteURL}server-sitemap.xml`,
    ],
}
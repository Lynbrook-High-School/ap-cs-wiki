/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Lynbrook AP CS Wiki',
  author: 'Lynbrook CS',
  headerTitle: 'AP CS Wiki',
  description: 'Articles covering various AP CS topics',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://Lynbrook-High-School.github.io/ap-cs-wiki',
  siteRepo: 'https://github.com/Lynbrook-High-School/ap-cs-wiki', 
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  locale: 'en-US',

  // set to true if you want a navbar fixed to the top
  stickyNav: false,

  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
  },
  
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },

  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata

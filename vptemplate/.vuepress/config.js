module.exports = {
  title: 'Notes',
  description: 'General notes',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
        ],
      },
    ],
    sidebar: {
      '/guide/': ['', 'newpage', 'another'],
    },
  },
};

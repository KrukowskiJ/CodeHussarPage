module.exports = {
  /* Your site config here */
  plugins: [
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Code Hussar',
        short_name: 'Code Hussar',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/favicon.png',
      },
    }

   // other plugins goes here
  ],
}
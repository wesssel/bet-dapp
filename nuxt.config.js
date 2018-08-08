const dummy = true

module.exports = {
  mode: 'spa',
  srcDir: 'src/',
  env: { dummy },
  head: {
    title: 'Betting Dapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Decentralizer Application for betting' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
    ],
  },
  loading: { color: '#3B8070' },
  plugins: [
    '~/plugins/web3.js',
  ],
  build: {
    vendor: ['web3'],
    postcss: {
      plugins: {
        'postcss-custom-properties': false,
      },
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}

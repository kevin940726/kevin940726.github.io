module.exports = config => [
  require('stylelint')(),
  require('postcss-cssnext')({
    features: {
      customProperties: {
        variables: {
          maxWidth: '60rem',
          colorPrimaryDark: '#107491',
          colorPrimary: '#007acc',
          colorSecondaryDark: '#22846C',
          colorSecondary: '#FF5722',
          colorNeutralDark: '#111',
          colorNeutral: '#8C8D91',
          colorNeutralLight: '#FBFCFC',
          colorText: '#555',
          colorInfo: '#3273dc'
        }
      },
      customMedia: {
        extensions: {
          '--mobile': '(max-width: 767px)'
        }
      }
    }
  }),
  require('postcss-reporter')(),
  ...!config.production ? [
    require('postcss-browser-reporter')()
  ] : []
];

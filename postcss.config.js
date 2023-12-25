module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: { flexbox: 'no-2009' },
        stage: 3,
        features: { 'custom-properties': false },
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './components/**/*.{js,jsx,ts,tsx}',
          './pages/**/*.{js,jsx,ts,tsx}',
          './node_modules/swiper/**/*.{js,jsx,ts,tsx}',
          './node_modules/react-toastify/**/*.{js,jsx,ts,tsx}',
        ],
        css: ['@fancyapps/ui/dist/fancybox/fancybox.css'], // css
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ['html', 'body'],
          deep: [/^modal-/, /^google-map/, /^map-/],
        },
      },
    ],
  ],
};

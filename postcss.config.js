const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.vue'],

  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: {
    tailwindcss: './tailwind.config.js',
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  }
};

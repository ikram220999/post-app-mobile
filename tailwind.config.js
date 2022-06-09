module.exports = {
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"ui-monospace"', 'sans-serif']
    }
  },
  plugins: [],
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: '#47B7FE',
        secondaryColor: '#6651D4',
        thirdColor: '#FBAA9E',
        dangerColor: '#EB6B6B',
        warningColor: '#F3BA2F',
        successColor: '#4AC8AA',
        surfaceColor: '#283763',
        backgroundColor: '#334271',
        overlineColor: '#D3D6E8',
        titleColor: '#FFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

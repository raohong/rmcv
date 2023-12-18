export const grayColors = {
  gray100: '#f7f8fa',
  gray200: '#f2f3f5',
  gray300: '#ebedf0',
  gray400: '#dcdee0',
  gray500: '#c8c9cc',
  gray600: '#969799',
  gray700: '#646566',
  gray800: '#323233',
};

const textColors = {
  primary: grayColors.gray800,
  secondary: grayColors.gray600,
  third: grayColors.gray500,
  link: '#576b95',
};

const backgroundColors = {
  default: grayColors.gray100,
  light: '#fff',
};

const gradientColors = {
  red: 'linear-gradient(to right, #ff6034, #ee0a24)',
  orange: 'linear-gradient(to right, #ffd01e, #ff8917)',
};

const themeColors = {
  red: '#ee0a24',
  blue: '#1989fa',
  orange: '#ff976a',
  orangeDark: '#ed6a0c',
  orangeLight: '#fffbe8',
  green: '#07c160',
};

export const palette = {
  black: '#000',
  white: '#fff',
  ...grayColors,
  ...themeColors,
  primary: themeColors.blue,
  success: themeColors.green,
  danger: themeColors.red,
  waning: themeColors.orange,
  text: textColors,
  background: backgroundColors,
  border: grayColors.gray300,
  active: grayColors.gray200,
  gradient: gradientColors,
};

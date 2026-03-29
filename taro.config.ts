// Taro framework configuration
export default {
  projectName: 'shaoguan-campus-service',
  date: '2026-03-29',
  designWidth: 750,
  deviceRatio: {
    '640': 2,
    '750': 1,
    '828': 1,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    '@tarojs/plugin-scss',
  ],
  defineConstants: {},
  framework: 'react',
  compiler: 'tt',
  // Add more configuration as needed
};
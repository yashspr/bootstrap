/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-undef */
module.exports = {
  plugins: [
    require("postcss-rem-to-pixel")({
      rootValue: 16,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minRemValue: 0,
    }),
  ],
};

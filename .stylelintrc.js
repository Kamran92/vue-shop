module.exports = {
  extends: [
    "stylelint-config-rational-order",
    "stylelint-config-recommended-vue",
  ],
  plugins: ["stylelint-config-rational-order/plugin"],
  rules: {
    "plugin/rational-order": [
      true,
      {
        "empty-line-between-groups": true,
      },
    ],
  },
  ignoreFiles: [
    "./src/assets/styles/reset.css",
    "./src/assets/styles/typography.css",
  ],
};

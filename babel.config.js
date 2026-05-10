module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/features/components",
            "@Screens": "./src/features/Screens",
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};

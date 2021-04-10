# limit-size-webpack-plugin

> A webpack plugin to detect your file size.

[![npm Version](https://img.shields.io/npm/v/limit-size-webpack-plugin.svg)](https://www.npmjs.com/package/limit-size-webpack-plugin)
[![npm](https://img.shields.io/npm/dm/limit-size-webpack-plugin.svg)](https://www.npmjs.com/package/limit-size-webpack-plugin)
[![npm License](https://img.shields.io/npm/l/limit-size-webpack-plugin.svg)](https://www.npmjs.com/package/limit-size-webpack-plugin)

## Install

```bash
$ npm i --save-dev limit-size-webpack-plugin
```

## Usage

- Add the `limit-size-webpack-plugin` to your `webpack.config.js`:

```diff
const path = require("path");
+ const { LimitSizePlugin } = require("limit-size-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
+    new LimitSizePlugin([
+      {
+        path: path.resolve(__dirname, "dist", "bundle.js"),
+        limit: "200 Kb",
+        gzip: true,
+      },
+      {
+        path: path.resolve(__dirname, "dist", "bundle.js"),
+        limit: "50 b",
+      },
+    ]),
  ],
};
```

## License

MIT@[jared](https://github.com/joriewong).

# Prototype website using TTVC metric

This project has a simple web page that uses a [TTVC metric library](https://github.com/dropbox/ttvc).

## Installing dependencies

Use npm to install dependencies

```
npm install
```

## Building the code

Run webpack build to generate files in `dist/` folder.

```
npm run build
```

### Inline vs. external resource

You can modify [webpack.config.js](./webpack.config.js#L18) file and uncomment `new HtmlInlineScriptPlugin()` line to inline the code in HTML rather than generating a standalone file.

Standalone file can be useful for copying into your application as is (it includes your code from `src/index.js` and the TTVC library itself). Feel free to experiment with loading it `asunc`, `defer`ring it or inlining into your codebase to see what is the best way.

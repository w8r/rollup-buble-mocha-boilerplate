# Rollup + Buble + Mocha boilerplate

Couldn't find the right (purist) combination, which would allow comfortably author
Javascript libraries without the overhead and slowness of Babel, but with
the best parts of ES6, with mocha, but without karma, yet still be able to write
tests in ES6 and only bundle them invisibly. Also no build systems but npm scripts.

```
git clone https://github.com/w8r/rollup-buble-mocha-boilerplate.git your-project
cd jour-project
rm -rf .git
git init
```

## Scripts

* **npm run build** to run eslint and build the es6 and es5 umd versions of your lib into `dist`
* **npm test** to run tests
* **npm run test:watch** to watch `src` and `tests` and re-run tests
* **npm start** add whatever you need there

## ESLint

I added airbnb standard as quite a strict one, from which you can go down to
whatever suits you.

## License

MIT

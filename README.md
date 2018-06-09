# lwechurch.com website

This is the source code for the static lwechurch.com website. It is written using the Hugo static site generator.

## Development quick start

Have Node.js installed.

```
yarn install
yarn start
```

### Gotchas

Apparently Webpack will continue to run if you CTRL+C out of dev mode; you can manually kill it by running `ps aux | grep webpack` and then `kill -9 <PID>`.

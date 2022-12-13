/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*"],
  devServerPort: 8002,
  serverDependenciesToBundle: [
    "pretty-bytes",
    "marked",
    "@cfworker/json-schema",
    "@nangohq/pizzly-frontend",
    "@nangohq/pizzly-node",
    "axios",
  ],
  watchPaths: async () => {
    return ["../../packages/internal-nobuild/src/**/*"];
  },
};

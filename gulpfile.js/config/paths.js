const srcPaths = {
    scss: "./src/scss/main.scss",
    js: "./src/js/**/*.js",
    configFiles: './src/config/**/*.*',
    layoutFiles: './src/layout/**/*.*',
    localesFiles: './src/locales/**/*.*',
    sectionFiles: './src/sections/**/*.*',
    snippetsFiles: './src/snippets/**/*.*',
    templatesFiles: ['./src/templates/**/*.*', './src/templates/customers' ],
    customersFiles: './src/templates/customers/**/*.*',
    assets: './src/assets/**/*.*'
}
const distPaths = {
    distAll: './dist/assets',
    scss: "./dist/assets",
    js: "./dist/assets",
    configFiles: './dist/config',
    layoutFiles: './dist/layout',
    localesFiles: './dist/locales',
    sectionFiles: './dist/sections',
    snippetsFiles: './dist/snippets',
    templatesFiles: './dist/templates',
    customersFiles: './dist/templates/customers',
    assets: './dist/assets/'
}

module.exports = {
    srcPaths,
    distPaths
  }
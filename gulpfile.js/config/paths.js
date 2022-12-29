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
    distAll: './theme/assets',
    scss: "./theme/assets",
    js: "./theme/assets",
    configFiles: './theme/config',
    layoutFiles: './theme/layout',
    localesFiles: './theme/locales',
    sectionFiles: './theme/sections',
    snippetsFiles: './theme/snippets',
    templatesFiles: './theme/templates',
    customersFiles: './theme/templates/customers',
    assets: './theme/assets/'
}

module.exports = {
    srcPaths,
    distPaths
  }
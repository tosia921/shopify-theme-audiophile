function copyConfigFiles() {
  const { src, dest } = require('gulp');
  const Config = require('../config/paths');

  return src(Config.srcPaths.configFiles).pipe(
    dest(Config.distPaths.configFiles)
  );
}

function copyLayoutFiles() {
  const { src, dest } = require('gulp');
  const Config = require('../config/paths');

  return src(Config.srcPaths.layoutFiles).pipe(
    dest(Config.distPaths.layoutFiles)
  );
}
function copyLocalesFiles() {
  const { src, dest } = require('gulp');
  const Config = require('../config/paths');

  return src(Config.srcPaths.localesFiles).pipe(
    dest(Config.distPaths.localesFiles)
  );
}
function copySectionFiles() {
  const { src, dest } = require('gulp');
  const Config = require('../config/paths');

  return src(Config.srcPaths.sectionFiles).pipe(
    dest(Config.distPaths.sectionFiles)
  );
}
function copySnippetsFiles() {
  const { src, dest } = require('gulp');
  const Config = require('../config/paths');

  return src(Config.srcPaths.snippetsFiles).pipe(
    dest(Config.distPaths.snippetsFiles)
  );
}
function copyAssetsFiles() {
  const { src, dest } = require('gulp');
  const Config = require('../config/paths');

  return src(Config.srcPaths.assets).pipe(dest(Config.distPaths.assets));
}
function copyTemplatesFiles() {
  const { src, dest } = require('gulp');
  const Config = require('../config/paths');

  return src(Config.srcPaths.templatesFiles).pipe(
    dest(Config.distPaths.templatesFiles)
  );
}
function copyCustomersFiles() {
  const { src, dest } = require('gulp');
  const Config = require('../config/paths');

  return src(Config.srcPaths.customersFiles).pipe(
    dest(Config.distPaths.customersFiles)
  );
}

exports.copyConfigFiles = copyConfigFiles;
exports.copyLayoutFiles = copyLayoutFiles;
exports.copyLocalesFiles = copyLocalesFiles;
exports.copySectionFiles = copySectionFiles;
exports.copySnippetsFiles = copySnippetsFiles;
exports.copyTemplatesFiles = copyTemplatesFiles;
exports.copyCustomersFiles = copyCustomersFiles;
exports.copyAssetsFiles = copyAssetsFiles;

const gulp = require('gulp');

// INDIVIDUAL TASKS
const Config = require('./config/paths');
const scssTask = require('./tasks/scssTask').scssTask;
const jsTask = require('./tasks/jsTask').jsTask;
const cleanTask = require('./tasks/cleanTask').cleanTask;

const clearCacheTask = require('./tasks/clearCacheTask').clearCacheTask;

const copyConfigFiles = require('./tasks/fileTasks').copyConfigFiles;
const copyCustomersFiles = require('./tasks/fileTasks').copyCustomersFiles;
const copyLayoutFiles = require('./tasks/fileTasks').copyLayoutFiles;
const copyLocalesFiles = require('./tasks/fileTasks').copyLocalesFiles;
const copySectionFiles = require('./tasks/fileTasks').copySectionFiles;
const copySnippetsFiles = require('./tasks/fileTasks').copySnippetsFiles;
const copyTemplatesFiles = require('./tasks/fileTasks').copyTemplatesFiles;
const copyAssetsFiles = require('./tasks/fileTasks').copyAssetsFiles;

// BUILD TASKS
const build = gulp.series(
  // cleanTask,
  // copyConfigFiles,
  // copyCustomersFiles,
  // copyLayoutFiles,
  // copyLocalesFiles,
  // copySectionFiles,
  // copySnippetsFiles,
  // copyTemplatesFiles,
  // copyAssetsFiles,
  scssTask,
  jsTask
);


// PRODUCTION TASKS
const production = gulp.series(
  // cleanTask,
  clearCacheTask,

  gulp.parallel(
    scssTask,
    jsTask
    // copyConfigFiles,
    // copyCustomersFiles,
    // copyLayoutFiles,
    // copyLocalesFiles,
    // copySectionFiles,
    // copySnippetsFiles,
    // copyTemplatesFiles,
    // copyAssetsFiles
  )
);

// WATCH TASKS
const watch = () => {
  build();

  gulp.watch('./src/scss/**/*', scssTask);
  gulp.watch(Config.srcPaths.js, jsTask);
  // gulp.watch(Config.srcPaths.configFiles, copy);
  // gulp.watch(Config.srcPaths.customersFiles, copy);
  // gulp.watch(Config.srcPaths.layoutFiles, copy);
  // gulp.watch(Config.srcPaths.sectionFiles, copy);
  // gulp.watch(Config.srcPaths.snippetsFiles, copy);
  // gulp.watch(Config.srcPaths.templatesFiles, copy);
  // gulp.watch(Config.srcPaths.assets, copy);

  // gulp.watch([Config.srcPaths.configFiles, Config.srcPaths.sectionFiles], copy);
};

// EXPORTED TASKS
exports.scssTask = scssTask;
exports.jsTask = jsTask;
exports.cleanTask = cleanTask;
exports.clearCacheTask = clearCacheTask;

// Build, Production and Default tasks
exports.build = build;
exports.production = production;
exports.default = watch;

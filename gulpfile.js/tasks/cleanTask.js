// import {deleteAsync} from 'del';

async function cleanTask() {
    const Config = require("../config/paths");
    // const del = require('del');
    const deleteAsync = require('del');
    return await deleteAsync([Config.distPaths.distAll]);
  
}
  
exports.cleanTask = cleanTask;
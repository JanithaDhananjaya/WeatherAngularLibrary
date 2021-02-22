const libName = process.env.NAME;

const util = require('util');
const fs = require('fs');
const path = require('path');
const copyFilePromise = util.promisify(fs.copyFile);

//library features
const htmlFile = libName + '.component.html';
const tsFile = libName + '.component.ts';
const serviceFile = libName + '.service.ts';

function copyFiles(srcDir, destDir, files) {
  return Promise.all(files.map(f => {
    return copyFilePromise(path.join(srcDir, f), path.join(destDir, f));
  }));
};

// usage
copyFiles('projects/' + libName + '/src/lib', 'temp', [serviceFile, tsFile]).then(() => {
  console.log("done");
}).catch(err => {
  console.log(err);
});




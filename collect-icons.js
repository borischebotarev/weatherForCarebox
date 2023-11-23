const fs = require('fs');
const path = require('path');

const folderPath = '../src/assets/icons';
const outputFilePath = 'result.json';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('error reading:', err);
    return;
  }

  const result = {};

  files.forEach(file => {
    const prefix = parseInt(file.substring(0, 4), 10);

    if (!result[prefix]) {
      result[prefix] = file;
    }
  });

  const outputPath = path.join(outputFilePath);
  fs.writeFile(outputPath, JSON.stringify(result, null, 2), err => {
    if (err) {
      console.error('error write:', err);
    } else {
      console.log(`success file: ${outputPath}`);
    }
  });
});

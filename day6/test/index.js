const fs = require('fs');

// Array of file names to be copied
const filesToCopy = ['1.txt', '2.txt', '3.txt', '4.txt', '5.txt'];

// Name of the file to which contents will be copied
const consolidatedFile = 'consolidated.txt';

// Loop through each file and copy its contents to the consolidated file
for (let i = 0; i < filesToCopy.length; i++) {
  const file = filesToCopy[i];
  const content = fs.readFileSync(file, 'utf-8');
  fs.appendFileSync(consolidatedFile, content);
  console.log(`Contents of ${file} have been copied to ${consolidatedFile}`);
}

console.log(`All files have been copied to ${consolidatedFile}`);
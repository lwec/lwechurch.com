const fs = require('fs');
const _ = require('lodash');
const parse = require('csv-parse/lib/sync');

// ////

const csvFilePathArg = _.find(process.argv, arg => arg.indexOf('--csv=') > -1);

if (!csvFilePathArg) {
  throw new Error('No .csv file argument given, please use --csv=path-to.csv');
}

const csvFilePath = csvFilePathArg.substring(csvFilePathArg.indexOf('--csv=') + 6);
const csvStr = extractCsvStringFromFile(csvFilePath);
const csv = parse(csvStr, { columns: true });

const sermonFileContents = _.map(csv, generateSermonFileContentFromData);
_.forEach(sermonFileContents, createSermonFile);

// ////

function extractCsvStringFromFile(filepath) {
  // error out if the file doesn't exist
  fs.statSync(filepath);

  return fs.readFileSync(filepath, 'utf-8');
}

function generateSermonFileContentFromData({ title, speaker, date, sermonUrl }) {
  const fileName = `${_.kebabCase(title)}.md`;
  return {
    fileName,
    contents: `---
title: ${title}
speaker: ${speaker}
date: "${date}"
sermonUrl: ${sermonUrl}
---`
  };
}

function createSermonFile({ contents, fileName }) {
  fs.writeFileSync(`./content/sermon/${fileName}`, contents);
}

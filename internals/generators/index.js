/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
// const routeGenerator = require('./route/index.js');
// const languageGenerator = require('./language/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  // plop.setGenerator('route', routeGenerator);
  // plop.setGenerator('language', languageGenerator);
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(path.join(__dirname, `../../src/containers/${comp}`), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('spaceListComma', (items, options) => {
    let out = '';

    items.split(' ').forEach((item, index) => {
      out += item + ', '; // eslint-disable-line
    });

    return out.replace(/,\s*$/, '').trim();
  });
  plop.addHelper('spaceList', (items, options) => {
    let out = '';

    items.split(' ').forEach((item) => {
      out += options.fn(item);
    });

    return out;
  });
  plop.addHelper('split', str => str.split(' '));
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};

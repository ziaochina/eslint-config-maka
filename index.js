'use strict';

const builtin = [
  './lib/legacy',
  './lib/rules/es6',
  './lib/rules/esnext',
].map(require.resolve);

module.exports = {
  extends: builtin,
  parserOptions: {
    sourceType: 'script',
  },
};

#!/usr/bin/env node
const { execute } = require("@yarnpkg/shell");
const config = require.resolve("../docusaurus.config.js");

execute(`npx docusaurus start --config ${config}`);

#!/usr/bin/env node
const config = require.resolve("../docusaurus.config.js");
const docusaurus = require("@docusaurus/core/lib")

docusaurus.start(process.cwd(), {config})

const chalk = require('chalk');
const { Octokit } = require('@octokit/rest');

const persionalToken = process.env.GH_TOKEN;
const log = console.log.bind(console);
const lernaJSON = require('../lerna.json');

async function relase() {
  const tagName = `v${lernaJSON.version}`;
  const owner = 'raohong';
  const repo = 'rmc-vant';

  const octokit = new Octokit({
    auth: persionalToken,
  });

  const data = await octokit.rest.repos.createRelease({
    owner,
    repo,
    tag_name: tagName,
  });
}

relase();

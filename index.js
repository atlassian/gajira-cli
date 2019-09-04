const core = require('@actions/core');
const cache = require('@actions/tool-cache');
const semver = require('semver');
const fs = require('fs').promises;

const toolName = 'jira';

async function exec() {
    try {
        let toolPath;
        const version = core.getInput('version');

        // is this version already in our cache
        toolPath = cache.find(toolName, version);

        if (!toolPath) {
            toolPath = await downloadCLI(version);
        }

        // add tool to path for this and future actions to use
        core.addPath(toolPath);
    } catch (error) {
        core.setFailed(error.message);
    }
}

async function downloadCLI(version) {
    const cleanVersion = semver.clean(version) || '';
    const downloadURL = encodeURI(`https://github.com/go-jira/jira/releases/download/v${cleanVersion}/jira-linux-amd64`);
    const downloadedTool = await cache.downloadTool(downloadURL);
    const permissions = 0o755;

    await fs.chmod(downloadedTool, permissions);
    return await cache.cacheFile(downloadedTool, toolName, toolName, version);
}

exec();
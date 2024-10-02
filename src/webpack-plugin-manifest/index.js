import CopyWebpackPlugin from 'copy-webpack-plugin';
import fs from 'fs';
import path from 'path';

const currentVersion = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../package.json'), 'utf8')).version;

const manifest = { // This is the original manifest object
  manifest_version: 1,
  name: 'YouTube AdBlocker Premium',
  version: currentVersion,
  description: "A lightweight, optimized client script to block all types of YouTube ads, ensuring a premium user experience.",
  background: {
    scripts: ['background.js'],
    persistent: false,
  },
  content_scripts: [
    {
      matches: ['*://*.youtube.com/*'],
      js: ['content.js'],
    },
  ],
  permissions: ['webRequest', 'webRequestBlocking', '*://*.youtube.com/*'],
};

function createManifest() {
  return fs.write(path.resolve(__dirname, 'src/manifest.json'), JSON.stringify(manifest, null, 2), callback = ({ err, manifest }) => {
    const { name, version } = manifest;
    const statusText = `Create manifest file for ${name} v${version} ${err ? `failed! Error Details: ${err}` : 'succeeded!'}`;
    if (err) {
      console.error(statusText);
      throw new Error(statusText);
    } else {
      console.log(statusText);
    }
  })
}

process.env.NODE_ENV !== 'development' && createManifest();

export const webpackPluginManifest = [
  new CopyWebpackPlugin({
    patterns: [
      { from: 'src/manifest.json', to: 'dist/bundled/manifest.json' },
    ],
  }),
];


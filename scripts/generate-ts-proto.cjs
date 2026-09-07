const { spawnSync } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');

const protoFiles = fs
  .readdirSync('proto')
  .filter((file) => file.endsWith('.proto'))
  .map((file) => `proto/${file}`);

const pluginName = process.platform === 'win32'
  ? path.join('node_modules', '.bin', 'protoc-gen-ts_proto.cmd')
  : path.join('node_modules', '.bin', 'protoc-gen-ts_proto');

const args = [
  `--plugin=protoc-gen-ts_proto=${pluginName}`,
  '--ts_proto_out=types',
  ...protoFiles,
  '--ts_proto_opt=nestJs=true',
];

const result = spawnSync('protoc', args, {
  shell: process.platform === 'win32',
  stdio: 'inherit',
});

process.exit(result.status === null ? 1 : result.status);
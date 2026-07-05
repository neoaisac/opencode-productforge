import path from 'path';
import fs from 'fs';
import os from 'os';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, '../..');

export const ProductForgePlugin = async ({ client }) => {
  const homeDir = os.homedir();
  const envConfigDir = process.env.OPENCODE_CONFIG_DIR;
  const configDir = envConfigDir
    ? path.resolve(envConfigDir.replace(/^~/, homeDir))
    : path.join(homeDir, '.config', 'opencode');

  const skillsDir = path.join(packageRoot, 'skills');
  const installDir = path.join(packageRoot, 'install');

  const deployTargets = [
    { src: 'forge-agent.md', dest: 'agents', name: 'forge.md' },
    { src: 'forge-command.md', dest: 'commands', name: 'forge.md' },
  ];

  for (const { src, dest, name } of deployTargets) {
    const srcPath = path.join(installDir, src);
    const destPath = path.join(configDir, dest, name);
    try {
      if (!fs.existsSync(destPath)) {
        const destDir = path.dirname(destPath);
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        const content = fs.readFileSync(srcPath, 'utf8');
        fs.writeFileSync(destPath, content, 'utf8');
      }
    } catch (err) {
      console.error(`[productforge] Could not deploy ${name}: ${err.message}`);
    }
  }

  return {
    config: async (config) => {
      config.skills = config.skills || {};
      config.skills.paths = config.skills.paths || [];
      if (!config.skills.paths.includes(skillsDir)) {
        config.skills.paths.push(skillsDir);
      }
    },
  };
};

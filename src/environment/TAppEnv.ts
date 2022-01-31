import { ENV } from '../../app.config.js';
type EnvKeys = keyof typeof ENV;

export type TAppEnv = Record<EnvKeys, string>;

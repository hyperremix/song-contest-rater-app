// eslint-disable-next-line import/no-extraneous-dependencies
import { NodePlopAPI } from 'node-plop';
// eslint-disable-next-line import/no-extraneous-dependencies
import shell from 'shelljs';
import { componentGenerator } from './component';
import { sliceGenerator } from './slice';

interface PrettifyCustomActionData {
  path: string;
}

// eslint-disable-next-line no-shadow
export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('slice', sliceGenerator);

  plop.setActionType('prettify', (_answers, config) => {
    const data = config.data as PrettifyCustomActionData;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
}

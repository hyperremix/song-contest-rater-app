import { NodePlopAPI } from 'node-plop';
import shell from 'shelljs';
import { componentGenerator } from './component';
import { sliceGenerator } from './slice';

type PrettifyData = {
  path: string;
};

export default (plop: NodePlopAPI) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('slice', sliceGenerator);

  plop.setActionType('prettify', (_, config) => {
    const data = config!.data as PrettifyData;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
};

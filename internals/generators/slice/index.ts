import inquirer from 'inquirer';
import { Actions, PlopGeneratorConfig } from 'node-plop';
import path from 'path';
import { pathExists } from '../utils';

inquirer.registerPrompt('directory', require('inquirer-directory'));

enum SliceProptNames {
  'sliceName' = 'sliceName',
  'wantSaga' = 'wantSaga',
}

type Answers = { [P in SliceProptNames]: string };

const basePath = path.join(__dirname, '../../../src/store');

export const sliceGenerator: PlopGeneratorConfig = {
  description: 'Add a redux toolkit slice',
  prompts: [
    {
      type: 'input',
      name: SliceProptNames.sliceName,
      message: 'What should it be called (automatically adds ...Slice postfix)',
    },
    {
      type: 'confirm',
      name: SliceProptNames.wantSaga,
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
  ],
  actions: (data) => {
    const answers = data as Answers;

    const rootStatePath = path.join(basePath, '/TRootState.ts');
    const rootReducerPath = path.join(basePath, '/rootReducer.ts');
    const rootSagaPath = path.join(basePath, '/rootSaga.ts');
    const slicePath = path.join(
      basePath,
      `/${answers.sliceName.toLowerCase()}`,
    );

    if (pathExists(slicePath)) {
      throw new Error(`Slice '${answers.sliceName}' already exists`);
    }

    let actions: Actions = [
      {
        type: 'add',
        path: `${slicePath}/index.ts`,
        templateFile: './slice/index.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${slicePath}/selectors.ts`,
        templateFile: './slice/selectors.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${slicePath}/types.ts`,
        templateFile: './slice/types.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${slicePath}/persistConfig.ts`,
        templateFile: './slice/persistConfig.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${rootStatePath}`,
        pattern: new RegExp(/.*\/\/.*\[IMPORT NEW CONTAINERSTATE ABOVE\]\n/),
        templateFile: './slice/importContainerState.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${rootStatePath}`,
        pattern: new RegExp(/.*\/\/.*\[INSERT NEW REDUCER KEY ABOVE\]\n/),
        templateFile: './slice/appendRootState.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${rootReducerPath}`,
        pattern: new RegExp(/.*\/\/.*\[IMPORT NEW REDUCER ABOVE\]\n/),
        templateFile: './slice/importRootReducer.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${rootReducerPath}`,
        pattern: new RegExp(/.*\/\/.*\[INSERT NEW PERSISTED REDUCER ABOVE\]\n/),
        templateFile: './slice/appendRootReducer.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${rootReducerPath}`,
        pattern: new RegExp(/.*\/\/.*\[INSERT NEW REDUCER KEY ABOVE\]\n/),
        templateFile: './slice/appendClearPersistStorage.hbs',
        abortOnFail: true,
      },
      {
        type: 'prettify',
        data: { path: `${slicePath}/**` },
      },
      {
        type: 'prettify',
        data: { path: `${basePath}/rootReducer.ts` },
      },
      {
        type: 'prettify',
        data: { path: `${basePath}/TRootState.ts` },
      },
    ];

    console.log(`${basePath}/TRootState.ts`);

    if (answers.wantSaga) {
      actions = [
        ...actions,
        {
          type: 'add',
          path: `${slicePath}/saga.ts`,
          templateFile: './slice/saga.ts.hbs',
          abortOnFail: true,
        },
        {
          type: 'modify',
          path: `${rootSagaPath}`,
          pattern: new RegExp(/.*\/\/.*\[IMPORT NEW SAGA ABOVE\]\n/),
          templateFile: './slice/importRootSaga.hbs',
          abortOnFail: true,
        },
        {
          type: 'modify',
          path: `${rootSagaPath}`,
          pattern: new RegExp(/.*\/\/.*\[INSERT NEW SAGA ABOVE\]\n/),
          templateFile: './slice/appendRootSaga.hbs',
          abortOnFail: true,
        },
        {
          type: 'prettify',
          data: { path: `${basePath}/rootSaga.ts` },
        },
      ];
    }

    return actions;
  },
};

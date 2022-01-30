import inquirer from 'inquirer';
import { PlopGeneratorConfig } from 'node-plop';
import { baseGeneratorPath } from '../paths';
import { pathExists } from '../utils';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export enum ComponentProptNames {
  componentName = 'componentName',
  path = 'path',
}

type Answers = { [P in ComponentProptNames]: string };

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: ComponentProptNames.componentName,
      message: 'What should it be called?',
    },
    {
      type: 'directory',
      name: ComponentProptNames.path,
      message: 'Where do you want it to be created?',
      basePath: `${baseGeneratorPath}`,
    } as any,
  ],
  actions: (data) => {
    const answers = data as Answers;

    const componentPath = `${baseGeneratorPath}/${answers.path}/{{properCase ${ComponentProptNames.componentName}}}.tsx`;
    const actualComponentPath = `${baseGeneratorPath}/${answers.path}/${answers.componentName}.tsx`;

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`);
    }

    return [
      {
        type: 'add',
        path: componentPath,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'prettify',
        data: { path: `${actualComponentPath}` },
      },
    ];
  },
};

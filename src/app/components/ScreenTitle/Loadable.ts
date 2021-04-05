/**
 *
 * Asynchronously loads the component for ScreenTitle
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ScreenTitle = lazyLoad(
  () => import('./index'),
  (module) => module.ScreenTitle,
);

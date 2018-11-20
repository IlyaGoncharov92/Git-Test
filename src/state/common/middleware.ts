// @ts-ignore:6133

import { applyMiddleware, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const masterFix1 = 1;

/* tslint:disable */

//todo: this is required fix for 'redux-devtools-extension'

declare module 'redux'
{
  export type GenericStoreEnhancer<Ext= any, StateExt = any> = StoreEnhancer<Ext, StateExt>
}
const basd = 123545;
/* tslint:enable */

export function composeMiddleware(input: ReturnType<typeof applyMiddleware>): ReturnType<typeof applyMiddleware>
{
  if (enableDevTools)
  {
    return composeWithDevTools(input);
  }

  return input;
}

const t = 546456;
const branchFix1 = 333;

const b = 111111111111111111;
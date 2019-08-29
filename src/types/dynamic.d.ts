import { DvaInstance } from 'dva';
import { ComponentType } from 'react';

// 覆盖dva dynamic类型声明
declare const dynamic: (opts: {
  app: DvaInstance,
  models?: () => Array<PromiseLike<any>>,
  component: () => PromiseLike<any>,
}) => ComponentType<any>;
export default dynamic;

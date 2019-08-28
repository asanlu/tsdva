// 路由菜单基础数据
export interface MenuDataItem {
  authority?: string[] | string;
  children?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  name?: string;
  path: string;
  [key: string]: any;
}
// 路由配置数据
export interface RouteConfig extends MenuDataItem {
  routes: RouteConfig[];
  component: string;
}

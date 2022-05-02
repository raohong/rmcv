import type { DemoMenuData, DocMDNodeData, MenuItem } from './type';

const formatMenuItem = (node: DocMDNodeData, locale: string): MenuItem => {
  const name =
    node.title + (locale === 'zh-CN' && node.subTitle ? ` ${node.subTitle}` : '');

  return {
    menuName: name,
    ...node,
  };
};

export const getMenuData = (nodeData: DocMDNodeData[], locale: string) => {
  const currentNodeData = nodeData.filter((item) => item.locale === locale);
  const map = new Map<string, MenuItem[]>();
  const demoMap = new Map<string, DocMDNodeData>();
  const menuOrderMap = new Map<string, number>();

  currentNodeData.forEach((item) => {
    if (item.demoPath) {
      demoMap.set(item.pagePath, item);
    }

    const key = item.type;

    if (item.menuOrder !== undefined && item.menuOrder !== null && key) {
      menuOrderMap.set(key, item.menuOrder);
    }

    if (!map.get(key)) {
      map.set(key, []);
    }

    map.get(key)!.push(formatMenuItem(item, locale));
  });

  const menuData = Array.from(map.entries()).map(([type, list]) => ({
    menuName: type,
    children: list,
  }));

  const demoMenuData = menuData
    .map((item) => {
      const current = { ...item };

      current.children = current.children.filter((sub) => sub.demoPath);

      return current.children.length ? current : null;
    })
    .filter(Boolean) as DemoMenuData;

  const collections = [menuData, demoMenuData];

  collections.forEach((list) => {
    list.sort(
      (a, b) =>
        (menuOrderMap.get(a.menuName) ?? 0) - (menuOrderMap.get(b.menuName) ?? 0),
    );

    list.forEach(({ children }) => {
      children.sort((childA, childB) => childA.name.localeCompare(childB.name));
    });
  });

  return { menuData, demoMenuData, demoMap };
};

export const triggerRouteEvent = (type: string, win: Window, data?: any) => {
  win.postMessage(
    JSON.stringify({
      event: type,
      data,
    }),
    location.origin,
  );
};

export const parseRouteEvent = (
  evt: MessageEvent,
): null | {
  event: string;
  data: any;
} => {
  if (!evt || evt.origin !== location.origin) {
    return null;
  }

  try {
    const data = JSON.parse(evt.data);

    if (!data.event) {
      return null;
    }

    return data;
  } catch {}

  return null;
};

export const removeSlash = (path: string) => {
  return path?.length > 1 ? path.replace(/\/+$/, '') : path;
};

export const getTopWindow = () => {
  return window.frameElement?.ownerDocument?.defaultView;
};

import { C_permission } from "@/constants/permssion";

/**
 *
 * @param right
 * @returns
 */
export const hasPermission = (right: string | undefined): boolean => {
  if (!right) return true;
  return C_permission.includes(right);
};

/**
 *
 * @param menu
 * @param hasPermission
 * @returns
 */

export const applyPermissions = <T>(
  menu: (T | "divider")[],
  hasPermission: (item: string | undefined) => boolean,
): (T | "divider")[] => {
  return menu.map((item) => {
    const permission = hasPermission((item as any)?.right);
    if (item === "divider") return item;
    const updatedItem: T = {
      ...item,
      permission,
    };
    if ((item as any)?.subMenu) {
      const itemWithSubMenu = updatedItem as any;
      itemWithSubMenu.subMenu = applyPermissions(
        (item as any).subMenu,
        hasPermission,
      ) as T[];
    }
    return updatedItem;
  });
};

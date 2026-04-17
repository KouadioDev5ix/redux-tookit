import type { iMenuItem } from "@/interfaces/iMenuItems";

/**
 *
 *
 *
 */

export const appMenu: (iMenuItem | "divider")[] = [
  {
    id: "dashboard",
    label: "Tableau de bord",
    icon: "",
    right: "view_dashboard",
  },
  "divider",
  {
    id: "users",
    label: "Gestion des utilisateurs",
    icon: "",
    right: "manage_users",
    subMenu: [
      {
        id: "users-list",
        label: "Liste des utilisateurs",
        right: "view_users",
      },
      {
        id: "users-create",
        label: "Créer un utilisateur",
        right: "create_user",
      },
    ],
  },
  {
    id: "settings",
    label: "Paramètres",
    icon: "",
    right: "view_settings",
    subMenu: [
      {
        id: "settings-general",
        label: "Général",
        right: "edit_settings",
      },
      {
        id: "settings-security",
        label: "Sécurité",
        right: "admin_access",
      },
    ],
  },
];

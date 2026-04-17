const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export { MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES };

import { Grid, Settings, ShoppingBag } from "lucide-react";

// eslint-disable-next-line react-refresh/only-export-components
export const navBarItem = [
  {
    id: 1,
    label: "Tableau de bord",
    href: "/",
    icon: <Grid size={14} />,
  },
  {
    id: 2,
    label: "Configuration",
    href: "/configurations",
    icon: <Settings size={14} />,
  },

  {
    id: 5,
    label: "Artircles",
    href: "/aricles",
    icon: <ShoppingBag size={14} />,
  },
];

export const commonClassName: string =
  "flex items-center gap-1 py-2 px-2 my-1 text-sm font-semibold rounded-lg hover:bg-green-600 hover:text-white";

export const activedLinkClassName: string =
  "flex items-center gap-1 py-2 px-2 my-1 text-gray-100 bg-green-600  text-sbbsWhite  text-sm font-semibold rounded-lg hover:bg-green-800 ";

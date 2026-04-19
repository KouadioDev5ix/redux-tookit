import { studentSchema } from "@/schemas/studentSchema";
import { z } from "zod";

interface iSubMenuItem {
  id: string;
  label: string;
  right: string;
}

export interface iMenuItem {
  id: string;
  label: string;
  icon?: string;
  right?: string;
  subMenu?: iSubMenuItem[];
  permission?: boolean;
}

export type iStudent = z.output<typeof studentSchema>;

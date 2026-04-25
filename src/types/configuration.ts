import type { configurationShema } from "@/schemas/configurationShema";
import type z from "zod";

export type TConfiguration = z.output<typeof configurationShema>;

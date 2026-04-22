import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/constant";
import z from "zod";

export const studentSchema = z.object({
  firstName: z.string().min(2, "Prénom trop court"),
  lastName: z.string().min(2, "Nom trop court"),
  gender: z.enum(["male", "female"]),
  birthDate: z.string().min(1, "Date obligatoire"),
  className: z.string().min(1, "Classe obligatoire"),
  matricule: z.string().min(3, "Matricule invalide"),
  email: z.string().optional().nullable(),
  phone: z.string().min(8, "Numéro invalide"),
  address: z.string().optional(),
  parentName: z.string().min(2, "Nom du parent requis"),
  parentPhone: z.string().min(8, "Téléphone invalide"),
  status: z.enum(["active", "inactive"]),
  photo: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, "Image trop lourde (max 2MB)")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Format non supporté",
    )
    .optional(),
});

export type TStudent = z.output<typeof studentSchema>;

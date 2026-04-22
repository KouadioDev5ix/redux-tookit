import { z } from "zod";

export const configurationShema = z.object({
  nomArticle: z
    .string()
    .min(2, "Nom article invalide, au moins deux caractere"),
  categorieArticle: z
    .string()
    .min(2, "Categorie invalide, au moins deux caractere"),
  identifant: z.number().min(5, "Identifiant ivalide , au moins 5 digits"),
  fournisseur: z.string().min(2, "Invalide, au moins deux caractere"),
});

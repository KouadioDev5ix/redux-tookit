//**Enonce */

/**
 * 
Formulaire générique
Difficile generics keyof Record
Crée un composant Form<T> qui reçoit fields: { key: keyof T; label: string; type: "text" | "number" }[], une valeur initiale initialValues: T, et un callback onSubmit: (values: T) => void. Il génère automatiquement les inputs depuis la liste de champs et retourne les valeurs typées.
 */




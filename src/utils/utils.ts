const trouverIndexElement = <T>(tbleau: T[], elementTableau: T): number => {
  if (!(elementTableau) in tbleau)
    throw new Error(
      `Erreur,  ${elementTableau} n'est pas un element du tableau`,
    );
  return tbleau.findIndex((item) => item === elementTableau);
};

trouverIndexElement([12, " hello", 25], 25);

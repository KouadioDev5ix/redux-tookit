interface User {
  id: string | number;
  name: string;
  phoneNumber: string;
  hobbies: string[];
}

const rendreOptionnel: Partial<User> = {
  hobbies: ["Reading", "Swimming"],
  name: "Kouadio",
};

function mettreAjourInfo(id: number, data: Partial<User>) {
  return {
    id,
    ...data,
  };
}

console.log("les valeur optionnel", rendreOptionnel);

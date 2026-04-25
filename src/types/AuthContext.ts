export type AuthContextType = {
  user: string | null;
  login: (name: string) => void;
  logOut: () => void;
};

import type { iArticle } from "@/interfaces/iArticles";
import React from "react";

interface IConstexteProps {
  ajouterArticles: (articles: iArticle) => void;
  retirerUnArticle: (id: number) => void;
  listeArticle: iArticle[];
  articlesEstAjouter: (id: number) => boolean;
}

const ArticleContexte = React.createContext<IConstexteProps>(
  {} as IConstexteProps,
);

const ArtilcesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [listeArticle, setListArticle] = React.useState<iArticle[]>([]);

  const chargerArticleLocalStorage = () => {
    const articles = JSON.parse(localStorage.getItem("produits")!) || [];
    setListArticle(articles);
  };

  const initialiserArticlesLocalStorage = (articles: iArticle[]) => {
    localStorage.setItem("produits", JSON.stringify(articles));
  };

  /**
   *
   * @param article
   *
   */

  /**
   *
   * @param article
   */
  const ajouterArticles = (article: iArticle) => {
    const articlesAjoute = listeArticle.some((a) => a.id === article.id);

    let updateArticles;

    if (articlesAjoute) {
      updateArticles = listeArticle.filter((item) => item.id !== article.id);
    } else {
      updateArticles = [...listeArticle, article];
    }
    setListArticle(updateArticles);
    initialiserArticlesLocalStorage(updateArticles);
  };

  /**
   *
   * @param articlesId
   * @returns
   */
  const articlesEstAjouter = (articlesId: number) => {
    return listeArticle.some((item) => item.id === articlesId);
  };

  /**
   *
   * @param id
   */
  const retirerUnArticle = (id: number) => {
    setListArticle((previousState) =>
      previousState.filter((item) => item.id !== id),
    );

    // console.log("articles retirer id==>", id);
  };

  /**
   *
   */
  const contexteValue: IConstexteProps = {
    listeArticle,
    ajouterArticles,
    articlesEstAjouter,
    retirerUnArticle,
  };

  React.useEffect(() => {
    chargerArticleLocalStorage();
  }, []);
  return (
    <ArticleContexte.Provider value={contexteValue}>
      {children}
    </ArticleContexte.Provider>
  );
};

const useArticlesContexte = () => {
  const getContexte = React.useContext(ArticleContexte);
  if (!getContexte) console.error("shit some bad happenned...");
  return getContexte;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ArtilcesContextProvider, useArticlesContexte };

import React from "react";

import { fetchListArticles } from "../services/commande";
import { ShoppingCart, Trash } from "lucide-react";
import type { iArticle } from "@/interfaces/iArticles";
import { useArticlesContexte } from "@/context/commandes/CommandeContext";
import NavBar from "@/components/NavBar";
import Section from "@/compoundComponent/Section";

export default function CommandePge() {
  const [commande, setCommande] = React.useState<iArticle[]>([]);

  const { ajouterArticles, articlesEstAjouter } = useArticlesContexte();

  /**
   *
   */
  const obtenirListeArticles = () => {
    try {
      fetchListArticles()
        .then((response) => {
          setCommande(response.data);
        })
        .catch((err) => {
          console.error("Ooh shit, some bad happen look ==>", err);
        });
    } catch (error) {
      console.error("Error", error);
    }
  };

  React.useEffect(() => {
    obtenirListeArticles();
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar />

      <Section className={"w-10/12 max-w-[1600px] mx-auto"}>
        <div className="pt-24">
          <h1 className="text-gray-600 text-xl font-bold">
            Listes des articles
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {commande.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
            >
              {/* Image / placeholder */}
              <div className="bg-gray-200 h-32 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Image</span>
              </div>

              {/* Contenu */}
              <div className="p-4 space-y-2">
                <p className="text-xs text-gray-500 uppercase">
                  {item.categorie}
                </p>

                <h3 className="font-semibold text-gray-800">{item.name}</h3>

                <p className="text-lg font-bold text-orange-600">
                  {item.price.toLocaleString()} FCFA
                </p>

                {/* Action */}
                <button
                  className={`w-full rounded-xl py-2 text-sm transition flex items-center justify-center gap-2 ${
                    articlesEstAjouter(item.id)
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-orange-600 text-white hover:bg-orange-700"
                  }`}
                  onClick={() => ajouterArticles(item)}
                >
                  {articlesEstAjouter(item.id) ? (
                    <>
                      <Trash strokeWidth={1.25} size={20} /> Retirer
                    </>
                  ) : (
                    <>
                      <ShoppingCart strokeWidth={1.25} size={20} /> Ajouter
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

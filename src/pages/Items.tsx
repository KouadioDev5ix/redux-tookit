import CustomInput from "@/components/CustomInput";
import { useLocalStorage } from "@/customHooks/useLocalStorage";
import React from "react";

// type T_theme = "Light" | "Black " | "System";
// TODO : Trouver l'erreur du pouquoi le T_theme passe en parametre du useSate produit erreur
const Items = () => {
  // const [selectedTheme, setSlectedTheme] = React.useState("");
  const [value, setValue] = useLocalStorage("theme", "Light");

  React.useMemo(() => {
    // const map = new Map< T , K>([1], ["k"]);
    // console.log(map);
  }, []);

  React.useEffect(() => {}, []);

  const themeOptions = ["Light", "Black ", "System"];
  return (
    <section className={ `min-h-screen flex flex-col items-center justify-center ${value !== "Light" ? "bg-black text-white":"" }`}>


      <h1 className="text-5xl font-extrabold mb-5">Themes</h1>
      <RenderThemeOptions
        p_onSelectedTheme={(theme) => setValue(theme)}
        p_selectedTheme={value}
        p_themeOptions={themeOptions}
      />
      <div>
        <p>
          Theme selectionne :{" "}
          <span className="text-orange-60 font-bold">
            {" "}
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        </p>
      </div>

      <div>
        <CustomInput/>
      </div>
    </section>
  );
};

/**
 *
 */
type TRenderThemeOptionsProps<T> = {
  p_themeOptions: T[];
  p_selectedTheme: T;
  p_onSelectedTheme: (param: T) => void;
};

function RenderThemeOptions<T>({
  p_themeOptions,
  p_onSelectedTheme,
  p_selectedTheme,
}: TRenderThemeOptionsProps<T>) {
  return (
    <ul className="list-disc">
      {p_themeOptions.map((theme, index) => (
        <li key={index}>
          <button
            onClick={() => p_onSelectedTheme(theme)}
            className={theme === p_selectedTheme ? "font-bold" : ""}
          >
            {theme as string}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Items;

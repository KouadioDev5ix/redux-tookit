import { ImageUpload } from "@/components/ImageUpload";
import { ModalDaysui } from "@/context/fraisScolaire/ModalDaysui";
import { studentSchema, type TStudent } from "@/schemas/studentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Book } from "lucide-react";

import { useForm } from "react-hook-form";

function ReactHookFormsWithZod() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
    clearErrors,
    control,
    getFieldState,
    getValues,
    resetField,
    setError,
    setFocus,
    subscribe,
    trigger,
    unregister,
    watch,
  } = useForm<TStudent>({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = async (data: TStudent) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    console.log("data ===>", data);
    console.log("photo ===>", data.photo);

    reset();
  };

  return (
    <div>
      <div className="text-center">
        <button className="bg-blue-600 text-white text-xs  w-44 h-10 rounded-lg">
          Ajoutrer
        </button>
      </div>

      {/* content */}
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">
          <Book /> Enregistrement d’un élève
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Upload Image */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Photo de l’élève</label>

            <ImageUpload onChange={(file) => setValue("photo", file)} />

            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>
          {/* Nom */}
          <div>
            <label className="label">Nom</label>
            <input {...register("lastName")} className="input" />
            {errors.lastName && (
              <p className="error">{errors.lastName.message}</p>
            )}
          </div>

          {/* Prénom */}
          <div>
            <label className="label">Prénom</label>
            <input {...register("firstName")} className="input" />
            {errors.firstName && (
              <p className="error">{errors.firstName.message}</p>
            )}
          </div>

          {/* Sexe */}
          <div>
            <label className="label">Sexe</label>
            <select {...register("gender")} className="input">
              <option value="">Choisir</option>
              <option value="male">Masculin</option>
              <option value="female">Féminin</option>
            </select>
            {errors.gender && <p className="error">{errors.gender.message}</p>}
          </div>

          {/* Date de naissance */}
          <div>
            <label className="label">Date de naissance</label>
            <input type="date" {...register("birthDate")} className="input" />
          </div>

          {/* Classe */}
          <div>
            <label className="label">Classe</label>
            <input {...register("className")} className="input" />
          </div>

          {/* Matricule */}
          <div>
            <label className="label">Matricule</label>
            <input {...register("matricule")} className="input" />
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input {...register("email")} className="input" />
          </div>

          {/* Téléphone */}
          <div>
            <label className="label">Téléphone</label>
            <input {...register("phone")} className="input" />
          </div>

          {/* Adresse */}
          <div className="md:col-span-2">
            <label className="label">Adresse</label>
            <textarea {...register("address")} className="input" />
          </div>

          {/* Parent */}
          <div>
            <label className="label">Nom du parent</label>
            <input {...register("parentName")} className="input" />
          </div>

          <div>
            <label className="label">Téléphone du parent</label>
            <input {...register("parentPhone")} className="input" />

            {errors.parentPhone && (
              <p className="error">{errors.parentPhone.message}</p>
            )}
          </div>

          {/* Statut */}
          <div>
            <label className="label">Statut</label>
            <select {...register("status")} className="input">
              <option value="active">Actif</option>
              <option value="inactive">Suspendu</option>
            </select>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 rounded transition col-span-2 text-white
                  ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {isSubmitting
              ? "Enregistrement en cours..."
              : "Enregistrer l’élève"}
          </button>
        </form>
      </div>

      <ModalDaysui
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo consectetur aliquam, doloremque similique, architecto corrupti doloribus at, assumenda dolore repudiandae vitae iure! Fugiat amet temporibus ipsam, ad quam nostrum!"
        }
        cancelBtnClassName={"bg-gray-600 h-10 w-44 rounded-lg text-white"}
        saveBtnClassName={"bg-red-600 h-10 w-44 rounded-lg text-white"}
        bothBtnClassName={"flex items-center gap-4 mt-4"}
        actionButton={"Enregistrer"}
        cancelButton={"Annuler"}
        descriptionClassName={"text-xs text-gray-700"}
        title={"Suppression d'information"}
        titleClassName={"text-gray-800 text-lg fond-bold"}
      />
    </div>
  );
}

export { ReactHookFormsWithZod };

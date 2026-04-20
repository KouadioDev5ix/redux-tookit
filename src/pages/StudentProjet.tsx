import { Button } from "@/components/ui/button";

export default function StudentProjet() {
  const ouvrirModal = () => {
    (document.getElementById("my_modal_3") as HTMLDialogElement).showModal();
  };
  return (
    <div className="w-11/12 max-w-7xl mx-auto ">
      <div>
        <h1 className="text-2xl font-bold text-blue-950">
          Gestion des etudiants
        </h1>
      </div>

      <button
        className="text-white bg-blue-900 text-xs  w-44 h-10 rounded-md"
        onClick={() => ouvrirModal()}
      >
        Ajouter un eleves
      </button>
      <div></div>
      <Button className="rounded-lg">Click me</Button>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog
        id="my_modal_3"
        className="modal flex justify-center items-start pt-5 mx-auto"
      >
        <div className="modal-box ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="h-72 ">
            <h1>Ajouter un eleve</h1>
          </div>
        </div>
      </dialog>
    </div>
  );
}

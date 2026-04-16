import React from "react";

export default function NavBar() {
  return (
    <div className="w-full fixed top-0 z-50 drop-shadow-md bg-gray-500">
      <div className="w-10/12 max-w-[1600px] mx-auto flex items-center justify-between text-white px-4 h-20">
        <div >Arpt</div>

        <div className="flex items-center gap-5">
          <p className="font-bold">Panier</p>
          <p className="font-bold">Favories</p>
        </div>
      </div>
    </div>
  );
}

import { File } from "lucide-react";
import { useState } from "react";

type ImageUploadProps = {
  onChange: (file?: File) => void;
};

export function ImageUpload({ onChange }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (file: File) => {
    setPreview(URL.createObjectURL(file));
    onChange(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const removeImage = () => {
    setPreview(null);
    onChange(undefined);
  };

  return (
    <div>
      {!preview ? (
        <label className=" w-64  h-48 flex rounded-lg flex-col items-center justify-center  border-2 border-dashed border-gray-300  cursor-pointer hover:border-blue-500 transition">
          <div className="text-gray-500 flex items-center">
            <File /> <span className="text-xs text-nowrap">Cliquer ici pour charger l'image</span>
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleInputChange}
          />
        </label>
      ) : (
        <div className="relative w-64 h-48">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg border"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded hover:bg-red-700"
          >
            Supprimer
          </button>
        </div>
      )}
    </div>
  );
}

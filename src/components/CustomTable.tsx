import React from "react";
import { twMerge } from "tailwind-merge";

interface IColums<Type> {
  hearder: string;
  accessor?: keyof Type;
  renderCell: (value: unknown, row: Type) => void;
  width?: string;
  tableTextPosition?: string;
}

interface GenericsTableProps<Type> {
  data: Type[];
  colums: IColums<Type>[];
  onThreeDoteClick?: () => void;
  TableChildren?: React.ReactNode;
  pagination?: React.ReactNode;
  tableContainerClassName?: string;
  tableClassName?: string;
  headerColor?: string;
}

function CustomTable<Type>({
  colums,
  data,

  tableContainerClassName,
  tableClassName,
}: GenericsTableProps<Type>) {


  return (
    <>
      <div className="flex flex-col text-sm w-full">
        <div
          className={twMerge(
            "w-full relative overflow-x-hidden mt-10 mb-7",
            tableContainerClassName,
          )}
        >
          <table className={twMerge("w-full", tableClassName)}>
            <thead className={twMerge("bg-gray-300 text-black font-bold")}>
              <tr>
                {colums.map((colum, index) => (
                  <th
                    key={index}
                    style={{ width: colum.width }}
                    className={twMerge(
                      "font-medium tracking-wider whitespace-nowrap",
                      `${colum.tableTextPosition ? colum.tableTextPosition : "text-center"}`,
                    )}
                  >
                    {colum.hearder}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
        
            </tbody>
          
          </table>
        </div>
      </div>
    </>
  );
}

export { CustomTable };

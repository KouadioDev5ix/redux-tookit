import React from "react";
import { twMerge } from "tailwind-merge";

export interface Column<T> {
  key: keyof T;
  header: string;
  className?: string;
  render?: (value: any, row: T) => React.ReactNode;
}

interface CustomTableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
  rowClassName?: string;
  onActionClick?: (row: T) => void;
}

export function CustomTable<T extends Record<string, any>>({
  data,
  columns,
  className,
  rowClassName,
  onActionClick,
}: CustomTableProps<T>) {
  return (
    <div
      className={twMerge(
        "w-full overflow-hidden rounded-xl border border-gray-200 bg-white",
        className,
      )}
    >
      <table className="w-full text-sm">
        {/* HEADER */}
        <thead className="bg-blue-900 text-white">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-8 py-3 text-left font-semibold"
              >
                {col.header}
              </th>
            ))}

            {onActionClick && (
              <th className="px-4 py-3 text-left font-semibold">Actions</th>
            )}
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data?.map((row, index) => (
            <tr
              key={index}
              className={twMerge(
                "border-t hover:bg-blue-50 transition-colors   cursor-pointer zoom-in pl-3 border-b py-3 dark:hover:bg-[#232D45]",
                "hover:scale-[1.02] hover:shadow-md transition-all duration-300 ease-in-out transform-origin-left",
                "hover:relative hover:z-20 hover:border-0 hover:rounded",
                "transition duration-300 ease-in-out transform",
                index % 2 === 0 ? "bg-white" : "bg-gray-100",
                rowClassName,
              )}
            >
              {columns.map((col) => {
                const value = row[col.key];

                return (
                  <td
                    key={String(col.key)}
                    className={twMerge("px-4 py-3", col.className)}
                  >
                    {col.render ? col.render(value, row) : value}
                  </td>
                );
              })}

              {/* ACTION */}
              {onActionClick && (
                <td className="px-4 py-3">
                  <button
                    onClick={() => onActionClick(row)}
                    className="text-gray-500 hover:text-black"
                  >
                    ⋮
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface Column<dataType> {
  key: keyof dataType;
  header: string;
  className?: string;
  sortable?: boolean;
  renderCell: (value: string | number | boolean, row: dataType) => void;
}

export interface Actions<actionType> {
  label: string;
  icon: React.ReactNode;
  variant: "destructive " | "default";
  onclick: (row: actionType) => void;
}

export interface CustomTble<tableType> {
  data: tableType[];
  colums: Column<tableType>[];
  loading?: boolean;
  tableClassName?: string;
  rowClassName?: string;
  emptyMessage?: string;
  actions: Actions<tableType>[];
  pagination?: {
    currentPage: number;
    totalPage: number;
    onPageChange: (page: number) => void;
  };
  getRowKey: (row: tableType) => number | string;
}

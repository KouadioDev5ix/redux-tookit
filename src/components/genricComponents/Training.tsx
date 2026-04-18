export interface Column<dataType> {
  key: keyof dataType;
  header: string;
  className?: string;
  sortable?: boolean;
  renderCell: (value: string | number | boolean, row: dataType) => void;
}


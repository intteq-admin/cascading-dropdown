export interface CascadeLevel {
  name: string;
  label?: string;
  placeholder?: string;  
  dependsOn?: string; 
  fetch: (parentValue?: unknown) => Promise<any[]>;
  valueKey?: string;
  labelKey?: string;
  disabled?: boolean; 
}

export interface CascadeDropdownProps {
  levels: CascadeLevel[];
  onChange?: (values: Record<string, any>) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;        // Container style
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>; // props for <select>
  selectStyle?: Partial<React.CSSProperties>; // extra styles for each select
  disabled?: boolean;
}

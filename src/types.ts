export interface CascadeLevel {
  name: string;
  label?: string;
  dependsOn?: string; 
  fetch: (parentValue?: string) => Promise<any[]>;
  valueKey?: string;
  labelKey?: string;
}

export interface CascadeDropdownProps {
  levels: CascadeLevel[];
  onChange?: (values: Record<string, any>) => void;
  placeholder?: string;
}

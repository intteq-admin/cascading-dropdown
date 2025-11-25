export interface CascadeLevel {
    name: string;
    label?: string;
    dependsOn?: string;
    fetch: (parentValue?: string) => Promise<any[]>;
    valueKey?: string;
    labelKey?: string;
    disabled?: boolean;
}
export interface CascadeDropdownProps {
    levels: CascadeLevel[];
    onChange?: (values: Record<string, any>) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
    selectStyle?: Partial<React.CSSProperties>;
    disabled?: boolean;
}

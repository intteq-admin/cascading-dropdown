import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare function CascadeDropdown({ levels, onChange, className, style, selectProps, selectStyle, disabled }: CascadeDropdownProps): JSX_2.Element;

export declare interface CascadeDropdownProps {
    levels: CascadeLevel[];
    onChange?: (values: Record<string, any>) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
    selectStyle?: Partial<React.CSSProperties>;
    disabled?: boolean;
}

export declare interface CascadeLevel {
    name: string;
    label?: string;
    placeholder?: string;
    dependsOn?: string;
    fetch: (parentValue?: unknown) => Promise<any[]>;
    valueKey?: string;
    labelKey?: string;
    disabled?: boolean;
}

export { }

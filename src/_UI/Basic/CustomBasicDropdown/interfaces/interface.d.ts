import { ReactNode } from "react";

export interface CustomBasicDropdownI {
    children: ReactNode;
    dropdownChildren: ReactNode;
    className?: string;
    triggerClassName?: string;
    wrapperClassName?: string;
    customData?: { [key: string]: string }[];
    page?: number;
    loading?: boolean;
    hasMore?: boolean;
    showOnHover?: boolean
    onOpenDropdown?: () => void;
    getMoreData?: ({ page }: { page: number }) => Promise<void>;
    CustomItem?: ({ item }: { item: { [key: string]: string }[] }) => ReactNode;
  }


  export interface useCustomBasicDropdownI extends Partial<CustomBasicDropdownI> {
    onOpenDropdown?: () => void;
  }
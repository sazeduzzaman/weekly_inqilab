// app/types.ts

export interface CategoryData {
  name: string;
  id: number;
  name_bangla: string;
  category_name?: string;
}

export interface CategoryListProps {
  categoryItems: CategoryData[];
  isMobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

export interface CategoryProps {
  categoryItems: CategoryData[];
  isMobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

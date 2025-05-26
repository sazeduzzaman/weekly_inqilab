// app/types.ts

export interface CategoryData {
  name: string;
  id: number;
  bangla_name: string;
  category_name?: string;
  slug?: string;
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

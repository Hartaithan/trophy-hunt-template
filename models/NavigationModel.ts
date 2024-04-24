export interface NavLink {
  id: number;
  label: string;
  href: string;
  segment: string | null;
  disabled: boolean;
}

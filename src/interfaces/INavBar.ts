export interface INavItem {
  label: string;
  href: string;
}

export interface INavLogo {
  text: string;
  href: string;
}

export interface INavBarConfig {
  logo: INavLogo;
  items: INavItem[];
}

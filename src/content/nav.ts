import { INavBarConfig } from "@/interfaces/INavBar";

export const nav: INavBarConfig = {
  logo: { text: "Francisco Crema", href: "#home" },
  items: [
    { label: "Sobre Mi", href: "#about" },
    { label: "Trabajos", href: "#work" },
    { label: "Contacto", href: "#contact" },
  ],
};

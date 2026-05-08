import { INavBarConfig } from "@/interfaces/INavBar";

export const nav: INavBarConfig = {
  logo: { text: "Francisco Crema", href: "/" },
  items: [
    { label: "Sobre Mi", href: "#about-me" },
    { label: "Trabajos", href: "#work" },
    { label: "Contacto", href: "#contact" },
  ],
};

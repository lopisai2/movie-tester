import { GiftIcon, HomeIcon, PersonStandingIcon, StarIcon } from "lucide-react";

export const menuItems = [
  {
    label: "Inicio",
    url: "/",
    code: "home",
    icon: <HomeIcon color='#fff' />,
  },
  {
    label: "Favoritos",
    url: "/favorites",
    code: "favorites",
    icon: <StarIcon color='#fff' />,
  },
  {
    label: "Acerca de",
    url: "/about",
    code: "about",
    icon: <PersonStandingIcon color='#fff' />,
  },
];

export const secondMenuItems = [
  {
    label: "Actores",
    url: "/careers",
    code: "careers",
    icon: <StarIcon color='#fff' />,
  },
  {
    label: "Premios",
    url: "/blog",
    code: "blog",
    icon: <GiftIcon color='#fff' />,
  },
];

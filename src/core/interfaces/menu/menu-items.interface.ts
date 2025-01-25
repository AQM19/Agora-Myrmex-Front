import { IconType } from "react-icons";

export interface MenuItems {
    icon: IconType;
    label: string;
    children?: MenuItems[];
    isAvaliable: boolean;
    href?:
    | "/"
    | "/about"
    | "/contact"
    // | "/guides/how-to-start"
    // | "/guides/basic-equipment"
    // | "/guides/identification"
    // | "/guides/good-practices"
    // | "/resources/publications"
    // | "/resources/forums"
}
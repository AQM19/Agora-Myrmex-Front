import { FaCircleInfo } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoHomeOutline, IoBookOutline, IoNewspaperOutline } from "react-icons/io5";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { MenuItems } from "@/core/interfaces/menu/menu-items.interface";
import { RiContactsLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { VscTools } from "react-icons/vsc";
import { GrResources } from "react-icons/gr";
import { MdOutlineForum } from "react-icons/md";

export const MenuItemsConfig: MenuItems[] = [
    {
        href: '/',
        icon: IoHomeOutline,
        label: 'home'
    },
    {
        href: '/about',
        icon: FaCircleInfo,
        label: 'about'
    },
    {
        href: '/contact',
        icon: RiContactsLine,
        label: 'contact'
    },
    {
        label: 'basic guides',
        icon: IoBookOutline,
        children: [
            {
                href: '/guides/how-to-start',
                label: 'how to start',
                icon: LiaHourglassStartSolid
            },
            {
                href: '/guides/basic-equipment',
                label: 'basic equipment',
                icon: VscTools
            },
            {
                href: '/guides/identification',
                label: 'identification',
                icon: FaSearch
            },
            {
                href: '/guides/good-practices',
                label: 'good practices',
                icon: TiTick
            }
        ]
    },
    {
        label: 'resources',
        icon: GrResources,
        children: [
            {
                href: '/resources/publications',
                label: 'publications',
                icon: IoNewspaperOutline
            },
            {
                href: '/resources/forums',
                label: 'forums',
                icon: MdOutlineForum
            }
        ]
    }
]
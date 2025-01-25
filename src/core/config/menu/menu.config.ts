import { FaCircleInfo } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MenuItems } from "@/core/interfaces/menu/menu-items.interface";
import { RiContactsLine } from "react-icons/ri";

export const MenuItemsConfig: MenuItems[] = [
    {
        href: '/',
        icon: IoHomeOutline,
        label: 'home',
        isAvaliable: true
    },
    {
        href: '/about',
        icon: FaCircleInfo,
        label: 'about',
        isAvaliable: true
    },
    {
        href: '/contact',
        icon: RiContactsLine,
        label: 'contact',
        isAvaliable: true
    },
    // {
    //     label: 'basic guides',
    //     icon: IoBookOutline,
    //     isAvaliable: false,
    //     children: [
    //         {
    //             href: '/guides/how-to-start',
    //             label: 'how to start',
    //             icon: LiaHourglassStartSolid,
    //             isAvaliable: false
    //         },
    //         {
    //             href: '/guides/basic-equipment',
    //             label: 'basic equipment',
    //             icon: VscTools,
    //             isAvaliable: false
    //         },
    //         {
    //             href: '/guides/identification',
    //             label: 'identification',
    //             icon: FaSearch,
    //             isAvaliable: false
    //         },
    //         {
    //             href: '/guides/good-practices',
    //             label: 'good practices',
    //             icon: TiTick,
    //             isAvaliable: false
    //         }
    //     ]
    // },
    // {
    //     label: 'resources',
    //     icon: GrResources,
    //     isAvaliable: false,
    //     children: [
    //         {
    //             href: '/resources/publications',
    //             label: 'publications',
    //             icon: IoNewspaperOutline,
    //             isAvaliable: false
    //         },
    //         {
    //             href: '/resources/forums',
    //             label: 'forums',
    //             icon: MdOutlineForum,
    //             isAvaliable: false
    //         }
    //     ]
    // }
]
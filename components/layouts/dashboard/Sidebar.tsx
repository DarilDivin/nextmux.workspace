"use client"
import React, { Fragment, useState } from 'react';
import { PlusCircle, ChevronRight, Text, ArrowLeft, XCircle, X } from 'lucide-react';
import Link from 'next/link';

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { usePathname } from 'next/navigation';

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

interface SubMenuItem {
  title: string;
  icon?: React.ReactElement; // Ajout de l'icône pour chaque sous-menu
  link?: string;
}

interface MenuItem {
  title: string;
  icon?: React.ReactElement; // Ajout de l'icône pour chaque élément du menu
  link?: string;
  subMenu?: SubMenuItem[];
}

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: <PlusCircle />, link: '/dashboard/home' },
  { title: 'Événements', icon: <PlusCircle />, link: '/events' },
  { title: 'Menu 3', icon: <PlusCircle />, link: '#' },
  {
    title: 'Submenu',
    icon: <ChevronRight />,
    link: '/submenu',
    subMenu: [
      { title: 'Submenu Item 1', icon: <Text />, link: '#' },
      { title: 'Submenu Item 2', icon: <Text />, link: '#' },
      { title: 'Submenu Item 3', icon: <Text />, link: '#' },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuItem[] | null>(null);
  const [isSubMenuVisible, setSubMenuVisible] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(frameworks[0].value)
  const pathname = usePathname();

  const handleMenuItemClick = (subMenu?: SubMenuItem[]) => {
    setActiveSubMenu(subMenu);
    setSubMenuVisible(true);
  };

  const handleBackButtonClick = () => {
    setSubMenuVisible(false);
  };

  return (
    <div className={`w-64 text-gray-500 bg-gray-50 border-r-2 transition-transform transform h-full ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:-left-0 -left-10'} lg:relative lg:z-0 z-20 absolute lg:translate-x-0 lg:overflow-hidden`} style={{ borderLeft: '16px solid #024242' }}>
      <div className="h-16 border-b-2 p-4">
        <Link href={'/'}>
          <img
            src="https://console.nextmux.net/_next/image?url=%2Fassets%2Flogo%2FNextmux.png&w=256&q=75"
            alt="Nextmux"
            className="h-8"
          />
        </Link>
        <button className="ml-4 text-white px-2 py-2 rounded-full lg:hidden absolute -right-5 top-4 shadow-md" style={{ backgroundColor: '#024242' }} onClick={toggleSidebar}>
          <XCircle />
        </button>
      </div>
      <div className="mb-4 py-3 border-b-2 px-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between bg-gray-100 font-bold text-lg"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Sélectionner le cadre..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Cadre de recherche..." />
              <CommandEmpty>Aucun cadre n'a été trouvé.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className='relative'>
        <nav className='px-4 scrollbar-none' style={{ maxHeight: '70vh', overflowY: 'auto', scrollbarWidth: 'none', scrollbarGutter: 'unset' }}>
          <ul>
            {menuItems.map((menuItem, index) => (
              menuItem.subMenu ? (
                <li
                  key={index}
                  onClick={() => handleMenuItemClick(menuItem.subMenu)}
                >
                  <div className={`flex items-center mb-2 hover:bg-gray-200 cursor-pointer p-2 rounded-sm justify-between hover:shadow-md ${menuItem.subMenu.some(subItem => subItem.link === pathname) ? 'bg-gray-200 shadow-md' : ''}`}>

                    <div className='flex items-center'>
                      {menuItem.icon && React.cloneElement(menuItem.icon, { className: 'w-5 h-5 mr-2' })}
                      <span className="text-gray-800 hover:text-gray-600">{menuItem.title}</span>
                    </div>
                    {menuItem.subMenu ? (
                      <ChevronRight className="w-5 h-5" />
                    ) : (
                      null
                    )}
                  </div>
                </li>
              ) : (
                <li key={index}>
                  <Link href={`${menuItem.link}`} className={`flex items-center mb-2 hover:bg-gray-200 cursor-pointer p-2 rounded-sm justify-between hover:shadow-md ${pathname === menuItem.link ? 'bg-gray-200 shadow-md' : ''}`}>
                    <div className='flex items-center'>
                      {menuItem.icon && React.cloneElement(menuItem.icon, { className: 'w-5 h-5 mr-2' })}
                      <span className="text-gray-800 hover:text-gray-600">{menuItem.title}</span>
                    </div>
                  </Link>
                </li>
              )
            ))}

          </ul>
        </nav>

        <nav className={`px-4 scrollbar-none z-10 absolute top-0 bg-white w-full transition-transform transform ${isSubMenuVisible && activeSubMenu ? 'translate-x-0' : '-translate-x-full right-16'}`} style={{ height: '70vh', overflowY: 'auto', scrollbarWidth: 'none', scrollbarGutter: 'unset' }}>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center cursor-pointer" onClick={handleBackButtonClick}>
              <ArrowLeft className="w-6 h-6 mr-2" /> {/* Remplacez YourLeftIcon par l'icône souhaitée */}
              <span>Retour</span>
            </div>
            <X className="w-6 h-6 lg:hidden" onClick={toggleSidebar} /> {/* Remplacez YourRightIcon par l'icône souhaitée */}
          </div>
          <ul>
            {isSubMenuVisible && activeSubMenu && (
              <Fragment>
                {activeSubMenu.map((subMenuItem, index) => (
                  <li
                    key={index}
                    className="flex items-center mb-2 hover:bg-gray-200 cursor-pointer p-2 rounded-sm"
                    onClick={() => console.log(`Clicked on sub-menu item: ${subMenuItem.title}`)}
                  >
                    <span className="text-gray-800 hover:text-gray-600">{subMenuItem.title}</span>
                  </li>
                ))}
              </Fragment>
            )}
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default Sidebar;

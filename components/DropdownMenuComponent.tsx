// DropdownMenuComponent.tsx

import React, { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup } from '@/components/ui/dropdown-menu';
import { Grip } from 'lucide-react';
import Link from 'next/link';

interface ChildProps {
  textColor: string;
}

const DropdownMenuComponent: React.FC<ChildProps> = ({ textColor }) => {
  const [menuData, setMenuData] = useState<any[]>([]); 

  useEffect(() => {

    fetch('https://api.nextmux.cloud/api/v1/web/features')
      .then((response) => response.json())
      .then((data) => setMenuData(data.content.items))
      .catch((error) => console.error('Error fetching menu data:', error));
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center font-medium title-font md:mb-0 cursor-pointer hover:opacity-30 transition-all'>
        <Grip className={`w-auto h-5 ${textColor} fill-current`} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-transparent border-none">
        <DropdownMenuGroup>
          <div id="menu" className="menu pr-0 mr-0">
            <div className="icons-container pr-0 mr-0">
              {menuData.map((menuItem) => (
                <Link key={menuItem.id} href={menuItem.link} className='link p-2 hover:bg-gray-100'>
                  <img src={menuItem.image} alt={''} className="w-5 h-5 mx-4 my-2" />
                  <span style={{ lineHeight: '1.1em', marginTop: '3px' }}>{menuItem.name.includes('Nextmux') ? menuItem.name.replace('Nextmux', '') : menuItem.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;

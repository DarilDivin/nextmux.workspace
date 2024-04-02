// components/layout/Header.js
import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Grip, User, CreditCard, Settings, Keyboard, Users, UserPlus, Mail, MessageSquare, Plus, Github, LifeBuoy, Cloud, LogOut, PlusCircle } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import DropdownMenuComponent from '@/components/DropdownMenuComponent';



const Header: React.FC = () => {
  return (
    <header className="w-full text-gray-700 bg-custom border-t border-custom shadow-sm body-font fixed top-0 z-10">
      <div className="container-fluid flex items-center justify-between lg:p-4 px-2 py-4 mx-auto flex-row">
        <div className='flex flex-row items-center'>
          <Link href={'#'} className="lg:flex items-center font-medium text-white title-font md:mb-0">
            <Home className="w-auto h-5 text-white fill-current" />
          </Link>
          <nav className="flex flex-wrap items-center justify-center lg:pl-6 lg:ml-6 pl-3 ml-2 text-base border-l border-gray-200 md:mr-auto">
            <Link href="/dashboard/home" className="mr-5 font-medium hover:text-gray-900 flex flex-row items-baseline">
              <img src='https://nextmux.net/logo/nextmux-only-white.png' className='w-auto h-5 mr-2' alt='Nextmux' />    <h3 className='text-white pb-0'>Workspace</h3>
            </Link>
          </nav>
        </div>

        <div className="items-center flex gap-5">
          <DropdownMenuComponent textColor={'text-white'} />

          <DropdownMenu>
            <DropdownMenuTrigger className='hover:opacity-40 transition-all text-white py-2 rounded-full flex'>
              <Avatar className='h-8 w-8 rounded-full'>
                <AvatarImage className='rounded-full' src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Facturation</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Paramètres</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span>Raccourcis clavier</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Équipe</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Inviter des utilisateurs</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Message</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        <span>Plus...</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>Nouvelle équipe</span>
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Cloud className="mr-2 h-4 w-4" />
                <span>API</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Déconnexion</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>
    </header>
  );
};

export default Header;

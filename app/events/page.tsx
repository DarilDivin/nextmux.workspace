// Events.tsx
"use client"

import { LayoutDashboard, List, ListChecks, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import React, { Fragment } from 'react';
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
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import DashboardLayout from '@/components/layouts/DashboardLayout';

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


const Events: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return (
    <DashboardLayout>
      <div className='min-h-full py-4 lg:py-8'>
        <div className="lg:flex block items-center justify-between p-4 border-gray-100 border-2 rounded-md mb-4">
          <div className="flex h-5 items-center space-x-4 text-sm mb-4 lg:mb-0">
            <Link href={'/dashboard/home'} className="flex items-center hover:opacity-40">
              <LayoutDashboard className="lg:w-6 w-5 lg:h-6 h-5 mr-2" />
              <p className="lg:text-lg text-sm leading-6 text-gray-900">Dashboard</p>
            </Link>
            <Separator orientation="vertical" />
            <div>Événements</div>
          </div>
          <div className='lg:block flex items-end'> {/* Added lg:flex */}
            <div className="lg:hidden flex-grow" /> {/* Added flex-grow to push the button to the right on mobile */}
            <Button className='bg-gray-400 hover:bg-gray-300 transition-all lg:rounded-md rounded-full h-8'>
              <PlusCircle className="lg:mr-2 mr-2 h-4 w-4" /> Créer un événement
            </Button>
          </div>
        </div>





        <div className="border-gray-100 border-2 rounded-md min-h-96 mt-5">
          <div className="flex items-center justify-between border-b-2 border-gray-100 p-4">
            <div className='flex items-center space-x-2'>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
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
            <div className='hidden lg:block'>
              <Input type="text" placeholder="Rechercher des articles" />
            </div>
            <div className='flex flex-row items-center'>
              <Button variant="ghost">
                <ListChecks />
              </Button>
              <Button variant="ghost">
                <List />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Events;

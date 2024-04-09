'use client'
import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

import '../../app/globals.css'


const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({children, className, ...props}, forwardedRef) => (
  <AccordionPrimitive.Item 
    {...props} 
    ref={forwardedRef} 
    className={cn(
      'overflow-hidden',
      className
    )}
  >
    {children}
  </AccordionPrimitive.Item>  
));
AccordionItem.displayName = 'AccordionItem';


const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger 
      {...props} 
      ref={forwardedRef}
      className={
        cn(
          'group flex h-[45px] flex-1 cursor-default items-center justify-between px-5',
          className
      )} 
    >
      {children}
      <ChevronDown className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 AccordionChevron" aria-hidden />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>

));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, forwardedRef) => (
    <AccordionPrimitive.Content 
      {...props} 
      ref={forwardedRef}
      className={
        cn(
          'AccordionContent',
          className
      )} 
    >
      <div className="py-[15px] px-5">{children}</div>
    </AccordionPrimitive.Content>
));
AccordionContent.displayName = 'AccordionContent';

export {
    Accordion,
    AccordionItem,
    AccordionContent,
    AccordionTrigger
};
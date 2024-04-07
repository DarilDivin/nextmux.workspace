'use client'
import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

import '../app/globals.css'


const Accordion = AccordionPrimitive.Root
// const AccordionDemo = () => (
//
// );

// const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
//   <Accordion.Item
//     className={cn(
//       'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
//       className
//     )}
//     {...props}
//     ref={forwardedRef}
//   >
//     {children}
//   </Accordion.Item>
// ));

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



// const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
//   <Accordion.Header className="flex">
//     <Accordion.Trigger
//       className={cn(
//         'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
//         className
//       )}
//       {...props}
//       ref={forwardedRef}
//     >
//       {children}
//       {/*<ChevronDownIcon*/}
//       {/*  className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"*/}
//       {/*  aria-hidden*/}
//       {/*/>*/}
//       <ChevronDown className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" aria-hidden />
//     </Accordion.Trigger>
//   </Accordion.Header>
// ));


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


// const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
//   <Accordion.Content
//     className={cn(
//       'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
//       className
//     )}
//     {...props}
//     ref={forwardedRef}
//   >
//     <div className="py-[15px] px-5">{children}</div>
//   </Accordion.Content>
// ));

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
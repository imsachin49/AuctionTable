"use client";
import React, { useState, useRef, useEffect } from "react";
import { AccordionItemProps } from "@/interfaces/landingInterfaces";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

export const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="rounded-lg my-2 border border-gray-100 shadow-sm">
      <button
        className={`w-full text-left p-4 focus:outline-none`}
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center">
          <span className="text-md text-blue-950 font-sans">{title}</span>
          <span>{isOpen ? <LuMinus /> : <LuPlus />}</span>
        </div>
      </button>
      <div 
        ref={contentRef} 
        style={{ maxHeight: height }} 
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <div className="text-sm px-4 pb-4 text-blue-900">
          {content}
        </div>
      </div>
    </div>
  );
};

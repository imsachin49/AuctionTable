export interface StepperItemProps {
  index: number;
  title: string;
  description: string;
}

export interface AccordionItemProps {
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItemProps[];
}
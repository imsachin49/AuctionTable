import { AccordionItem } from "./AccordionItem";
import { AccordionProps } from "@/interfaces/landingInterfaces";

const Accordion = ({ items }: AccordionProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;

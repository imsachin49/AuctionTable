import Accordion from "./Accordion";
import { accordionItems } from "../data/landing";

export default function Faqs() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl p-4">
          <h1 className="text-4xl font-bold mb-2 text-center py-5 text-blue-950">
            Frequently Asked Questions
          </h1>
          <p className="text-sm mb-8 text-center text-blue-950">
            Here are some of our most frequently asked questions. If you have a
            question that is not answered here, please feel free to contact us.
          </p>
          <Accordion items={accordionItems} />
        </div>
      </div>
    </>
  );
}
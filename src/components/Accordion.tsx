import React, { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-2xl font-medium">{title}</h3>
        <span className="text-2xl font-bold">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;

import Accordion from "./Accordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HomeFaq() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const slideInVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className="bg-dixie p-8 space-y-6 md:p-16"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInVariants}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <h3 className="text-4xl font-bold relative">
        <span>&#9632;</span>
        <span> FREQUENTLY ASKED QUESTIONS</span>
      </h3>
      <div className="mx-auto p-8 shadow-lg">
        <Accordion title="What types of construction projects do you specialize in?">
          <p className="text-xl">
            We specialize in a wide range of construction projects, including
            residential, commercial, and industrial. Our expertise extends to
            new construction, renovations, remodeling, and interior fit-outs.
            Whether you need a custom home built, an office space designed, or a
            warehouse constructed, we have the experience and skills to deliver
            exceptional results.
          </p>
        </Accordion>
        <Accordion title="How do you ensure the quality and safety of your construction projects?">
          <p className="text-xl">
            Quality and safety are our top priorities. We adhere to strict
            industry standards and best practices throughout the construction
            process. Our team consists of highly skilled professionals who are
            committed to delivering top-notch craftsmanship. We also conduct
            regular inspections, follow comprehensive safety protocols, and
            collaborate closely with architects and engineers to ensure that
            every project meets or exceeds safety and quality standards.
          </p>
        </Accordion>
        <Accordion title="How do you handle project timelines and budgets?">
          <p className="text-xl">
            We understand the importance of staying on schedule and within
            budget. Our team carefully plans each project and creates a detailed
            timeline to ensure efficient progress. We provide transparent and
            accurate cost estimates, and our project management approach focuses
            on effective resource allocation and close monitoring. We maintain
            open communication with our clients throughout the project, promptly
            addressing any concerns and adapting to changes when necessary to
            meet deadlines and financial expectations.
          </p>
        </Accordion>
        <Accordion title="How do you handle communication and collaboration during the construction process?">
          <p className="text-xl">
            Effective communication and collaboration are vital to the success
            of any construction project. We prioritize clear and open lines of
            communication with our clients, architects, subcontractors, and
            other stakeholders.
          </p>
        </Accordion>
      </div>
    </motion.section>
  );
}

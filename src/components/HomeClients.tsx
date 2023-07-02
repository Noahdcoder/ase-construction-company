import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TestimonialSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const slideInVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className="bg-slate-50 p-8 space-y-6 md:p-16"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInVariants}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <h3 className="text-4xl text-dixie font-bold relative">
        <span>&#9632;</span>
        <span> WHAT OUR CLIENTS SAY ABOUT US</span>
      </h3>
      <div className="bg-white mx-auto p-8 max-w-3xl shadow-lg">
        <p className="leading-10 text-2xl">
          Absolutely thrilled with the exceptional work delivered by ASE
          Construction Company Limited. From start to finish, their team
          demonstrated professionalism, expertise, and a strong commitment to
          quality. They exceeded expectations in every aspect of the project,
          and the end result was nothing short of outstanding.
        </p>
      </div>
    </motion.section>
  );
}

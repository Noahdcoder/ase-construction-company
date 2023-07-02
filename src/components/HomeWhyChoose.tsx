import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SlideInDivProps {
  index: number;
  title: string;
  description: string;
  borderStyles: string;
  slideDirection: "left" | "right";
}

export default function HomeWhyChoose() {
  const SlideInDiv: React.FC<SlideInDivProps> = ({
    index,
    title,
    description,
    borderStyles,
    slideDirection,
  }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    const slideInVariants = {
      hidden: {
        opacity: 0,
        x: slideDirection === "left" ? -100 : 100,
        y: slideDirection === "left" ? -100 : 100,
        scale: 0,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      },
    };

    return (
      <motion.div
        className={`flex space-x-2 p-8 ${borderStyles}`}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInVariants}
        transition={{ duration: 0.8, delay: 0.2 * index }}
        ref={ref}
      >
        <span className="text-3xl text-hurricane">0{index + 1}</span>
        <div className="space-y-4">
          <h4 className="text-4xl font-semibold">{title}</h4>
          <p className="text-xl">{description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="space-y-6 p-8 md:px-16">
      <h3 className="text-4xl text-dixie font-bold relative">
        <span>&#9632;</span>
        <span> WHY CHOOSE US?</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <SlideInDiv
          index={0}
          title="Optimal pricing"
          description="ASE Construction Company Limited provides the best price because we offer high-quality construction services at competitive rates."
          borderStyles="border-r-2 border-b-2 border-hurricane"
          slideDirection="left"
        />
        <SlideInDiv
          index={1}
          title="Daily advisory"
          description="ASE Construction Company Limited provides daily consultant to our clients to ensure that their projects are on track and within budget."
          borderStyles="border-r-2 border-b-2 border-hurricane md:border-r-0"
          slideDirection="right"
        />
        <SlideInDiv
          index={2}
          title="Bespoke design"
          description="ASE Construction Company Limited provides custom design services to our clients to ensure that their projects are tailored to their specific needs and preferences."
          borderStyles="border-r-2 border-b-2 border-hurricane md:border-b-0"
          slideDirection="left"
        />
        <SlideInDiv
          index={3}
          title="Superior Quality"
          description="ASE Construction Company Limited provides superior quality construction services because we use only the highest quality materials and workmanship."
          borderStyles="border-r-2 border-b-2 border-hurricane md:border-b-0 md:border-r-0"
          slideDirection="right"
        />
      </div>
    </section>
  );
}

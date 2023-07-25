import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

interface ChildDivProps {
  children: ReactNode;
}

export default function HomeUnmatched() {
  const ChildDiv: React.FC<ChildDivProps> = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    const slideUpVariants = {
      hidden: {
        y: 50,
        opacity: 0,
        scale: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        scale: 1,
      },
    };

    return (
      <motion.div
        className="relative rounded-full h-64 w-64"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideUpVariants}
        transition={{ duration: 1 }}
        ref={ref}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section className="bg-slate-50 p-8 space-y-6 md:p-16">
      <h3 className="text-4xl text-dixie font-bold relative">
        <span>&#9632;</span>
        <span> UNMATCHED IN EVERY ASPECT</span>
      </h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:gap-16">
          <ChildDiv>
            <Link href="about-us" legacyBehavior>
              <a>
                <Image
                  src="/home-1.jpg"
                  alt="A picture of a semi-completed building which was made by ASE construction limited"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl bg-black bg-opacity-50 hover:bg-transparent px-4 py-2 rounded-full absolute h-64 w-64 flex items-center justify-center transform -rotate-12 transition-all duration-300">
                    Check Us Out
                  </h3>
                </div>
              </a>
            </Link>
          </ChildDiv>
          <ChildDiv>
            <Link href="services" legacyBehavior>
              <a>
                <Image
                  src="/circle.jpg"
                  alt="A picture of a semi-completed building which was made by ASE construction limited"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl bg-black bg-opacity-50 hover:bg-transparent px-4 py-2 rounded-full absolute h-64 w-64 flex items-center justify-center transform -rotate-12 transition-all duration-300">
                    Our Services
                  </h3>
                </div>
              </a>
            </Link>
          </ChildDiv>
          <ChildDiv>
            <Link href="contact" legacyBehavior>
              <a>
                <Image
                  src="/home-3.jpg"
                  alt="A picture of a semi-completed building which was made by ASE construction limited"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl bg-black bg-opacity-50 hover:bg-transparent px-4 py-2 rounded-full absolute h-64 w-64 flex items-center justify-center transform -rotate-12 transition-all duration-300">
                    Booking
                  </h3>
                </div>
              </a>
            </Link>
          </ChildDiv>
        </div>
      </div>
    </section>
  );
}

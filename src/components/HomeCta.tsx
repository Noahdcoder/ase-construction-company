import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HomeCta() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const slideInVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className="flex flex-col space-y-8 bg-gray p-8 md:p-16 md:flex-row md:space-y-0 border-b border-pampas"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInVariants}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <div className="md:w-2/3">
        <h6 className="text-white text-3xl font-bold md:px-8">
          Why wait any longer? Let&apos;s start a conversation about your
          project!
        </h6>
      </div>
      <section className="flex justify-center items-center md:w-1/3">
        <Link href="/contact" legacyBehavior>
          <a className="w-full bg-dixie text-white text-center text-3xl font-semibold p-4 rounded-full hover:opacity-75">
            Contact Us
          </a>
        </Link>
      </section>
    </motion.section>
  );
}

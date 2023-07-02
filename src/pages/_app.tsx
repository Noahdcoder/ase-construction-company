import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleBeforePopState = () => {
      // Prevent animation when the user navigates back/forward
      setShouldAnimate(false);
      return false;
    };

    router.beforePopState(handleBeforePopState);

    // Reset the animation flag on component unmount
    return () => {
      router.beforePopState(() => true); // Restore the default behavior
      setShouldAnimate(true);
    };
  }, [router]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={shouldAnimate ? "pageInitial" : false}
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
              y: 200,
            },
            pageAnimate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.3 },
            },
            pageExit: {
              opacity: 0,
              y: -50,
              transition: { duration: 0.3 },
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

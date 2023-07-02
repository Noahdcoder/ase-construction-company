import Meta from "@/components/Meta";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { AnimatePresence, motion } from "framer-motion";
import HomeWhyChoose from "@/components/HomeWhyChoose";
import HomeUnmatched from "@/components/HomeUnmatched";
import TestimonialSection from "@/components/HomeClients";
import HomeFaq from "@/components/HomeFaq";
import HomeCta from "@/components/HomeCta";

export default function Home() {
  return (
    <div className="w-screen">
      <Meta
        title="Home"
        description="Welcome to ASE Construction Company Limited, your trusted partner in exceptional construction services. We specialize in residential and commercial construction, offering reliable solutions tailored to your unique needs. From expert project management to top-notch craftsmanship, we deliver outstanding results that exceed expectations. Explore our portfolio and experience the excellence of ASE Construction. Contact us today for a consultation."
      />
      <NavBar />
      <AnimatePresence>
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray"
        >
          <div className="grid grid-cols-1 pt-24 px-8 md:gap-8 md:grid-cols-2 md:px-16">
            <h1 className="text-pampas text-4xl font-bold py-8 md:text-5xl">
              BUILD YOUR DREAM PROPERTY WITH FRESH PERSPECTIVES
            </h1>
            <div className="space-y-2 md:space-y-0">
              <h2 className="text-2xl text-pampas font-bold md:py-8">
                ABOUT US
              </h2>
              <p className="text-slate-50 text-lg">
                ASE Construction Company Limited is a leading construction
                company that specializes in residential and commercial
                construction. We have a team of experienced and qualified
                professionals who are dedicated to providing our customers with
                the highest quality construction services.
              </p>
            </div>
          </div>
          <div className="flex justify-center p-8">
            <Image
              src="/trial.png"
              alt="Image of a building that was constructed by ASE Construction Limited"
              width={600}
              height={400}
              className="md:h-80 md:w-3/4"
            />
          </div>
        </motion.header>
      </AnimatePresence>
      <div>
        <HomeWhyChoose />
        <HomeUnmatched />
        <section className="p-8 md:p-16">
          <div className="relative">
            <video
              className="w-full h-auto"
              style={{ maxHeight: "400px" }}
              controls
            >
              <source src="/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <TestimonialSection />
        <HomeFaq />
        <HomeCta />
      </div>
    </div>
  );
}

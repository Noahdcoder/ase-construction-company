import Meta from "@/components/Meta";
import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function About() {
  return (
    <>
      <Meta
        title="About Us"
        description="Discover the story behind ASE Construction Company Limited. With a solid reputation for excellence and years of industry expertise, we are a leading construction firm dedicated to delivering exceptional results. Learn about our team of skilled professionals, our commitment to quality craftsmanship, and our client-centric approach. Trust ASE Construction to bring your vision to life with integrity, precision, and a focus on exceeding expectations. Explore our About page and partner with us for your next construction project."
      />
      <NavBar />
      <div className="py-24 px-4 md:px-16">
        <h1 className="text-5xl text-center font-bold drop-shadow text-dixie">
          About Us
        </h1>
        <h2 className="py-4 text-gray text-3xl text-center font-semibold">
          Build your dream property with fresh perspectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <Image
              src="/ase-logo-color.png"
              alt="Logo for ASE Construction Company Limited"
              width={800}
              height={400}
              priority={true}
            />
          </div>
          <div className="p-8 space-y-2">
            <p className="text-xl leading-8">
              ASE Construction Company Limited is a leading construction company
              that specializes in residential and commercial construction. We
              have a team of experienced and qualified professionals who are
              dedicated to providing our customers with the highest quality
              construction services.
            </p>
            <p className="text-xl leading-8">
              We are committed to exceeding our customers&apos; expectations and
              delivering projects on time and within budget.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h3 className="py-4 text-gray text-3xl text-center font-semibold">
              Our Mission
            </h3>
            <p className="text-xl leading-8">
              Our mission at ASE Construction Company Limited is to build with
              excellence, integrity, and innovation, delivering exceptional
              construction solutions that exceed our clients&apos; expectations
              while positively impacting communities and creating lasting value.
            </p>
          </div>
          <div className="p-8">
            <h3 className="py-4 text-gray text-3xl text-center font-semibold">
              Our Vision
            </h3>
            <p className="text-xl leading-8">
              Our vision at ASE Construction Company Limited is to be a trusted
              leader in the construction industry, recognized for our unwavering
              commitment to quality, safety, and customer satisfaction. We
              strive to continuously improve and shape the future of
              construction through our expertise, dedication, and sustainable
              practices.
            </p>
          </div>
        </div>
        <div className="bg-pampas rounded-xl shadow-lg">
          <h4 className="text-center py-8 text-3xl text-dixie font-semibold">
            Our core values at ASE Construction Company Limited
          </h4>
          <div className="justify-center pb-4">
            <ul className="grid grid-cols-1 text-2xl font-medium gap-4 md:grid-cols-2 justify-items-center">
              <li>Excellence</li>
              <li>Integrity</li>
              <li>Reliability</li>
              <li>Collaboration</li>
              <li>Safety</li>
              <li>Innovation</li>
              <li>Sustainability</li>
              <li>Client Satisfaction</li>
              <li>Professionalism</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

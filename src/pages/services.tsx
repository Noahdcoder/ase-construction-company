import Meta from "@/components/Meta";
import ServiceListing from "@/components/ServiceListing";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Services() {
  const images: string[] = ["one", "two", "three", "four", "five", "six"];
  return (
    <>
      <Meta
        title="Services"
        description="Discover our comprehensive range of construction services at ASE Construction Company Limited. From general contracting and construction management to renovation and remodeling, commercial construction, and residential construction, we deliver exceptional results with unwavering commitment. Trust our expertise to bring your vision to life and exceed your expectations."
      />
      <NavBar />
      <div className="py-24 px-4 max-w-5xl mx-auto md:px-16">
        <h1 className="text-5xl text-center font-bold drop-shadow text-dixie">
          Services
        </h1>
        <ServiceListing
          id="general-contracting"
          title="General Contracting"
          description="We offer top-notch general contracting services, handling every aspect
          of your construction project with precision and expertise. From
          project planning to execution, we ensure seamless coordination and
          deliver exceptional results."
        />
        <ServiceListing
          id="construction-management"
          title="Construction Management"
          description="Leave the complexities of construction management to us. Our
          experienced team will oversee your project from start to finish,
          ensuring efficient planning, scheduling, and budgeting to achieve
          successful project completion."
        />
        <ServiceListing
          id="renovation-and-remodeling"
          title="Renovation and Remodeling"
          description="Transform your space with our renovation and remodeling services. Whether it's a residential or commercial property, we bring creativity and attention to detail to breathe new life into your surroundings, exceeding your expectations."
        />
        <ServiceListing
          id="commercial-construction"
          title="Commercial Construction"
          description="From office buildings to retail spaces, we specialize in commercial construction projects. Our team has the expertise to handle diverse commercial projects, delivering high-quality craftsmanship and functional design."
        />
        <ServiceListing
          id="residential-construction"
          title="Residential Construction"
          description="Building dream homes is our passion. With a focus on quality and customer satisfaction, we bring your residential construction projects to life. From custom homes to renovations, we create spaces that reflect your unique style and enhance your lifestyle."
        />
        <h3 className="text-3xl text-center font-semibold py-4 drop-shadow text-dixie">
          Images of some of our works during and after construction
        </h3>
        <div className="grid grid-cols-1 pt-4 gap-8 md:grid-cols-2">
          {images.map((image) => (
            <Image
              key={image} // Add a unique key prop for each image
              src={`/${image}.jpg`}
              alt="One of the projects built by ASE Construction Company Limited"
              width={800}
              height={400}
              className="h-96 border rounded-lg shadow-sm border-dixie"
            />
          ))}
        </div>
      </div>
    </>
  );
}

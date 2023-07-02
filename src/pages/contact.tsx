import Meta from "@/components/Meta";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <Meta
        title="Contact"
        description="Get in touch with ASE Construction Company Limited for all your construction needs. Our experienced team is ready to assist you with general inquiries, project consultations, and collaboration opportunities. Contact us today and let's bring your construction vision to life."
      />
      <NavBar />
      <div className="py-24 px-4 max-w-5xl mx-auto md:px-16">
        <h1 className="text-5xl text-center font-bold drop-shadow text-dixie">
          Contact
        </h1>
        <h2 className="py-4 text-gray text-3xl text-center font-semibold">
          Get in touch with ASE Construction Company Limited for all your
          construction needs.
        </h2>
        <ContactForm />
      </div>
    </>
  );
}

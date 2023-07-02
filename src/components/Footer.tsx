import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="grid grid-cols-1 bg-gray gap-8 p-8 md:p-16 md:grid-cols-2 lg:gap-16 lg:grid-cols-4">
        <div className="space-y-6">
          <div>
            <h6 className="text-2xl text-white font-semibold">
              ASE Construction Company Limited
            </h6>
            <p className="text-xl text-pampas">RC: 7021493</p>
          </div>
          <p className="text-xl text-pampas">Edo State, Nigeria</p>
          <div className="break-words">
            <a
              href="mailto:info@aseconstructioncompanylimited.com"
              className="text-xl text-pampas hover:opacity-75"
            >
              info@aseconstructioncompanylimited.com
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <Link href="about-us" legacyBehavior>
            <a>
              <h6 className="text-2xl text-white font-normal hover:opacity-75">
                About Us
              </h6>
            </a>
          </Link>
          <p className="text-xl text-pampas">
            ASE Construction Limited is a leading construction company that
            specializes in residential and commercial construction.
          </p>
        </div>
        <div className="space-y-4">
          <Link href="services" legacyBehavior>
            <a>
              <h6 className="text-2xl text-white font-normal hover:opacity-75">
                Services
              </h6>
            </a>
          </Link>
          <ul className="space-y-2">
            <li>
              <Link href="/services#general-contracting" legacyBehavior>
                <a className="text-lg text-pampas hover:opacity-75">
                  General Contracting
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services#construction-management" legacyBehavior>
                <a className="text-lg text-pampas hover:opacity-75">
                  Construction Management
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services#renovation-and-remodeling" legacyBehavior>
                <a className="text-lg text-pampas hover:opacity-75">
                  Renovation and Remodeling
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services#commercial-construction" legacyBehavior>
                <a className="text-lg text-pampas hover:opacity-75">
                  Commercial Construction
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services#residential-construction" legacyBehavior>
                <a className="text-lg text-pampas hover:opacity-75">
                  Residential Construction
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <Link href="contact" legacyBehavior>
            <a>
              <h6 className="text-2xl text-white font-normal hover:opacity-75">
                Contact
              </h6>
            </a>
          </Link>
          <ul className="space-y-2">
            <li>
              <div className="text-pampas text-xl">
                <a
                  href="tel:+234 905 921 8922
"
                  className="hover:opacity-75"
                >
                  <p>Mr. Sammie Akhidenor / CEO</p>
                  <div className="flex text-white space-x-2 items-center">
                    <FontAwesomeIcon icon={faPhone} />
                    +234 905 921 8922
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="text-pampas text-xl">
                <a
                  href="tel:+2348106353290
"
                  className="hover:opacity-75"
                >
                  <p>Mrs. O. Akhidenor / Executive Director</p>
                  <div className="flex text-white space-x-2 items-center">
                    <FontAwesomeIcon icon={faPhone} />
                    +234 810 635 3290
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-hurricane py-2 px-8 md:py-4 md:px-16">
        <p className="text-center text-white text-lg">
          &#169; {currentYear} ASE CONSTRUCTION COMPANY LIMITED
        </p>
      </div>
    </>
  );
};

export default Footer;

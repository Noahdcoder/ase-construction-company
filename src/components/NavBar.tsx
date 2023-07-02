import Image from "next/image";
import Link from "next/link";
import { useNavbarSize } from "../../hooks/useNavBarSize";
import { useRouter } from "next/router";

export default function NavBar() {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-dixie transition ease transform duration-1000`;
  const router = useRouter();
  const { isOpen, setIsOpen, menuRef } = useNavbarSize();
  return (
    <>
      <nav className="fixed z-10 w-full bg-gray shadow-lg p-4 space-y-4 border-b-2 border-pampas md:px-16">
        <div className="flex justify-between">
          {/* Larger Screens' Links */}
          <ul className="hidden justify-around items-center space-x-16 text-pampas text-xl font-bold transition-all md:flex">
            <li
              className={`hover:text-white ${
                router.pathname === "/" ? "text-dixie" : ""
              }`}
            >
              <Link href="/" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>
            <li
              className={`hover:text-white ${
                router.pathname === "/about-us" ? "text-dixie" : ""
              }`}
            >
              <Link href="about-us" legacyBehavior>
                <a>About Us</a>
              </Link>
            </li>
          </ul>
          {/* Image Logo */}
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/ase-icon-color.png"
                alt="The Ebaidebheki Initiative Logo"
                width={100}
                height={50}
                priority={true}
              />
            </a>
          </Link>
          {/* Larger Screens' Links */}
          <ul className="hidden justify-around items-center space-x-16 text-pampas hover:text-white text-xl font-bold transition-all md:flex">
            <li
              className={`hover:text-white ${
                router.pathname === "/services" ? "text-dixie" : ""
              }`}
            >
              <Link href="services" legacyBehavior>
                <a>Services</a>
              </Link>
            </li>
            <li
              className={`hover:text-white ${
                router.pathname === "/contact" ? "text-dixie" : ""
              }`}
            >
              <Link href="contact" legacyBehavior>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          {/* Mobile Hamburger */}
          <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
        {/* Mobile Links */}
        <ul
          ref={menuRef}
          className={`space-y-4 text-pampas text-xl overflow-hidden transition-max-height duration-1000 md:hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="about-us" legacyBehavior>
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="services" legacyBehavior>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

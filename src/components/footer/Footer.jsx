import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/banner2.png";
const Footer = () => {
  return (
    <footer className="w-full border-t border-default-200 bg-default-50 px-6 pt-12 pb-6">
      <div className="max-w-6xl mx-auto">
        {/* brand */}
        <div>
          <Image
            className="md:w-40 md:h-40"
            src={logo}
            height={100}
            width={100}
            alt="brand image"
          ></Image>

          <p className="text-md md:text-lg mb-5">
            A seamless digital library experience. Explore, borrow, and return
            books — all in one place.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* explore */}
          <div>
            <p className="text-md  font-medium uppercase md:text-lg mb-4">
              Explore
            </p>
            {[
              { label: "Home", href: "/" },
              { label: "All books", href: "/books" },
              { label: "Categories", href: "/books" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="block text-md md:text-lg text-default-500 hover:text-cyan-500 underline mb-2 "
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* account */}
          <div>
            <p className="text-md md:text-lg font-medium uppercase mb-4">
              Account
            </p>
            {[
              { label: "Sign in", href: "/sign-in" },
              { label: "Sign up", href: "/sign-up" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="block text-md md:text-lg  hover:text-cyan-400 underline mb-2 "
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        {/* contact */}
        <div className="text-center">
          <p className="text-md font-medium uppercase md:text-lg mb-4">
            Contact us
          </p>
          <div className="rounded-xl border border-default-200 bg-default-100 p-4 space-y-3 ">
            {[
              { text: "hello@bookloop.app" },
              { text: "Pabna, Bangladesh" },
              { text: "Mon to Fri, 9am – 6pm" },
            ].map((c) => (
              <div key={c.text}>
                <span className="text-center text-md md:text-lg">{c.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* bottom bar */}
        <div className="border-t border-default-200 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs md:text-lg text-default-400">
            © 2026 Book Loop. All rights reserved.
          </span>
          <span className="text-xs md:text-lg  flex items-center gap-1">
            Nextjs - Better Auth
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-white/70 backdrop-blur-lg text-sm md:text-xl font-bold absolute top-0 left-0  md:py-6 px-5 md:px-10 flex items-center  w-full justify-between z-100">
      <div className="flex items-center ">
        <Link href="/" className="flex items-center md:gap-6">
          <div className="h-8 w-8 md:h-10 md:w-10 relative shrink-0">
            <Image
              className="object-cover rounded-full"
              src="/Nathan.png"
              alt="Nathan profile image"
              layout="fill"
            />
          </div>
          <h1 className="invisible md:visible w-0 md:w-auto">
            Nathan MacDonald Photography
          </h1>
        </Link>
        <div className="flex items-center gap-10 pl-6 md:ml-10 md:border-l border-black">
          <Link href="/about">About</Link>
          <Link href="https://www.instagram.com/nathan.macdobald/">
            Instagram
          </Link>
        </div>
      </div>
      <div className="group flex relative">
        <div className="transition-all duration-700 opacity-0 absolute translate-x-96 md:group-hover:opacity-100 md:group-hover:-translate-x-36 w-56">
          Coming Soon!
        </div>
        <AiOutlineShoppingCart className="h-5 w-5 md:h-7 md:w-7" />
      </div>
    </header>
  );
};

export default Header;

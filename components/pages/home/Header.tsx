import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-white/70 backdrop-blur-lg text-xl font-bold absolute top-0 left-0 py-6 px-10 flex items-center  w-full justify-between z-100">
      <div className="flex items-center gap-6">
        <Image
          className="object-cover rounded-full"
          src="/Nathan.png"
          alt="Nathan profile image"
          height={50}
          width={50}
        />
        <h1>Nathan MacDonald Photography</h1>
        <div className="flex items-center gap-10 pl-6 border-l border-black">
          <Link href="/about">About</Link>
          <Link href="https://www.instagram.com/nathan.macdobald/">
            Instagram
          </Link>
        </div>
      </div>
      <AiOutlineShoppingCart className="h-7 w-7" />
    </header>
  );
};

export default Header;

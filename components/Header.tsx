import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className="bg-white/70 backdrop-blur-lg text-sm md:text-xl font-bold absolute top-0 left-0  md:py-6 px-5 md:px-10 flex items-center  w-screen justify-between z-100">
      <div className="flex items-center ">
        <div className="group relative">
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
          <div className="transition-all h-[2px] w-0 group-hover:w-[170px] bg-black absolute right-[153px] duration-500 opacity-0 md:group-hover:opacity-100"></div>
          <div className="transition-all h-[2px] w-0 group-hover:w-[154px] bg-black absolute left-[233px] duration-500 opacity-0 md:group-hover:opacity-100"></div>
        </div>
        <div className="flex items-center gap-10 pl-6 md:ml-10 md:border-l border-black">
          <div className="group relative">
            <Link href="/about">About</Link>
            {pathname === "/about" ? (
              <div className="h-[2px] w-full bg-black absolute"></div>
            ) : (
              <>
                <div className="transition-all h-[2px] w-0 group-hover:w-[26px] bg-black absolute right-[32px] duration-500 opacity-0 md:group-hover:opacity-100"></div>
                <div className="transition-all h-[2px] w-0 group-hover:w-8 bg-black absolute left-[26px] duration-500 opacity-0 md:group-hover:opacity-100"></div>
              </>
            )}
          </div>
          <div className="group relative">
            <Link href="https://www.instagram.com/nathan.macdobald/">
              Instagram
            </Link>

            <div className="transition-all h-[2px] w-0 group-hover:w-[51px] bg-black absolute right-[50px] duration-500 opacity-0 md:group-hover:opacity-100"></div>
            <div className="transition-all h-[2px] w-0 group-hover:w-[51px] bg-black absolute left-[50px] duration-500 opacity-0 md:group-hover:opacity-100"></div>
          </div>
        </div>
      </div>
      <div className="group flex relative">
        <div className="transition-all duration-700 opacity-0 absolute left-0 md:group-hover:opacity-100 md:group-hover:-translate-x-36 md:group-hover:w-56 w-0 overflow-hidden">
          <div className="w-36">Coming Soon!</div>
        </div>
        <AiOutlineShoppingCart className="h-5 w-5 md:h-7 md:w-7" />
      </div>
    </header>
  );
};

export default Header;

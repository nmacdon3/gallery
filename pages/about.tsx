import classNames from "classnames";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const font = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const B = ({ children }: { children: ReactNode }) => {
  return (
    <b className={classNames("text-sky-600", font.className)}>{children}</b>
  );
};

export default function About() {
  return (
    <>
      <Head>
        <title>About - Nathan MacDonald Photography</title>
      </Head>
      <div className="flex flex-col lg:flex-row-reverse md:items-center gap-12 lg:justify-center overflow-y-scroll overflow-x-hidden h-screen text-lg lg:text-xl px-5 md:px-10 lg:px-36 pt-20 md:pt-32 lg:pt-9">
        <div>
          <p>
            I am <B>not</B> a photographer.
          </p>
          <br />
          <p>
            I <B>am</B> a web developer who loves spinning up small projects in
            his spare time.
          </p>
          <br />
          <p>
            This project was a fun way for me to try out Next.js. You can check
            out the code{" "}
            <Link
              href="https://github.com/nmacdon3/gallery"
              className="underline decoration-sky-600"
            >
              here.
            </Link>
          </p>
          <br />
          <p>
            I also wanted to try my hand at a photography site. As a hobby
            designer, I love photography sites for their <B>minimal</B> and{" "}
            <B>calming</B> interfaces. If I was hired to design a photography
            site, it might look something like this.
          </p>
          <br />
          <p>Thanks for checking out my project!</p>
          <br />
          <p>
            Here's one of my favorite pictures of my son, <B>Moses</B>.
          </p>
        </div>
        <Image
          src="/MOSES_2.png"
          alt="Picture of Moses"
          height={200}
          width={400}
        />
      </div>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const B = ({ children }: { children: ReactNode }) => {
  return <b className="font-bold text-sky-600">{children}</b>;
};

export default function About() {
  return (
    <>
      <Head>
        <title>About - Nathan MacDonald Photography</title>
      </Head>
      <div className="flex flex-col md:flex-row-reverse md:items-center gap-12 md:justify-center overflow-y-scroll overflow-x-hidden h-screen text-lg md:text-xl px-5 md:px-36 pt-20 md:pt-9">
        <div>
          <p>
            I am certainly <B>not</B> a photographer.
          </p>
          <br />
          <p>
            However, I <B>am</B> a web developer who loves spinning up small
            projects in his spare time.
          </p>
          <br />
          <p>
            I've been wanting to try out <B>Next.js</B> for a long time, so this
            is my first stab at a Next application. It's far from perfect, and
            there's still alot for me to learn, but I'm excited to keep chipping
            away at it. You can check out the code{" "}
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
            site, it would probably look something like this.
          </p>
          <br />
          <p>Thanks for checking out my project!</p>
          <br />
          <p>
            Here's a picture of my son, <B>Moses</B>.
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

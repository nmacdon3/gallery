import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";

import Photo from "~/components/Photo";
import ViewToggle, { ViewType } from "~/components/ViewToggle";

import { ImageType } from "./api/images";

export function useGetImages() {
  return useSWR<ImageType[]>("/api/images", () =>
    fetch("/api/images").then((r) => r.json())
  );
}

export default function Home() {
  const images = useGetImages();
  const [view, setView] = useState<ViewType>("gallery");

  return (
    <>
      <Head>
        <title>Nathan MacDonald Photography</title>
      </Head>
      <main>
        {view === "gallery" ? (
          <div className="relative flex justify-center w-full overflow-y-scroll overflow-x-hidden py-20 md:py-40 h-screen">
            <div className="md:grid md:grid-cols-3 md:gap-10 space-y-10 md:space-y-0  md:items-center md:px-10 ">
              {images.data?.map((img) => (
                <Photo key={img.name} img={img} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center overflow-y-hidden h-screen gap-24 overflow-x-scroll pl-96 snap-x">
            {images.data?.map((img) => (
              <div
                key={img.name}
                className="w-1/2 shrink-0 snap-center relative"
              >
                <Photo key={img.name} img={img} />
              </div>
            ))}
          </div>
        )}
        <div className="absolute bottom-10 left-10 md:visible invisible">
          <ViewToggle view={view} setView={setView} />
        </div>
      </main>
    </>
  );
}

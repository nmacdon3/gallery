import Image from "next/image";
import classnames from "classnames";
import { useState } from "react";
import ViewToggle, { ViewType } from "~/components/ViewToggle";
import useSWR from "swr";
import { ImageType } from "./api/images";
import Header from "../components/pages/home/Header";
import Photo from "../components/pages/home/Photo";

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
      <main className={classnames("transition-all ease-in-out duration-1000")}>
        {view === "gallery" ? (
          <div className="relative flex justify-center w-full overflow-y-scroll overflow-x-hidden py-40 h-screen">
            <div className="grid grid-cols-3 gap-10  items-center">
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
        <Header />
        <div className="absolute bottom-10 left-10">
          <ViewToggle view={view} setView={setView} />
        </div>
      </main>
    </>
  );
}

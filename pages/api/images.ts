// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { StaticImageData } from "next/image";
import useSWR from "swr";

export interface ImageType {
  src: string;
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ImageType[]>
) {
  res.status(200).json([
    { name: "Shark Fin", src: "/SHARK_FIN.jpeg" },
    { name: "Sands", src: "/SANDS.jpeg" },
    { name: "Moses", src: "/MOSES.jpeg" },
    { name: "Cape", src: "/CAPE.jpeg" },
    { name: "Rain", src: "/RAIN.jpeg" },
    { name: "Depth", src: "/DEPTH.jpeg" },
    { name: "Cliff", src: "/CLIFF.jpeg" },
    { name: "Far Off", src: "/FAR_OFF.jpeg" },
    { name: "Bright", src: "/BRIGHT.jpeg" },
    { name: "Down", src: "/DOWN.jpeg" },
    { name: "Bear", src: "/BEAR.jpeg" },
    { name: "Flat", src: "/FLAT.jpeg" },
    { name: "Flag", src: "/FLAG.jpeg" },
  ]);
}

export function useGetImages() {
  return useSWR<ImageType[]>("/api/images", () =>
    fetch("/api/images").then((r) => r.json())
  );
}

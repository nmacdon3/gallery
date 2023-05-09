// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

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
    { name: "Lighthouse", src: "/LIGHTHOUSE.jpeg" },
    { name: "Dimensions", src: "/DIMENSIONS.jpeg" },
    { name: "Down", src: "/DOWN.jpeg" },
    { name: "Cape", src: "/CAPE.jpeg" },
    { name: "Far Off", src: "/FAR_OFF.jpeg" },
    { name: "Bright", src: "/BRIGHT.jpeg" },
    { name: "Side", src: "/SIDE.jpeg" },
    { name: "Bear", src: "/BEAR.jpeg" },
    { name: "Flat", src: "/FLAT.jpeg" },
    { name: "Flag", src: "/FLAG.jpeg" },
  ]);
}

import Image from "next/image";
import { ImageType } from "../api/images";

const Photo = ({ img }: { img: ImageType }) => {
  return (
    <div
      key={img.name}
      className="group flex flex-col items-center justify-center"
    >
      <Image
        className="object-cover transition duration-300  group-hover:opacity-50"
        src={img.src}
        alt={img.name}
        height={200}
        width={400}
      />
      <b className="absolute text-4xl font-bold transition duration-500 group-hover:visible invisible group-hover:-translate-y-4">
        {img.name}
      </b>
    </div>
  );
};

export default Photo;

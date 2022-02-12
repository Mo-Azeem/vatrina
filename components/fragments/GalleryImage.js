import Image from "next/image";

export default function GalleryImage({ src, fileName }) {
  return (
    <div className="cursor-pointer my-5 mr-10">
      <div className="relative h-40 w-56 shadow-lg transition-shadow hover:shadow-2xl">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt="Gallery Photo"
          className="rounded"
        />
      </div>
      <p className="m-2 text-center">{fileName}</p>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function GalleryImage({ src, fileName }) {

  return (
    <Link href={`/?photoId=${src}`}
    as={`/photos/${src}`}>
      <a>
        <div
          className="my-5 cursor-pointer items-center"
          style={{ marginRight: "3.5vw" }}
        >
          <div className="image relative h-40 shadow-lg transition-shadow hover:shadow-2xl">
            <Image
              src={src}
              layout="fill"
              objectFit="cover"
              alt="Gallery Photo"
              className="rounded-md"
            />
          </div>
          <p className="m-2 text-center text-gray-500">{fileName}</p>
        </div>
      </a>
    </Link>
  );
}

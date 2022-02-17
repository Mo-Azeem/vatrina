import Image from "next/image";
import Link from "next/link";

export default function GalleryImage({ photo }) {
  const { name: fileName, thumbnail_link } = photo
  return (
    <Link href={`/?photoId=${fileName}`}
    as={`/photos/${fileName}`}>
      <a>
        <div
          className="my-5 cursor-pointer items-center"
          style={{ marginRight: "3.5vw" }}
        >
          <div className="image relative h-40 shadow-lg transition-shadow hover:shadow-2xl">
            <Image
              src={thumbnail_link}
              layout="fill"
              objectFit="cover"
              alt="Gallery Photo"
              className="rounded-md"
            />
          </div>
          <p className="m-2 text-center text-gray-500">{fileName.substring(0,10)}...</p>
        </div>
      </a>
    </Link>
  );
}

import Image from "next/image";
import Button from "../../components/fragments/Button";
import { useRouter } from "next/router";

export default function ImageViewer({ src }) {
  const filler = "dooooooood";

  return (
    <div className="imageviewer">
      <div
        className="imageviewer-image z-20 flex flex-row items-center bg-black"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="image-section w-[70%] h-full">
          <div className="the-image relative h-full w-full">
            <Image
              src="/dude.jpg"
              alt="dude"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="sidesection flex w-[30%] h-full flex-col justify-around items-center bg-gray-100">
          <div className="text-section text-sm font-normal leading-6 text-gray-600">
            <p className="">Dimensions: {filler}</p>
            <p className="">Size: {filler}</p>
            <p className="">Image Type: {filler}</p>
            <p className="">Bit Depth: {filler}</p>
            <p className="">Horizontal Resolution: {filler}</p>
            <p className="">Vertical Resolution: {filler}</p>
          </div>
          <div className="download-section space-y-3">
            <Button lable={"Full Reseloution"} />
            <Button lable={"Thumbnail"} />
          </div>
        </div>
      </div>
    </div>
  );
}

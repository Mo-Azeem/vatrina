import Image from "next/image";
import Button from "../fragments/Button";

export default function ImageViewer({ src, onClose }) {
  const filler = "dooooooood";
  return (
    <div className="imageviewer fixed top-0 left-0 ">
      <div onClick={onClose} className="imageviewer-background fixed top-0 left-0 z-10 h-screen w-screen bg-black opacity-80"></div>
      <div
        className="imageviewer-image dead-center z-20 flex flex-row items-center rounded-xl bg-black"
        style={{ width: "75vw", height: "80vh" }}
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
        <div className="sidesection flex w-[30%] h-full flex-col justify-around items-center bg-gray-100 rounded-tr-xl rounded-br-xl ">
          <div className="text-section text-sm font-normal leading-6 text-gray-600">
            <p className="">Dimensions: {filler}</p>
            <p className="">Size: {filler}</p>
            <p className="">Image Type: {filler}</p>
            <p className="">Bit Depth: {filler}</p>
            <p className="">Horizontal Resolution: {filler}</p>
            <p className="">Vertical Resolution: {filler}</p>
          </div>
          <div className="download-section space-y-3">
            <Button lable={"Full Reseloution" } logo='/download.png' />
            <Button lable={"Thumbnail"} logo='/download.png' />
          </div>
        </div>
      </div>
    </div>
  );
}

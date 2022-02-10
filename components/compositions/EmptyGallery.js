import Image from "next/image";
import Button from "../fragments/Button";

export default function EmptyGallery() {
  return (
    <div className="empty-gallery flex flex-col items-center gap-y-4 my-36">
      <Image
        src={"/empty_gallery.svg"}
        width="250px"
        height="220px"
        alt="empty_gallery"
      />
      <Button lable="Upload" onClick={() => alert("hello")} />
      <div className="text-block text-center">
          <h3 className="font-extrabold text-gray-700">it&apos;s empty here</h3>
          <p className="text-gray-500">Upload some photos to get started!</p>
      </div>
    </div>
  );
}

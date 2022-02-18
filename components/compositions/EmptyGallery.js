import Image from "next/image";
import UploadButton from "../fragments/UploadButton";

export default function EmptyGallery() {
  return (
    <div className="empty-gallery dead-center flex flex-col items-center gap-y-4">
      <Image
        src={"/empty_gallery.svg"}
        width="250px"
        height="220px"
        alt="empty_gallery"
      />
      <UploadButton />
      <div className="text-block text-center mt-3">
          <h3 className="font-extrabold text-gray-700">it&apos;s empty here</h3>
          <p className="text-gray-400 font-bold">Upload some photos to get started!</p>
      </div>
    </div>
  );
}

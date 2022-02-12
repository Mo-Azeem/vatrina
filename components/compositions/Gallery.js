import GalleryImage from "../fragments/GalleryImage";

export default function Gallery() {
  return (
    <div className="gallery flex flex-col gap-3 w-full">
      <div className="gallery-info">
          <h3 className="font-bold text-lg leading-5">12 Photos Total</h3>
          <p className="font-medium text-gray-500">Click on a photo for more details</p>
      </div>
      <div className="w-full gallery-photos flex flex-row flex-wrap justify-start ">
        <GalleryImage src="/dude.jpg" fileName="sss.jpg" />
        <GalleryImage src="/dude.jpg" fileName="sss.jpg" />
        <GalleryImage src="/dude.jpg" fileName="sss.jpg" />
        <GalleryImage src="/dude.jpg" fileName="sss.jpg" />
      </div>
    </div>
  );
}

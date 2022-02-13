import GalleryImage from "../fragments/GalleryImage";
import ImageViewer from "./ImageViewer";
import { useRouter } from "next/router";
import Modal from "react-modal";
import modalStyles from "../../styles/modalStyle";

Modal.setAppElement("#__next");

export default function Gallery() {
  const router = useRouter();
  const { photoId } = router.query;
  return (
    <div className="gallery mt-5 flex w-full flex-col gap-3">
      <div className="gallery-info">
        <h3 className="text-lg font-bold leading-5">12 Photos Total</h3>
        <p className="font-medium text-gray-500">
          Click on a photo for more details
        </p>
      </div>
      <div className="gallery-photos flex w-full flex-row flex-wrap justify-start">
        <GalleryImage src="/dude.jpg" fileName="sss.jpg" />
        <GalleryImage src="/dude.jpg" fileName="sss.jpg" />
        <GalleryImage src="/dude.jpg" fileName="sss.jpg" />
        <GalleryImage src="/dude.jpg" fileName="sss.jpg" />
        <GalleryImage src="/dude.jpg" fileName="sss.jpg" />
        <GalleryImage src="/dude.jpg" fileName="sss.jpg" />
      </div>
      <Modal
        isOpen={!!photoId}
        onRequestClose={() => router.push("/")}
        style={modalStyles}
      >
        <ImageViewer onClose={() => router.push("/")} />
      </Modal>
    </div>
  );
}

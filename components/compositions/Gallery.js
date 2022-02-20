import GalleryImage from "../fragments/GalleryImage";
import ImageViewer from "./ImageViewer";
import { useRouter } from "next/router";
import Modal from "react-modal";
import modalStyles from "../../styles/modalStyle";
import { useState } from "react";

Modal.setAppElement("#__next");

export default function Gallery({ photos }) {
  /*  the next line is logically hard even for the 300IQs brains to accept,
      but it solves a problem where {photos} goes undefined after a photo is opened
      in the ImageViewer component as a Modal, getting a copy of {photos} before it 
      being garbage collected after opening a photo is the solution, 
      yet this line makes me wanna seek another profesion */
  const [_photos, setPhotos] = useState(photos);
  const router = useRouter();
  const { photoId } = router.query;
  
  if(!_photos.map) location.reload()
  return (
    <div className="gallery mt-5 flex w-full flex-col gap-3">
      <div className="gallery-info">
        <h3 className="text-lg font-bold leading-5">
          {_photos.length} Photos Total
        </h3>
        <p className="font-medium text-gray-500">
          Click on a photo for more details
        </p>
      </div>
      <div className="gallery-photos flex w-full flex-row flex-wrap justify-start gap-x-4">
        {_photos.map((photo) => (
          <GalleryImage key={photo.name} photo={photo} />
        ))}
      </div>
      <Modal
        isOpen={!!photoId}
        onRequestClose={() => router.push("/")}
        style={modalStyles}
      >
        <ImageViewer photoId={photoId} onClose={() => router.push("/")} />
      </Modal>
    </div>
  );
}

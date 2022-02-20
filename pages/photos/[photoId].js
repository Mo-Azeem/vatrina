import Image from "next/image";
import Button from "../../components/fragments/Button";
import usePhotos from "../../components/hooks/usePhotos";

export default function ImageViewerFullPage({photoId}) {
  const {photos, isLoading, isError} = usePhotos(photoId)
  
  if(isError) return "ERROR"
  if(isLoading) return "Loading"

  const { name, photo_link, filesize, metadata, thumbnail_link } = photos

  return (
    <div className="imageviewer">
      <div
        className="imageviewer-image z-20 flex flex-row items-center bg-black"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="image-section w-[70%] h-full">
          <div className="the-image relative h-full w-full">
            <Image
              src={photo_link}
              alt={name}
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </div>
        </div>
        <div className="sidesection flex w-[30%] h-full flex-col justify-around items-center bg-gray-100">
          <div className="text-section text-sm font-normal leading-6 text-gray-600">
          <p className="">
              Dimensions:{" "}
              <strong>
                {metadata.width}x{metadata.height}
              </strong>{" "}
            </p>
            <p className="">
              Size: <strong> {filesize} MB</strong>
            </p>
            <p className="">
              Image Type: <strong>{metadata.format}</strong>
            </p>
            <p className="">
              Density: <strong>{metadata.density}</strong>
            </p>
            <p className="">
              Horizontal Resolution: <strong>{metadata.width}</strong>
            </p>
            <p className="">
              Vertical Resolution: <strong>{metadata.height}</strong>
            </p>
          </div>
          <div className="download-section space-y-3">
            <h1 className="text-center text-xl font-extrabold text-gray-500">
              Download Links
            </h1>
            <Button
              lable={"Full Reseloution"}
              onClick={() => download(photo_link, name)}
            />
            <Button
              lable={"Thumbnail"}
              onClick={() => download(thumbnail_link, `thumb-${name}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ImageViewerFullPage.getInitialProps = async ({query}) => {
  return {
    photoId: query.photoId
  }
}

async function download(src, fileName) {
  const photo = await fetch(src);
  const photoBlog = await photo.blob();
  const photoURL = URL.createObjectURL(photoBlog);

  const link = document.createElement("a");
  link.href = photoURL;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
import { useState } from "react";
import { reRenderGallery } from "./GalleryController";

export default function UploadingDialog({ file, setIsUploading }) {
  let [progress, setProgress] = useState(0);

  if (file) upload(file, setProgress, setIsUploading);
  return (
    <div
      className="uploading-dialog dead-center-bottom fixed flex h-24 w-1/2 flex-col items-center rounded-xl bg-violet-600 pb-2 shadow-lg"
      style={{ maxWidth: "700px", minWidth: "400px" }}
    >
      <div className="progress-bar-container m-auto w-5/6 ">
        <h1 className="my-1 self-start font-bold text-gray-50">
          Uploading {`${progress}%`}
        </h1>
        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2 rounded-full bg-gray-50"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

async function upload(file, setProgress, setIsUploading) {
  const formData = new FormData();
  formData.append("photo", file);
  const ajax = new XMLHttpRequest();
  ajax.upload.addEventListener(
    "progress",
    (event) => progressHandler(event, setProgress),
    false
  );
  ajax.addEventListener(
    "load",
    (event) => completeHandler(setIsUploading),
    false
  );
  ajax.addEventListener("error", errorHandler, false);
  ajax.open("POST", "http://127.0.0.1:5000/api/photos");
  ajax.send(formData);
}

function progressHandler(event, setProgress) {
  let precent = Math.round((event.loaded / event.total) * 100);
  setProgress(precent);
}

function completeHandler(setIsUploading) {
  setIsUploading(false);

  //because I didn't use Redux, I should have... maybe later.
  location.reload();
}

function errorHandler() {
  console.log("ERROR UPLOADING");
  location.reload();
}

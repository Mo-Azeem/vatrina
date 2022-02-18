import UploadingDialog from "../compositions/UploadDialog";
import { useState } from "react";

export default function UploadButton() {
    const[isUploading, setIsUploading] = useState(false)
  return (
    <div>
      <label
        className="button bg-primary cursor-pointer rounded-xl px-12 py-2 font-bold text-gray-50"
        htmlFor="upload-file"
      >
        Upload
        <input
          className="hidden"
          type="file"
          name="upload-file"
          id="upload-file"
          onChange={()=>upload(setIsUploading)}
        />
      </label>
      {isUploading && <UploadingDialog file={document.getElementById('upload-file').files[0]} setIsUploading={setIsUploading} />}
    </div>
  );
}

function upload(setIsUploading) {
  setIsUploading(true)

}

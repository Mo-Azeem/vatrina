export default function UploadingDialog() {
  return (
    <div
      className="uploading-dialog fixed bottom-10 left-28 flex h-24 w-1/2 flex-col items-center rounded-xl bg-violet-600 pb-2 shadow-lg"
      style={{ maxWidth: "700px", minWidth: '400px'}}
    >
      <div className="progress-bar-container m-auto w-5/6 ">
        <h1 className="my-1 self-start font-bold text-gray-50">
          Uploading 75%
        </h1>
        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2 rounded-full bg-gray-50"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

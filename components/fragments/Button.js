import Image from "next/image";

export default function Button({ lable, onClick, logo }) {
  return (
    <div
      className="button bg-primary cursor-pointer rounded-xl px-12 py-2 font-bold text-gray-50"
      onClick={() => onClick()}
    >
      <div className="content flex flex-row items-center">
        <p>{lable}</p>
        {logo && (
          <div className="splitter mx-4 h-8 border-l-2 border-gray-300 opacity-50"></div>
        )}
        {logo && <Image src={logo} width="20px" height="20px" alt="logo" />}
      </div>
    </div>
  );
}

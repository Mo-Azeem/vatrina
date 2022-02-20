import Image from "next/image";

export default function Button({ lable, onClick }) {
  return (
    <div
      className="button bg-primary cursor-pointer rounded-xl px-12 py-2 text-center font-bold text-gray-50"
      onClick={() => onClick()}
    >
      <p>{lable}</p>
    </div>
  );
}

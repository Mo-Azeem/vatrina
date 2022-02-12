export default function Button({ lable, onClick }) {
  return (
    <div
      className="button cursor-pointer rounded-xl bg-violet-600 px-16 py-2 font-bold text-gray-50"
      onClick={() => onClick()}
    >
      <p>{lable}</p>
    </div>
  );
}

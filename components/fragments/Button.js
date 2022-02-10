export default function Button({ lable, onClick }) {
  return (
    <div className="cursor-pointer rounded-lg bg-violet-600 px-16 py-2 font-bold text-gray-50 hover:bg-violet-700 shadow-xl hover:shadow-sm"
    onClick={() => onClick()}>
      <p>{lable}</p>
    </div>
  );
}

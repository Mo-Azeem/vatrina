import Image from 'next/image'

export default function Button({ lable, onClick, logo }) {
  return (
    <div
      className="button cursor-pointer rounded-xl bg-primary px-16 py-2 font-bold text-gray-50"
      onClick={() => onClick()}
    >
      <div className="content flex flex-row items-center">
      <p>{lable}</p>
      {logo && <div className='splitter h-8 border-l-[1px] mx-4 border-gray-300 opacity-50'></div>}
      {logo && <Image src={logo} width='20px' height='20px' alt='logo'/>}
      </div>
    </div>
  );
}

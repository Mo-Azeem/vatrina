import Image from "next/image"
import UploadButton from "./UploadButton"

export default function Navbar({empty}){
    return <nav className="flex flex-row justify-between items-center w-full mt-5">
            <div className="relative logo w-32 h-24">
                <Image src="/logo.svg" layout="fill" objectFit="fill" alt="logo"/>
            </div>
            <UploadButton />
    </nav>
}
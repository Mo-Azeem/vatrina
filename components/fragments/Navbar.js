import Image from "next/image"
import Button from "./Button"

export default function Navbar({empty}){
    return <nav className="flex flex-row justify-between items-center w-full">
            <Image src="/logo.svg" alt="logo" width={'128px'} height={'128px'} />
            {!empty && <Button lable='Upload' />}
            
    </nav>
}
import Image from "next/image"
export default function Navbar(){
    return <nav>
            <Image src="/logo.svg" alt="logo" width={'128px'} height={'128px'} />
    </nav>
}
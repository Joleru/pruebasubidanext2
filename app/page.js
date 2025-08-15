import Menu from "./componets/Menu";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
   <>
     <Menu/>
     <Image src="/file.svg" alt="Next.js Logo" className="w-32 h-32 mx-auto mt-8" width={100} height={100} />
   </>
  );
}


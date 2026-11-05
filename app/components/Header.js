"use client";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center relative top-5 ml-5 font-weight">
      <Image
        className="h-16 w-16 animate-bounce"
        alt="ballon"
        src="/ballon.png"
        width={64}
        height={64}
      />
      <p className="m-[6px] font-codecpro text-xl">Portfolio</p>
    </div>
  );
}

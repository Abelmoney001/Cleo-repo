"use client"
import { Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Header = () => {
  return (
    <header className="flex items-center gap-3 justify-between border-b-[1.5px] pb-2 border-b-white/35">
      <div className="inline-flex items-center gap-2">
        <Image
          src={"/images/cleo.jpg"}
          className="rounded-full"
          alt=""
          width={40}
          height={40}
        />
        <p className="text-white font-semibold text-sm">Cleo</p>
      </div>
      <nav className="inline-flex items-center gap-3 md:gap-5 md:text-[15px] text-xs">
        <Link href={"https://www.stacks.co/"} target="_blank">
          Stacks
        </Link>
        <Link href={"https://www.stacks.co/explore/ecosystem"} target="_blank">
          Ecosystem
        </Link>

        <Link
          href={"https://x.com/CleoAiSTX?t=r2h45IIL1ibTVbWvruufsw&s=09"}
          target="_blank"
          className="inline-flex items-center gap-1"
        >
          <Twitter size={18} className="" />
          <span>Twitter</span>
        </Link>
      </nav>
    </header>
  )
}

"use client"
import { Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Header = () => {
  return (
    <header className="flex items-center gap-3 justify-between border-b-[1.5px] pb-1 border-b-white/35">
      <div className="inline-flex items-center">
        <Image src={"/logo.svg"} alt="" width={40} height={32} />
        <p className="text-white font-semibold text-sm">MemeGoatSTX</p>
      </div>
      <nav className="inline-flex items-center gap-3 md:gap-5 md:text-[15px] text-xs">
        <Link href={"https://app.memegoat.io/"} target="_blank">
          App
        </Link>
        <Link href={"https://games.memegoat.io/"} target="_blank">
          Games
        </Link>

        <Link
          href={"https://twitter.com/goatcoinstx"}
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

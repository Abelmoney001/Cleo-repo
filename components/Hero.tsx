"use client"
import React, { useEffect } from "react"
import { Video } from "./Video"
import Image from "next/image"
import { Avatar, Button } from "antd"
import Link from "next/link"
import gsap from "gsap"
import { TextPlugin } from "gsap/all"

gsap.registerPlugin(TextPlugin)

export const Hero = () => {
  const timeline = gsap.timeline({
    defaults: { ease: "back", duration: 0.5 },
  })
  useEffect(() => {
    timeline
      .from(".hero-text", { xPercent: -130, stagger: 0.5 })
      .from(".to-up", { yPercent: 180, stagger: 0.4 })
      .from(".hero-img", { yPercent: 110, duration: 0.5, ease: "power1" }, 0.5)
      .from(".anime-cards", { scale: 0, stagger: 0.5 })
  }, [])
  return (
    <div>
      <div className="lg:my-16 md:my-10 my-7">
        <div className="flex justify-between gap-5 md:flex-row flex-col-reverse">
          <div className="md:w-[45%]">
            <div className="hero-text">
              <h3 className="lg:text-6xl md:text-5xl text-4xl leading-tight uppercase lg:mb-16 md:mb-10 my-7 mb-5">
                The Ai newscaster{" "}
                <div className="inline-flex items-center gap-2">
                  <span>for</span>
                  <Avatar.Group>
                    <Avatar
                      src="/images/cleo.jpg"
                      className="border-0 md:h-[3rem] md:w-[3rem]"
                    />
                    <Avatar
                      src="/images/stx.svg"
                      className="border-0 md:h-[3rem] md:w-[3rem]"
                    />
                  </Avatar.Group>
                  <span className="bg-yellow- leading-7">Stacks</span>
                </div>
              </h3>
            </div>
            <div className="py-4 border-t-[1.5px] border-t-white/35 hero-text">
              <div className="flex text-white/80 gap-3 justify-between overflow-y-hidden">
                <h5 className="md:text-lg text-sm uppercase to-up">
                  I&apos;m Cleo
                </h5>
                <div>
                  <h5 className="md:text-lg text-sm uppercase to-up">
                    A lady cat
                  </h5>
                  <h5 className="md:text-lg text-sm uppercase to-up">
                    Memecoin
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[40%] w-full overflow-hidden">
            <Video />
          </div>
        </div>
      </div>
      <div className="md:pt-0 pt-7">
        <div className="flex justify-between md:flex-row flex-col">
          <div>
            <div className="flex items-center gap-2 hero-text">
              <Image
                src={"/images/cleo.jpg"}
                height={42}
                width={42}
                alt=""
                className="rounded-full"
              />
              <div>
                <p className=" text-xs typewriter-text">
                  I bring you news from around
                </p>
                <p className=" text-xs typewriter-text-2">
                  happenings on stacks.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:mt-16 mt-4">
              <Link
                href={"https://www.stacks.co/"}
                target="_blank"
                className="hero-text"
              >
                <Button
                  className="bg-transparent text-white md:w-[200px] w-full uppercase rounded-2xl hover:!bg-transparent hover:!border-white/35 hover:!text-white"
                  size="large"
                >
                  Stacks
                </Button>
              </Link>
              <Link
                href={"https://www.stacks.co/explore/ecosystem"}
                target="_blank"
                className="hero-text"
              >
                <Button
                  className="bg-transparent text-white md:w-[250px] w-full uppercase rounded-2xl hover:!bg-transparent hover:!border-white/35 hover:!text-white"
                  size="large"
                >
                  Ecosystem
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-1 gap-7 md:w-[65%] mt-[50px]">
            <div className="w-full h-[250px] bg-orange-500 p-4 md:p-6 rounded-2xl relative flex flex-col justify-between anime-cards">
              <div className="absolute z-[-1] -top-[15px] right-0 w-[105px] h-[40px] bg-orange-500 rounded-2xl"></div>
              <div>
                <h3 className="text-2xl text-black">TVL</h3>
              </div>
              <div>
                <h2 className="text-5xl text-black">$50,000</h2>
              </div>
            </div>
            <div className="w-full h-[250px] bg-slate-300 p-4 md:p-6 rounded-2xl relative flex flex-col justify-between anime-cards">
              <div className="absolute z-[-1] -top-[15px] right-0 w-[105px] h-[40px] bg-slate-300 rounded-2xl"></div>
              <div>
                <h3 className="text-2xl text-black">Volume</h3>
              </div>
              <div>
                <h2 className="text-5xl text-black">$50,000</h2>
              </div>
            </div>

            <div className="w-full h-[250px] bg-yellow-300 p-4 md:p-6 rounded-2xl relative flex flex-col justify-between anime-cards">
              <div className="absolute z-[-1] -top-[15px] right-0 w-[105px] h-[40px] bg-yellow-300 rounded-2xl"></div>
              <div>
                <h3 className="text-2xl text-black">Price</h3>
              </div>
              <div>
                <h2 className="text-5xl text-black">$50,000</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
